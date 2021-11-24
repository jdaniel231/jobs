import React, { useState, useEffect } from "react";
import { Box, CircularProgress, Grid, ThemeProvider } from "@material-ui/core";
import Header from "./componets/Header";
import theme from './theme/theme';
import SearchBar from "./componets/SearchBar";
import JobCards from "./componets/Job/JobCards";
import NewJobModal from "./componets/Job/NewJobModal";
import { firestore, app } from "./firebase/config";

export default () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newJobMobal, setNewJobMobal] = useState(false);

  const fetchJobs =  async () => {
    const req = await firestore.collection('jobs').orderBy('postedOn', 'desc').get();
    const tempJobs = req.docs.map((job) => ({ ...job.data(), id: job.id, postedOn: job.data().postedOn.toDate() }));
    
    setJobs(tempJobs);
    setLoading(false);
  }

  const postJob = async jobDetails => {
    await firestore.collection('jobs').add({
      ...jobDetails,
      postedOn: app.firestore.FieldValue.serverTimestamp()
    })
    fetchJobs(); 
  }

  useEffect(() =>{
    fetchJobs();
  }, [])

  return (
  <ThemeProvider theme={theme}>
    <Header openNewJobModal={() => setNewJobMobal(true)} />
    <NewJobModal 
      closeModal={
        () => setNewJobMobal(false)
      } 
      newJobMobal={newJobMobal}  
      postJob={postJob} 
    />
    <Grid container justify="center">
      <Grid xs={10}>
        <SearchBar />

        {
          loading ? <Box display="flex" justifyContent="center" py={4} ><CircularProgress /> </Box>
          : jobs.map(job => <JobCards key={job.id} {...job} />)
        }
        
        
      </Grid>
    </Grid>
  </ThemeProvider>
  );
};
