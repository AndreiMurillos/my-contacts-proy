import React from 'react';
import { useState } from 'react';

import {
  Modal,
  ModalOverlay,
  ModalBody,
  ModalHeader,
  ModalContent,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Button,
} from '@chakra-ui/react';

const UpdateContact = ({
  isOpen,
  onClose,
  contact,
  name,
  number,
  updateContact,
  index,
}) => {
  const [newName, setNewName] = useState(name);
  const [newNumber, setNewNumber] = useState(number);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateContact(index, newName, newNumber);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Editar Contacto</ModalHeader>
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Nombre</FormLabel>
            <Input
              type='text'
              placeholder='Ingrese su nombre'
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Numero</FormLabel>
            <Input
              type='text'
              placeholder='Ingrese su numero'
              value={newNumber}
              onChange={(e) => setNewNumber(e.target.value)}
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            type='submit'
            colorScheme='blue'
            mr={3}
            onClick={handleSubmit}
          >
            Guardar
          </Button>
          <Button variant='ghost' onClick={onClose}>
            Cancelar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default UpdateContact;
