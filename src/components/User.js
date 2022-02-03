import React from 'react';

// Chakra UI
import { Flex, Text, Image } from '@chakra-ui/react';
import UserActions from './UserActions';

const User = ({user, deleteUserHandler, isActiveHandler }) => {
  return (
    <Flex
      alignItems="center"
      height={16}
      justifyContent="space-between"
      marginBottom={6}
      px={4}
      shadow="md"
    >
      <Flex
        alignItems="center"
        gap={3}
      >

        <Image
          borderRadius="9999px"
          border="2px solid transparent"
          borderColor={(user.isActive) ? 'green.400' : 'red.400'}
          fallbackSrc='https://via.placeholder.com/150'
          height={10}
          src={user.image}
          width={10}
        />
        <Flex
          flexDirection="column"
        >
          <Flex
            color="gray.700"
            fontWeight="bold"            
            gap={2}
          >
            <Text>{user.name}</Text>
            <Text>{user.lastname}</Text>
          </Flex>
          <Text>{user.email}</Text>
        </Flex>
      </Flex>
      <Flex
        alignItems="center"
        gap={1}
      >

        <UserActions user={user} deleteUserHandler={deleteUserHandler} isActiveHandler={isActiveHandler} />
        
        
      </Flex>

    </Flex>
  )
};

export default User;
