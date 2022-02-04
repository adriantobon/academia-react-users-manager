import React from 'react';
import User from './User';
import UserNotFound from './UserNotFound';

// Chakra UI
import { Flex, List, ListItem, Text } from '@chakra-ui/react';

const UsersList = ({users, deleteUserHandler, isActiveHandler, usersIsLoading, setRightSlideIsOpen, setUserSelected, pagination, setPagination}) => {
  
  const { page, total, total_pages } = pagination;
  
  return (
    <>
      {
        (users.length > 0 && !usersIsLoading)
        ? users.map((user) => (
          <User key={user.id} user={user} deleteUserHandler={deleteUserHandler} isActiveHandler={isActiveHandler} setRightSlideIsOpen={setRightSlideIsOpen} setUserSelected={setUserSelected} />
        ))
        : <UserNotFound usersIsLoading={usersIsLoading} />
      }


      {
        total_pages > 0
        && (
          <Flex
            alignItems="center"
            justifyContent="space-between"
            px={4}
            w="100%"
          >
            <List
              alignItems="center"
              display="flex"
              gap={4}
              height={10}
            >

              {
                [...Array(total_pages)].map((e, i) => (
                  <ListItem
                    key={i}
                    shadow="md"
                    backgroundColor={(page === i + 1) ? '#eee' : undefined}
                    py={1}
                    px={2}
                    _hover={{cursor: 'pointer', backgroundColor: '#eee'}}
                    onClick={() => setPagination((prev) => ({...prev, page: i + 1 }))}
                  >
                    {i + 1}
                  </ListItem>
                ))
              }
            </List>
            <Text fontWeight="bold">Total: {total}</Text>

          </Flex>
        )
      }
    </>
  )
};

export default UsersList;
