import {
  useDisclosure,
  Box,
  Center,
  Image,
  Input,
  VStack,
  HStack,
  WrapItem,
  Avatar,
  Text,
  Button,
  Icon,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import React from 'react';
import { logo } from './assets';
import ContactMenu from './App/ContactMenu';
import { useState } from 'react';
import AddContact from './App/AddContact';
import useLocalStorage from './App/useLocalStorage';
import { useEffect } from 'react';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [searchedValue, setSearchedValue] = useState('');

  const {
    item: savedContacts,
    saveItem: saveContacts,
    loading,
    error,
  } = useLocalStorage('contacts', []);

  useEffect(() => {
    if (savedContacts && savedContacts.length > 0) {
      setContacts(savedContacts);
    }
  }, [savedContacts]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
    saveContacts([...contacts, contact]);
  };

  const deleteContact = (index) => {
    const newContacts = [...contacts];
    newContacts.splice(index, 1);
    setContacts(newContacts);
    saveContacts(newContacts);
  };

  const updateContact = (index, updatedName, updatedNumber) => {
    const newContacts = [...contacts];
    newContacts[index] = { name: updatedName, number: updatedNumber };
    setContacts(newContacts);
    saveContacts(newContacts);
  };

  // Filtra los contactos según el valor buscado
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchedValue.toLowerCase()) ||
      contact.number.includes(searchedValue)
  );

  return (
    <Box height='100vh' bgColor='#f7f6f1'>
      <Center>
        <Image
          src={logo}
          alt='logo'
          width={['full', '500px']}
          m={[0, 8]}
        ></Image>
      </Center>
      <VStack m={5}>
        <Input
          placeholder='Andrei o 449..'
          size='lg'
          width={['full', 'md']}
          variant='outline'
          bgColor='white'
          value={searchedValue}
          onChange={(event) => setSearchedValue(event.target.value)}
        />
      </VStack>
      <Center mb={6}>
        <AddContact addContact={addContact} />
      </Center>
      <VStack spacing={5} mx={6} pb={6}>
        {filteredContacts.map(({ name, number }, index) => (
          <Box
            key={index}
            bg='none'
            w='100%'
            textColor='black'
            border='1px'
            borderRadius='10px'
            shadow='md'
            borderColor='gray.100'
          >
            <HStack justify='space-between'>
              <HStack>
                <WrapItem mr={3}>
                  <Avatar name={name} src='' />
                </WrapItem>
                <VStack align='flex-start'>
                  <Text>{name}</Text>
                  <Text>{number}</Text>
                </VStack>
              </HStack>
              <HStack>
                <Icon as={StarIcon} color='black' cursor='pointer' />
                <ContactMenu
                  deleteContact={deleteContact}
                  index={index}
                  updateContact={updateContact}
                  name={name}
                  number={number}
                  error={error}
                  loading={loading}
                />
              </HStack>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default App;
