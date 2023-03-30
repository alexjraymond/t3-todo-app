import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from "./NavBar";
import SideBar from "./SideBar"

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "gm" });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col">
      <ChakraProvider>
    <NavBar />
    {/* <SideBar /> */}
    </ChakraProvider>
      </main>

    </>
  );
};

export default Home;
