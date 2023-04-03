import {
  AddIcon,
  SearchIcon,
  HamburgerIcon,
  Icon,
  CloseIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Center,
  HStack,
  Button,
  IconButton,
  Avatar,
  MenuButton,
  Menu,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode, useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return <NavContainer />;
};

const NavAvatar = () => {
  return (
    <Avatar
      name="Dan Abrahmov"
      src="https://bit.ly/dan-abramov"
      size="sm"
      className="ring-1 ring-white"
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

const MenuItems = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
      <NavNewTask />
      <NavSearch />
      <NavAvatar />
    </Menu>
  );
};

const NavContainer = ({ ...props }) => {
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
          <MenuItems />
        </HStack>
      </Flex>
    </Box>
  );
};

export default NavBar;
