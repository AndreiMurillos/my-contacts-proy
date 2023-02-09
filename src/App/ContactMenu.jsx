import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { SlOptionsVertical } from 'react-icons/sl';
import { useDisclosure } from '@chakra-ui/react';
import UpdateContact from './UpdateContact';

const ContactMenu = ({
  deleteContact,
  index,
  updateContact,
  contact,
  name,
  number,
}) => {
  //   const handleDelete = (e) => {
  //     e.preventDefault();
  //     deleteContact();
  //   };

  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <>
      <Menu>
        <MenuButton>
          <HStack>
            <SlOptionsVertical cursor='pointer' />
          </HStack>
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => onOpen()}>Editar</MenuItem>
          <MenuItem onClick={() => deleteContact(index)}>Eliminar</MenuItem>
        </MenuList>
      </Menu>

      <UpdateContact
        isOpen={isOpen}
        onClose={onClose}
        contact={contact}
        name={name}
        number={number}
      />
    </>
  );
};

export default ContactMenu;
