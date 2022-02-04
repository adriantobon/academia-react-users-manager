import React, { useContext } from 'react';
import { usersContext } from '../context/usersContext';
import { dialogsContext } from '../context/dialogsContext';

// Chakra UI
import { Flex, Text, Image, Tooltip } from '@chakra-ui/react';
import UserActions from './UserActions';

const User = ({user}) => {
  
  const { setUserSelected, deleteUserHandler, isActiveHandler } = useContext(usersContext);
  const { setRightSlideIsOpen } = useContext(dialogsContext);
  
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
        <Tooltip
          bg={(user.isActive) ? 'green.400' : 'red.400'}
          label={(user.isActive) ? 'Activo' : 'Desactivado'}
        >
          <Image
            borderRadius="9999px"
            border="2px solid transparent"
            borderColor={(user.isActive) ? 'green.400' : 'red.400'}
            fallbackSrc='https://via.placeholder.com/150'
            height={10}
            src={user.avatar}
            width={10}
          />
        </Tooltip>
        <Flex
          flexDirection="column"
        >
          <Flex
            color="gray.700"
            fontWeight="bold"            
          >
            <Text
              as="a"
              _hover={{ cursor: 'pointer', color: 'gray.900'  }}
              onClick={() => {
                setUserSelected(user);
                setRightSlideIsOpen(true);
              }}
            >
              {`${user.first_name} ${user.last_name}`}
            </Text>
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
