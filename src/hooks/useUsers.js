import { useState, useEffect } from 'react';

import { useToast } from '@chakra-ui/react';

export const useUsers = () => {

  const paginationInit = {
    page: 1,
    per_page: null,
    total: null,
    total_pages: null,
  }

  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState(null);
  const [pagination, setPagination] = useState(paginationInit);
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  useEffect(() => {
    console.log('se ejecuta useEffect')

    const getUsers = async () => {

      try {
        setLoading(true);
        const fetchResponse = await fetch(`https://reqres.in/api/users?page=${pagination.page}&delay=3`, { cache: 'no-cache' });
        const { data: usersResponse, page, per_page, total_pages, total } = await fetchResponse.json();
    
        const paginationRes = {
          page,
          per_page,
          total_pages,
          total,
        }      
    
        const usersList = usersResponse.map((user) => (
          {
            ...user,
            isActive: false,
          }
        ));
    
        // Agregando Timeout para ver el mensaje 'cargando'
        // setTimeout(() => {
        //   setUsers(usersList);
        //   setPagination(paginationRes);
        //   setLoading(false);
        // }, 1000)
        setUsers(usersList);
        setPagination(paginationRes);
        setLoading(false);
    
    
      } catch (err) {
        console.log('error catch', err);
      }
    }

    getUsers();
  }, [pagination.page]);

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
    // setTotalResults((prev) => prev - 1);
    setPagination((prev) => ({...prev, total: prev.total - 1}))
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

    // setTotalResults((prev) => prev + 1);
    setPagination((prev) => ({...prev, total: prev.total + 1}))
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

  const editUserHandler = (user) => {
    setUsers((prevState) => {
      return prevState.map((prev) => {
        if (prev.id === user.id) {
          return { ...prev, first_name: user.first_name, last_name: user.last_name, email: user.email }
        }

        return prev;
      })
    })
  }


  return (
    { 
      users,
      setUsers,
      userSelected,
      setUserSelected,
      deleteUserHandler,
      addUserHandler,
      isActiveHandler,
      editUserHandler,
      pagination,
      setPagination,
      loading,
    }
  );

}
