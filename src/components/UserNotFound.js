import React from 'react';

// Chakra UI
import { Flex, Heading } from '@chakra-ui/react';

const UserNotFound = () => {
  return (
    <Flex
      alignItems="center"
      height={40}
      justifyContent="center"
      flexDirection="column"
    >
      <Heading
        as="h2"
        fontSize="xl"
      >
        No hay usuarios
      </Heading>
    </Flex>
  )
};

export default UserNotFound;
