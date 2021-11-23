import React from "react";
import { Box, Grid, ThemeProvider } from "@material-ui/core";
import Header from "./componets/Header";
import theme from './theme/theme';
import SearchBar from "./componets/SearchBar";
import JobCards from "./componets/Job/JobCards";
import NewJobModal from "./componets/Job/NewJobModal";
import jobData from "./dummyData";

export default () => {
  return (
  <ThemeProvider theme={theme}>
    <Header />
    <NewJobModal />
    <Grid container justify="center">
      <Grid xs={10}>
        <SearchBar />
        
        {jobData.map(job => <JobCards key={job.id} {...job} />)}
      </Grid>
    </Grid>
  </ThemeProvider>
  );
};
