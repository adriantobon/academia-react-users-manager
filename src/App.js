import { useEffect, useState } from 'react';
import AddUserModal from './components/AddUserModal';
import Header from './components/Header';
import UsersList from './components/UsersList';

// Chakra UI
import { useToast } from '@chakra-ui/react';
import UserDetailsRightSlide from './components/UserDetailsRightSlide';

const App = () => {

  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const [usersIsLoading, setUsersIsLoading] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [rightSlideIsOpen, setRightSlideIsOpen] = useState(false);
  const toast = useToast();

  useEffect(() => {

    const getUsers = async () => {
      try {
        setUsersIsLoading(true);
        const fetchResponse = await fetch(`https://reqres.in/api/users?page=${page}`);
        const { data: usersResponse, total_pages, total } = await fetchResponse.json();

        const usersList = usersResponse.map((user) => (
          {
            ...user,
            isActive: false,
          }
        ));

        // Agregando Timeout para ver el mensaje 'cargando'
        setTimeout(() => {
          setUsers(usersList);
          setTotalPages(total_pages);
          setTotalResults(total);
          setUsersIsLoading(false);
        }, 1000)
      } catch (err) {
        console.log('error catch', err);
      }
    };

    getUsers();


  }, [page]);

  const deleteUserHandler = (userId) => {

    /* Usando Set Users de una forma mas explicita  */
    // setUsers((prevState) => {
    //   const usersUpdated = prevState.filter((user) => user.id !== userId);
    //   return usersUpdated;
    // })

    /* Usando Set Users en una sola linea  */
    setUsers(users.filter((user) => user.id !== userId ))
    toast({
      title: 'Usuario Eliminado',
      status: 'error',
      duration: 3000,
    });
    setTotalResults((prev) => prev - 1);
  }

  const isActiveHandler = (userId) => {

    setUsers((prevState) => {
      const usersUpdated = prevState.map((user) => {
        // Si el user id hace match significa que hay que hacer una copia de este objeto con la propiedad 'isActive' actualizada
        if (user.id === userId) return { ...user, isActive: !user.isActive }
        // Si el user id no hace match simplemente regresamos al usuario tal cual lo tenemos
        return user;
      });

      // Aqui hacemos el return de nuestro nuevo array
      return usersUpdated;
    })
  }

  const addUserHandler = (user) => {
    setUsers((prevState) => {
      const usersUpdated = [...prevState, user];
      toast({
        title: 'Usuario creado.',
        description: `El usuario ${user.first_name} esta ${user.isActive ? 'activo' : 'inactivo'}.`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      return usersUpdated;
    });

    setTotalResults((prev) => prev + 1);
  }

  return (
    <>
      <Header usersLength={users.length} setModalIsOpen={setModalIsOpen} />
      <UsersList users={users} deleteUserHandler={deleteUserHandler} isActiveHandler={isActiveHandler} usersIsLoading={usersIsLoading} totalPages={totalPages} page={page} setPage={setPage} totalResults={totalResults} setRightSlideIsOpen={setRightSlideIsOpen} setUserSelected={setUserSelected} />
      <AddUserModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} addUserHandler={addUserHandler} />
      { userSelected && <UserDetailsRightSlide rightSlideIsOpen={rightSlideIsOpen} setRightSlideIsOpen={setRightSlideIsOpen} userSelected={userSelected} deleteUserHandler={deleteUserHandler} isActiveHandler={isActiveHandler} />}
    </>
  )

}




export default App;
