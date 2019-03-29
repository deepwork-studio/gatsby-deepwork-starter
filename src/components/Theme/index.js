import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import theme from "./theme";

const GlobalStyle = createGlobalStyle``;

const Theme = props => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {props.children}
    </>
  </ThemeProvider>
);

export default Theme;
