import { useState } from 'react';
import AddUserModal from './components/AddUserModal';
import Header from './components/Header';
import UsersList from './components/UsersList';

// Chakra UI
import { useToast } from '@chakra-ui/react';

const App = () => {

  const usersInit = [
    {
      id: crypto.randomUUID(),
      name: 'User 1',
      lastname: 'Lastname 1',
      email: 'test@test.com',
      image: '',
      isActive: true,
    },
    {
      id: crypto.randomUUID(),
      name: 'User 2',
      lastname: 'Lastname 2',
      email: 'test1@test.com',
      image: '',
      isActive: true,
    },
    {
      id: crypto.randomUUID(),
      name: 'User 3',
      lastname: 'Lastname 3',
      email: 'test2@test.com',
      image: '',
      isActive: false,
    },
  ]
  const [users, setUsers] = useState(usersInit);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const toast = useToast();

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
    })
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
        description: `El usuario ${user.name} esta ${user.isActive ? 'activo' : 'inactivo'}.`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      return usersUpdated;
    })
  }

  return (
    <>
      <Header usersLength={users.length} setModalIsOpen={setModalIsOpen} />
      <UsersList users={users} deleteUserHandler={deleteUserHandler} isActiveHandler={isActiveHandler} />
      <AddUserModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} addUserHandler={addUserHandler} />
    </>
  )

}




export default App;
