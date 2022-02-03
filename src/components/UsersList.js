import React from 'react';
import User from './User';
import UserNotFound from './UserNotFound';

const UsersList = ({users, deleteUserHandler, isActiveHandler}) => {
  return (
    <>
      {
        (users.length > 0)
        ? users.map((user) => (
          <User key={user.id} user={user} deleteUserHandler={deleteUserHandler} isActiveHandler={isActiveHandler} />
        ))
        : <UserNotFound />
      }
    </>
  )
};

export default UsersList;
