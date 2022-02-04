import { createContext } from 'react';
import { useUsers } from '../hooks';

export const usersContext = createContext(
  {
    users: [],
    setUsers: () => undefined,
    userSelected: '',
    setUserSelected: () => undefined,
    deleteUserHandler: () => undefined,
    addUserHandler: () => undefined,
    isActiveHandler: () => undefined,
    editUserHandler: () => undefined,
    pagination: {
      page: 1,
      per_page: null,
      total: null,
      total_pages: null,
    },
    setPagination: () => undefined,
    loading: true,
  }
);



export const UsersContextProvider = ({children}) => {

  const contextValue = useUsers();

  return (
    <usersContext.Provider value={contextValue}>
      {children}
    </usersContext.Provider>

  )
}
