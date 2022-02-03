import React from 'react';

// Chakra UI
import { Button } from '@chakra-ui/react';
import { DeleteIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons';

const UserActions = ({user, deleteUserHandler, isActiveHandler}) => {
  return (
    <>
      {
        (user.isActive)
        ? <Button onClick={() => isActiveHandler(user.id)} bgColor="transparent">{<CloseIcon />}</Button>
        : <Button onClick={() => isActiveHandler(user.id)} bgColor="transparent">{<CheckIcon />}</Button>
      }
      <Button onClick={() => deleteUserHandler(user.id)}>{<DeleteIcon />}</Button>
    </>
  )
};

export default UserActions;
