// import "@fontsource/montserrat/400.css";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  ChakraProvider,
  List,
  ListIcon,
  ListItem,
  VStack,
} from "@chakra-ui/react";

import { MdSettings, MdCheckCircle } from "react-icons/md";

import NavBar from "./NavBar";
// import SideBar from "./SideBar";

import theme from "./theme";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>View Tasks</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider theme={theme}>
        <NavBar />
        <main className="flex min-h-screen flex-col items-center justify-center gap-8 ">
          <VStack
            border="1px solid"
            borderColor="gray.400"
            rounded="md"
            overflow="hidden"
            spacing={0}
          >
            <List spacing={3}>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="tomato" />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="tomato" />
                Assumenda, quia temporibus eveniet a libero incidunt suscipit
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="tomato" />
                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
              </ListItem>
              <ListItem>
                <ListIcon as={MdSettings} color="tomato" />
                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
              </ListItem>
            </List>
          </VStack>
        </main>
      </ChakraProvider>
    </>
  );
};

export default Home;
