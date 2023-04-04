import {
  AddIcon,
  SearchIcon,
  HamburgerIcon,
  CloseIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Center,
  HStack,
  IconButton,
  Avatar,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  MenuDivider,
  Text,
  useDisclosure,
  Link,
  Stack,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import React, { ReactNode, useState } from "react";

const Links = ["Create Task", "Search Tasks", "Dark/Light Mode", "Account"];

const NavBar = () => {
  return <NavContainer />;
};

const NavAvatar = () => {
  return (
    <Avatar
      name="Dan Abrahmov"
      src="https://bit.ly/dan-abramov"
      size="sm"
      className="ring-1 ring-white"
      display={{ base: "none", md: "flex" }}
    />
  );
};

const NavColorModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      onClick={toggleColorMode}
      variant="ghost"
      colorScheme="whiteAlpha"
      aria-label="Toggle Color Mode"
      size="sm"
      display={{ base: "none", md: "flex" }}
      _hover={{
        background: "white",
        color: "tomato",
      }}
    >
      {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};

const NavSearch = () => {
  return (
    <IconButton
      variant="ghost"
      colorScheme="whiteAlpha"
      aria-label="search tasks"
      icon={<SearchIcon />}
      size="sm"
      display={{ base: "none", md: "flex" }}
      _hover={{
        background: "white",
        color: "tomato",
      }}
    />
  );
};

const NavNewTask = () => {
  return (
    <IconButton
      variant="ghost"
      colorScheme="whiteAlpha"
      aria-label="new task"
      icon={<AddIcon />}
      size="sm"
      display={{ base: "none", md: "flex" }}
      _hover={{
        background: "white",
        color: "tomato",
      }}
    />
  );
};

const Logo = () => {
  return <Text>NotTodoist</Text>;
};

const NavLink = ({ children }: { children: ReactNode }) => {
  return (
    <Link
      variant="ghost"
      colorScheme="whiteAlpha"
      aria-label="new task"
      color={"white"}
      size="sm"
      _hover={{
        background: "white",
        color: "tomato",
      }}
    >
      {children}
    </Link>
  );
};

const MenuItems = ({ isOpen, onOpen, onClose }) => {
  return (
    <Menu autoSelect={false}>
      <MenuButton
        as={IconButton}
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        variant="ghost"
        colorScheme="whiteAlpha"
        _hover={{
          background: "white",
          color: "tomato",
        }}
        size={"sm"}
        fontSize={"20px"}
        aria-label={"Open Menu"}
        display={{ md: "none" }}
        onClick={isOpen ? onClose : onOpen}
      />
      <MenuList>
        {Links.map((link) => (
          <MenuItem
            key={link}
            _hover={{
              background: "white",
              color: "tomato",
            }}
          >
            {link}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

const NavContainer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        as="nav"
        bg="tomato"
        className="fixed left-0 top-0 m-0 w-full shadow-md"
        px={4}
      >
        <Flex minH="40px" justifyContent="space-between">
          <Center color="white" fontWeight="bold">
            <Logo />
          </Center>
          <HStack spacing={"24px"}>
            <MenuItems isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
            <NavNewTask />
            <NavSearch />
            <NavColorModeButton />
            <NavAvatar />
          </HStack>
        </Flex>
      </Box>
    </>
  );
};

export default NavBar;
