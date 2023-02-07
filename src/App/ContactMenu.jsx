import React from "react";
import {Menu, MenuButton, MenuList, MenuItem, HStack, Icon} from "@chakra-ui/react"; 
import { SlOptionsVertical } from 'react-icons/sl';

const ContactMenu = () => {
    return (
        <Menu>
            <MenuButton>
                <HStack>
                    
                    <SlOptionsVertical cursor='pointer'/>
                </HStack>
            </MenuButton>
            <MenuList>
                <MenuItem>Editar</MenuItem>
                <MenuItem>Eliminar</MenuItem>
            </MenuList>
        </Menu>
    );
}

export default ContactMenu;