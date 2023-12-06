import React from "react";
import "../globals.css";
import { AppProps } from "next/app";
import Layout from "@/components/Layout/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}
