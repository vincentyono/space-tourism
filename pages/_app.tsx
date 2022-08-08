import Head from "next/head";
import type { AppProps } from "next/app";
import React from "react";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <html lang="en">
      <Head>
        <title>Frontend Mentor | Space tourism website</title>
        <meta
          name="description"
          content="Space tourism website is one of Frontend Mentor Challenge"
        />
        <link rel="icon" href="/static/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </html>
  );
}

export default MyApp;
