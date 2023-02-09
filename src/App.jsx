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

const App = () => {
  const [contacts, setContacts] = useState([]);
  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };
  const deleteContact = (index) => {
    setContacts(contacts.filter((contact, i) => i !== index));
  };
  const updateContact = (index, contact) => {
    setContacts(
      contacts.map((contact, i) => {
        if (i === index) {
          return contact;
        }
        return contact;
      })
    );
  };

  return (
    <Box height='100vh' bgColor='#f7f6f7'>
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
        />
      </VStack>
      <Center>
        <AddContact addContact={addContact} />
      </Center>
      <VStack spacing={5} m={6}>
        {contacts.map(({ name, number }, index) => (
          <Box
            key={index}
            bg='none'
            w='100%'
            p={4}
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
                  onUpdate={(contact) => updateContact(index)}
                  name={name}
                  number={number}
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
