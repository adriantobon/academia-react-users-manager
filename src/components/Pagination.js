import React, { useContext } from 'react';
import { usersContext } from '../context/usersContext';

// Chakra UI
import { Flex, List, ListItem, Text } from '@chakra-ui/react';

const Pagination = () => {

  const { pagination, setPagination } = useContext(usersContext);
  const { page, total, total_pages } = pagination;

  return (
    <>
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
  );
};

export default Pagination;
