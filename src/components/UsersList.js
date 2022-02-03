import React from 'react';
import User from './User';
import UserNotFound from './UserNotFound';

// Chakra UI
import { Flex, List, ListItem, Text } from '@chakra-ui/react';

const UsersList = ({users, deleteUserHandler, isActiveHandler, usersIsLoading, totalPages, page, setPage, totalResults, setRightSlideIsOpen, setUserSelected}) => {
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
        totalPages > 0
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
                [...Array(totalPages)].map((e, i) => (
                  <ListItem
                    key={i}
                    shadow="md"
                    backgroundColor={(page === i + 1) ? '#eee' : undefined}
                    py={1}
                    px={2}
                    _hover={{cursor: 'pointer', backgroundColor: '#eee'}}
                    onClick={() => setPage(i + 1)}
                  >
                    {i + 1}
                  </ListItem>
                ))
              }
            </List>
            <Text fontWeight="bold">Total: {totalResults}</Text>

          </Flex>
        )
      }
    </>
  )
};

export default UsersList;
