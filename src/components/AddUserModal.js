import React, { useState } from 'react';

// Chakra UI
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, FormHelperText, Checkbox, Button, useToast } from '@chakra-ui/react';

const AddUserModal = ({modalIsOpen, setModalIsOpen, addUserHandler}) => {

  const toast = useToast();

  /* Estados independientes para el formulario */

  const [name, setName] = useState('');
  const handleNameChange = (e) => setName(e.target.value)
  const isNameError = name === '';

  const [lastname, setLastname] = useState('');
  const handleLastnameChange = (e) => setLastname(e.target.value)
  const isLastnameError = lastname === '';

  const [email, setEmail] = useState('');
  const handleEmailChange = (e) => setEmail(e.target.value)
  const isEmailError = email === '';

  const [image, setImage] = useState('');
  const handleImageChange = (e) => setImage(e.target.value)

  const [isActive, setIsActive] = useState(false);
  const handleIsActiveChange = (e) => {
    e.preventDefault();
    setIsActive(e.target.checked);
  }

  /* /Fin Estados independientes para el formulario */

  const resetForm = () => {
    console.log('se ejecuta reset')
    setName('');
    setLastname('');
    setEmail('');
    setImage('');
    setIsActive(false);
    setModalIsOpen(false);
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (isNameError || isLastnameError || isEmailError)
    return toast({ title: 'Llenar Campos Requeridos', status: 'error', duration: 2000 });
    
    console.log('submit');

    const newUser = {
      id: crypto.randomUUID(),
      first_name: name,
      last_name: lastname,
      isActive,
      email,
      avatar: image,
    }

    console.log(newUser)
    addUserHandler(newUser);
    resetForm();
    setModalIsOpen(false);
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onClose={() => resetForm()}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Agregar Usuario</ModalHeader>
        <ModalCloseButton onClick={() => setModalIsOpen(false)} />
        <ModalBody>
          <form onSubmit={onSubmitHandler}>
            <FormControl marginBottom={4}>
              <FormLabel htmlFor='name'>Nombre</FormLabel>
              <Input id="name" type="text" value={name} onChange={handleNameChange} />
              <FormHelperText>
                Introducir el nombre(*).
              </FormHelperText>
            </FormControl>
            <FormControl marginBottom={4}>
              <FormLabel htmlFor='lastname'>Apellido</FormLabel>
              <Input id="lastname" type="text" value={lastname} onChange={handleLastnameChange} />
              <FormHelperText>
                Introducir el apellido(*).
              </FormHelperText>
            </FormControl>
            <FormControl marginBottom={4}>
              <FormLabel htmlFor='email'>Email</FormLabel>
              <Input id="email" type="email" value={email} onChange={handleEmailChange} />
              <FormHelperText>
                Introducir el email(*).
              </FormHelperText>
            </FormControl>
            <FormControl marginBottom={4}>
              <FormLabel htmlFor='image'>Imagen</FormLabel>
              <Input id="image" type="text" value={image} onChange={handleImageChange} />
              <FormHelperText>
                Introducir url.
              </FormHelperText>
            </FormControl>
            <FormControl
              alignItems="center"
              display="flex"
              marginBottom={4}
            >
              <FormLabel htmlFor='isActive'>Activo?</FormLabel>
              <Checkbox marginTop="-6px" id="isActive" defaultChecked={isActive} onChange={handleIsActiveChange} />
            </FormControl>
            <Button type='submit' w="100%" mb={4}>Agregar</Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
};

export default AddUserModal;
