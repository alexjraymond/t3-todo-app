import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Center,
  HStack,
  Button,
  IconButton,
  Avatar,
} from "@chakra-ui/react";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const NavBar = () => {
  return (
    <Box as="nav" bg="tomato" className="fixed w-full" px={4}>
      <Flex minH="40px" justifyContent="space-between">
        <Center color="white" fontWeight="bold">
          <FontAwesomeIcon icon={faSeedling} />
        </Center>
        <HStack>
          <Center justifyContent="space-between" minW={"250px"}>
            <IconButton
              variant="outline"
              colorScheme="whiteAlpha"
              aria-label="Send email"
              icon={<AddIcon />}
              size="sm"
            />
            <Avatar
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
              size="sm"
              className="ring-1 ring-white"
            />
          </Center>
        </HStack>
      </Flex>
    </Box>
  );
};

export default NavBar;
