import React from "react";
import { Box, ThemeProvider } from "@material-ui/core";
import Header from "./componets/Header";
import theme from './theme/theme';

export default () => {
  return <ThemeProvider theme={theme}>
    <Header />
  </ThemeProvider>
};
