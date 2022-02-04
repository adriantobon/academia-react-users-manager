import React, { useContext } from 'react';
import { usersContext } from '../context/usersContext';

// Chakra UI
import { Button, Flex, Heading } from '@chakra-ui/react'

const Header = ({setModalIsOpen}) => {
  
  const { users } = useContext(usersContext);

  return (
    <Flex
      alignItems="center"
      marginBottom={2}
      paddingTop={4}
    >
      <Heading
        as="h1"
        marginRight={2}
      >
        User Manager ({users.length})
      </Heading>
      <Button onClick={() => setModalIsOpen(true)}>Agregar</Button>
    </Flex>
  )
}

export default Header;
