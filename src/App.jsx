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

// ...

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [searchedValue, setSearchedValue] = useState('');
  const [showFavorites, setShowFavorites] = useState(false);

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
  }, [savedContacts.length]);

  const addContact = (contact) => {
    setContacts([...contacts, { ...contact, isFavorite: false }]);
    saveContacts([...contacts, { ...contact, isFavorite: false }]);
  };

  const deleteContact = (index) => {
    const newContacts = [...contacts];
    newContacts.splice(index, 1);
    setContacts(newContacts);
    saveContacts(newContacts);
  };

  const updateContact = (index, updatedName, updatedNumber) => {
    const newContacts = [...contacts];
    newContacts[index] = {
      ...newContacts[index],
      name: updatedName,
      number: updatedNumber,
    };
    setContacts(newContacts);
    saveContacts(newContacts);
  };

  const toggleFavorite = (index) => {
    const newContacts = [...contacts];
    newContacts[index] = {
      ...newContacts[index],
      isFavorite: !newContacts[index].isFavorite,
    };
    setContacts(newContacts);
    saveContacts(newContacts);
  };

  const filteredContacts = contacts.filter((contact) => {
    const matchesSearch =
      contact.name.toLowerCase().includes(searchedValue.toLowerCase()) ||
      contact.number.includes(searchedValue);
    const isFavorite = contact.isFavorite;
    return showFavorites ? isFavorite && matchesSearch : matchesSearch;
  });

  const favorites = contacts.filter((contact) => contact.isFavorite);

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
      <HStack mx={6} my={3}>
        <Button
          onClick={() => setShowFavorites(false)}
          variant={showFavorites ? 'outline' : 'solid'}
        >
          Todos los contactos
        </Button>
        <Button
          onClick={() => setShowFavorites(true)}
          variant={!showFavorites ? 'outline' : 'solid'}
        >
          Favoritos
        </Button>
      </HStack>
      <VStack spacing={5} mx={6} pb={6}>
        {filteredContacts
          .sort((a, b) => (a.isFavorite ? -1 : 1)) // Ordena los contactos según si son favoritos o no
          .map(({ name, number, isFavorite }, index) => (
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
                  <Icon
                    as={StarIcon}
                    color={isFavorite ? 'yellow.400' : 'black'}
                    cursor='pointer'
                    onClick={() => {
                      const newContacts = [...contacts];
                      newContacts[index].isFavorite = !isFavorite;
                      setContacts(newContacts);
                      saveContacts(newContacts);
                    }}
                  />
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
