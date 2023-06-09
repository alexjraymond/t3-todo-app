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
import CreateTaskModal from "./CreateTaskModal";

const Links = ["Create Task", "Search Tasks", "Dark/Light Mode", "Account"];

interface NavContainerProps {
  onOpenModal: () => void;
}

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveTask = (task: string) => {
    console.log("Task saved:", task);
  };
  return (
    <>
      <NavContainer onOpenModal={handleOpenModal} />
      <CreateTaskModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveTask}
      />
    </>
  );
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
        color: "pink.500",
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

interface NavNewTaskProps {
  onOpenModal: () => void;
}

const NavNewTask: React.FC<NavNewTaskProps> = ({ onOpenModal }) => {
  return (
    <IconButton
      variant="ghost"
      colorScheme="whiteAlpha"
      aria-label="new task"
      icon={<AddIcon />}
      size="sm"
      display={{ base: "none", md: "flex" }}
      onClick={onOpenModal}
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
      <MenuList zIndex={1000}>
        {Links.map((link) => (
          <MenuItem
            zIndex={1000}
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

const NavContainer: React.FC<NavContainerProps> = ({ onOpenModal }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        as="nav"
        bg="stone.500"
        color="stone.200"
        className="fixed left-0 top-0 m-0 w-full shadow-md"
        px={4}
        zIndex={100}
      >
        <Flex minH="40px" justifyContent="space-between">
          <Center color="white" fontWeight="bold">
            <Logo />
          </Center>
          <HStack spacing={"24px"}>
            <MenuItems isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
            <NavNewTask onOpenModal={onOpenModal} />
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
