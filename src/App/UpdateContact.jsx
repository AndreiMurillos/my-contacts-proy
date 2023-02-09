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
  useDisclosure,
} from '@chakra-ui/react';

const UpdateContact = ({ isOpen, onClose, contact, name, number }) => {
  //   const { updateContact } = props;
  //   const { index } = props;
  //   const { contact } = props;
  //   const [name, setName] = useState(contact.name);
  //   const [number, setNumber] = useState(contact.number);
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     updateContact(index, { name, number });
  //     setName('');
  //     setNumber('');
  //     onClose();
  //   };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Editar Contacto</ModalHeader>
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Nombre</FormLabel>
            <Input type='text' placeholder='Ingrese su nombre' value={name} />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Numero</FormLabel>
            <Input type='text' placeholder='Ingrese su numero' value={number} />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='blue' mr={3}>
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
