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
  Text,
  useDisclosure,
  Link,
  Stack,
} from "@chakra-ui/react";

import React, { ReactNode, useState } from "react";

const Links = ["Create Task", "Search Tasks", "Account"];

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

const NavSearch = () => {
  return (
    <IconButton
      variant="ghost"
      colorScheme="whiteAlpha"
      aria-label="new task"
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
    <Menu>
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
      <HStack display={{ base: "none" }} w={"auto"}>
        {Links.map((link) => (
          <NavLink key={link}>{link}</NavLink>
        ))}
      </HStack>
    </Menu>
  );
};

const NavContainer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
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
          <NavAvatar />
        </HStack>
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }} w={"auto"}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default NavBar;
