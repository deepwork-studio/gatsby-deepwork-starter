import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "./theme";

const Theme = props => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);

export default Theme;
