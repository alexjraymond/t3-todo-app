import { AddIcon, SearchIcon, HamburgerIcon } from "@chakra-ui/icons";
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
} from "@chakra-ui/react";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const NavBar = () => {
  return (
    <Box as="nav" bg="tomato" className="fixed w-full" px={4}>
      <Flex minH="40px" justifyContent="space-between">
        <Center color="white" fontWeight="bold">
          <text>NotTodoist</text>
        </Center>
        <HStack>
          <Center justifyContent="space-between" gap={2}>
            <Menu>
              {/* <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="ghost"
              /> */}

              <IconButton
                variant="ghost"
                colorScheme="whiteAlpha"
                aria-label="new task"
                icon={<SearchIcon />}
                size="sm"
              />
              <IconButton
                variant="ghost"
                colorScheme="whiteAlpha"
                aria-label="new task"
                icon={<AddIcon />}
                size="sm"
              />
              <Avatar
                name="Dan Abrahmov"
                src="https://bit.ly/dan-abramov"
                size="sm"
                className="ring-1 ring-white"
              />
            </Menu>
          </Center>
        </HStack>
      </Flex>
    </Box>
  );
};

export default NavBar;
