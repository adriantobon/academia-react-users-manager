import React, { useState, useContext } from 'react';
import { usersContext } from '../context/usersContext';

// Chakra UI
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Text, Image, Box, Button, Tooltip, Input } from '@chakra-ui/react';
import { DeleteIcon, CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons';

const UserDetailsRightSlide = ({rightSlideIsOpen, setRightSlideIsOpen}) => {

  const { userSelected, deleteUserHandler, isActiveHandler, editUserHandler } = useContext(usersContext);
  
  const [isEditMode, setIsEditMode] = useState(false);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  
  const actionHandler = (userId, actionType) => {
    
    if (actionType === 'delete') deleteUserHandler(userId);
    
    if (actionType === 'changeStatus') isActiveHandler(userId);

    if (actionType === 'editUser') editUserHandler({ ...userSelected, first_name: firstname, last_name: lastname, email });
    
    onCloseHandler();
    
  }

  const getEditMode = () =>{
    setFirstname(userSelected.first_name);
    setLastname(userSelected.last_name);
    setEmail(userSelected.email);
    setIsEditMode(true);
  }

  const onCloseHandler = () => {
    setRightSlideIsOpen(false);
    setIsEditMode(false);
  }
  
  return (
    <>
      {
        userSelected
        && (
          <Drawer
            isOpen={rightSlideIsOpen}
            placement="right"
            onClose={() => onCloseHandler() }
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
                      {
                        (!isEditMode)
                        ? (
                            <>
                              <Text
                                fontWeight="bold"
                                marginBottom={1}
                              >
                                {`${userSelected.first_name} ${userSelected.last_name}`}
                              </Text>
                              <Text
                                color="gray.500"
                                fontWeight="medium"
                              >
                                {userSelected.email}
                              </Text>
                    
                            </>
                        )
                        : (
                          <>
                            <Input mb={1} id="first_name" type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                            <Input mb={1} id="last_name" type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                            <Input mb={1} id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                          </>
                          
                        )
                      }


                    <Flex
                      gap={3}
                      marginTop={3}
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
                      <Tooltip label={(isEditMode) ? 'Guardar' : 'Editar'}>
                        <Button
                          onClick={() => (!isEditMode) ? getEditMode() : actionHandler(undefined, 'editUser') }
                        >
                          {
                            (isEditMode)
                            ? <CheckIcon />
                            : <EditIcon />
                          }
                        </Button>
                      </Tooltip>
                    </Flex>
                </Flex>
              </DrawerBody>
            </DrawerContent>

          </Drawer>

        )
      }
    </>
  )
};

export default UserDetailsRightSlide;
