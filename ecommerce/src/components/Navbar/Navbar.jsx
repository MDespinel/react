import React from 'react'
import Cartwidget from '../Cartwidget/Cartwidget'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
    Flex,
    Heading,
  } from '@chakra-ui/react'
  import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <Flex
    h={'10vh'} 
    w={'100%'}
     justify={'space-between'} 
     align={'center'} 
     backgroundColor={'#381D2A'}
     >
        <Heading fontSize={'xl'} m={'3px'}>LOGO</Heading>
        <Menu>
            <MenuButton as={Button} rightIcon={<FaAngleDown />}>
                Actions
            </MenuButton>
            <MenuList fontSize={'xl'}>
                <MenuItem>inicio</MenuItem>
                <MenuItem>Productos</MenuItem>
                <MenuItem>Carrito</MenuItem>
                <MenuItem>Contacto</MenuItem>
            </MenuList>
            </Menu>
        <Cartwidget />
    </Flex>
  )
}

export default Navbar
