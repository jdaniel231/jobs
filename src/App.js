import React, { useState, useEffect } from "react";
import { Box, Button, CircularProgress, Grid, ThemeProvider } from "@material-ui/core";
import Header from "./componets/Header";
import theme from './theme/theme';
import SearchBar from "./componets/SearchBar";
import JobCards from "./componets/Job/JobCards";
import NewJobModal from "./componets/Job/NewJobModal";
import { firestore, app } from "./firebase/config";
import { Close as CloseIcon } from "@material-ui/icons";

export default () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [customSearch, setCustomSearch] = useState(false);
  const [newJobMobal, setNewJobMobal] = useState(false);

  const fetchJobs =  async () => {
    setCustomSearch(false)
    setLoading(true);
    const req = await firestore.collection('jobs').orderBy('postedOn', 'desc').get();
    const tempJobs = req.docs.map((job) => ({ ...job.data(), id: job.id, postedOn: job.data().postedOn.toDate() }));
    
    setJobs(tempJobs);
    setLoading(false);
  }

  const fetchJobsCustom = async jobSearch => {

    setLoading(true);
    setCustomSearch(true);
    const req = await firestore
      .collection('jobs')
      .orderBy('postedOn', 'desc')
      .where("location",'==', jobSearch.location)
      .where("type",'==', jobSearch.type)
      .get();
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
    <Box mb={3}>
      <Grid container justify="center">
        <Grid xs={10}>
          <SearchBar fetchJobsCustom={fetchJobsCustom} />

          {
            loading ? (
            <Box display="flex" justifyContent="center" py={4} >
              <CircularProgress /> 
            </Box>
            ) : (
              <>
              {customSearch && 
                ( <Box my={2} display="flex" justifyContent="flex-end">
                    <Button onClick={fetchJobs}>
                      <CloseIcon size={20}/>
                      
                    </Button>
                  </Box>
                )}
                {jobs.map(job => ( 
                  <JobCards key={job.id} {...job} />
                ))}
              </>
            )}
          
          
        </Grid>
      </Grid>
    </Box>
  </ThemeProvider>
  );
};
