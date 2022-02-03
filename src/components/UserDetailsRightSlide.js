import React from 'react';

// Chakra UI
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Text, Image, Box, Button, Tooltip } from '@chakra-ui/react';
import { DeleteIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons';

const UserDetailsRightSlide = ({rightSlideIsOpen, setRightSlideIsOpen, userSelected, deleteUserHandler, isActiveHandler}) => {
  
  const actionHandler = (userId, actionType) => {
    
    if (actionType === 'delete') deleteUserHandler(userId);
    
    if (actionType === 'changeStatus') isActiveHandler(userId);
    
    setRightSlideIsOpen(false)
    
  }
  
  return (
    <Drawer
      isOpen={rightSlideIsOpen}
      placement="right"
      onClose={() => setRightSlideIsOpen(false)}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Detalles de usuario</DrawerHeader>
        <DrawerBody>
          {/* <Text>{userSelected.first_name}</Text> */}
          <Flex
            alignItems="center"
            flexDirection="column"
          >
            <Image
              borderRadius="9999px"
              border="4px solid transparent"
              borderColor="gray.200"
              fallbackSrc='https://via.placeholder.com/150'
              height={28}
              src={userSelected.avatar}
              width={28}
            />

            <Box
              as="span"
              backgroundColor={(userSelected.isActive) ? 'green.400' : 'red.400'}
              borderRadius="9999px"
              h={4}
              marginTop={-7}
              marginBottom={5}
              marginRight="-80px"
              w={4}
            />

            <Text
              fontWeight="bold"
            >
              {`${userSelected.first_name} ${userSelected.last_name}`}
            </Text>

            <Text
              color="gray.500"
              fontWeight="medium"
              mb={2}
            >
              {userSelected.email}
            </Text>
            <Flex
              gap={3}
            >
              <Tooltip label={(userSelected.isActive) ? 'Desactivar' : 'Activar'}>
                <Button
                  backgroundColor={(userSelected.isActive) ? 'red.400' : 'teal.300'}
                  _hover={(userSelected.isActive) ? { backgroundColor: 'red.500' } : { backgroundColor: 'teal.400' }}
                  color="white"
                  onClick={() => actionHandler(userSelected.id, 'changeStatus')}
                >
                  {
                    (userSelected.isActive)
                    ? <CloseIcon />
                    : <CheckIcon />
                  }
                </Button>
              </Tooltip>
              <Tooltip label="Eliminar" placement="bottom">
                <Button
                  bgColor="red.400"
                  _hover={{ backgroundColor: 'red.500' }}
                  color="white"
                  onClick={() => actionHandler(userSelected.id, 'delete')}
                >
                  <DeleteIcon />
                </Button>
              </Tooltip>

            </Flex>

          </Flex>
        </DrawerBody>
      </DrawerContent>

    </Drawer>
  )
};

export default UserDetailsRightSlide;
