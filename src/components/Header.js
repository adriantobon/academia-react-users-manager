import React from 'react';

// Chakra UI
import { Button, Flex, Heading } from '@chakra-ui/react'

const Header = ({usersLength, setModalIsOpen}) => (
  
  <Flex
    alignItems="center"
    marginBottom={2}
    paddingTop={4}
  >
    <Heading
      as="h1"
      marginRight={2}
    >
      User Manager ({usersLength})
    </Heading>
    <Button onClick={() => setModalIsOpen(true)}>Agregar</Button>
  </Flex>

  

)

export default Header;
