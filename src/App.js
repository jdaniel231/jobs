import React from "react";
import { Box, Grid, ThemeProvider } from "@material-ui/core";
import Header from "./componets/Header";
import theme from './theme/theme';
import SearchBar from "./componets/SearchBar";
import JobCards from "./componets/Job/JobCards";

export default () => {
  return (
  <ThemeProvider theme={theme}>
    <Header />
    <Grid container justify="center">
      <Grid xs={10}>
        <SearchBar />

        <JobCards />
      </Grid>
    </Grid>
  </ThemeProvider>
  );
};
