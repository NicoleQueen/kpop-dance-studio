import Head from "next/head";
import styled from "@emotion/styled";
import GlobalStyles from "./GlobalStyles";
import React from 'react';

const Layout = ({ children, title }) => {
  return (
    <>
      <GlobalStyles />
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </>
  );
};
export default Layout;