import React, { useContext } from 'react';
import { usersContext } from '../context/usersContext';

// Components
import User from './User';
import UserNotFound from './UserNotFound';
import Pagination from './Pagination';

const UsersList = ({setRightSlideIsOpen}) => {
  
  const { users, loading } = useContext(usersContext);
  
  return (
    <>
      {
        (users.length > 0 && !loading)
        ? users.map((user) => (
          <User key={user.id} user={user} setRightSlideIsOpen={setRightSlideIsOpen} />
        ))
        : <UserNotFound usersIsLoading={loading} />
      }

      <Pagination />


      
    </>
  )
};

export default UsersList;
