import React from 'react';
import { ReactDOM } from 'react-dom';
import { useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from '@chakra-ui/react';
import {
  ModalContent,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  useDisclosure,
  ModalOverlay,
} from '@chakra-ui/react';

const AddContact = ({ addContact }) => {
  // const [contactName, setContactName] = useState("");
  // const [contactNumber, setContactNumber] = useState("");
  // const [contacts, setContacts] = useState([]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addContact({ name, number });
    setName('');
    setNumber('');
    onClose();
  };

  return (
    <>
      <Button
        colorScheme='teal'
        size='md'
        color='white'
        bgColor='#587d9f'
        onClick={onOpen}
      >
        Add Contact
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Añadir información</ModalHeader>
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Nombre</FormLabel>
              <Input
                type='text'
                placeholder='Ingrese su nombre'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Número</FormLabel>
              <Input
                type='number'
                placeholder='Ingrese su número'
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} mr={3}>
              Cancelar
            </Button>
            <Button type='submit' colorScheme='blue' onClick={handleSubmit}>
              Añadir
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddContact;
