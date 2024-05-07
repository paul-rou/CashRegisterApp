import React from "react";
import "../globals.css";
import { AppProps } from "next/app";
import Layout from "@/components/Layout/Layout";
import { trpc } from "../utils/trpc";
import { ChakraProvider } from "@chakra-ui/react";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default trpc.withTRPC(App);
