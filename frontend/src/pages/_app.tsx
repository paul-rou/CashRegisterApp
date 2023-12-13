import React from "react";
import "../globals.css";
import { AppProps } from "next/app";
import Layout from "@/components/Layout/Layout";
import { trpc } from "../utils/trpc";

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}

export default trpc.withTRPC(App);
