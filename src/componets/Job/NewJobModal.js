import React from "react";
import { IconButton ,makeStyles, Box, Grid, FilledInput, Select, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, Typography, Button } from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";

const useStyles = makeStyles(theme =>({
  skillChip:{ 
    margin: theme.spacing(0.5),
    padding: theme.spacing(0.75),
    fontsize: "14.5px",
    borderRadius: "5px",
    transition: ".3s",
    cursor: "pointer",
    fontWeight: 600,
    border:`1px solid ${theme.palette.secondary.main}`,
    color: theme.palette.secondary.main,
    cursor: "pointer",


    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: "#fff"
    }
  }
}))

export default (props) => {

  const classes = useStyles()

  const skills = [
    "Javascript",
    "React",
    "Node",
    "Vue",
    "Firebase",
    "MOngoDB",
    "SQL"
  ];

  return(
    <Dialog open={true} fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          Post Job
          <IconButton>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FilledInput placeholder="Jobs title *" disableUnderline fullWidth />          
          </Grid>
          <Grid item xs={6}>
            <Select fullWidth disableUnderline variant="filled" defaultValue="Full time">
              <MenuItem value="Full time">Full Time</MenuItem>
              <MenuItem value="Part time">Part Time</MenuItem>
              <MenuItem value="Contract">Contract</MenuItem>
            </Select>          
          </Grid>
          <Grid item xs={6}>
            <FilledInput placeholder="Company name " disableUnderline fullWidth />   
          </Grid>
          <Grid item xs={6}>
            <FilledInput placeholder="Company Url *" disableUnderline fullWidth />   
          </Grid>
          <Grid item xs={6}>
            <Select disableUnderline  variant="filled" defaultValue="Remote" fullWidth>
              <MenuItem value="Remote">Remote</MenuItem>
              <MenuItem value="in-Office">in-Office</MenuItem>
            </Select> 
          </Grid>
          <Grid item xs={6}>
            <FilledInput placeholder="Job link *" disableUnderline fullWidth />
          </Grid>
          <Grid item xs={12}>
            <FilledInput placeholder="Job description *" disableUnderline fullWidth  multiline rows={4}/>
          </Grid>
        </Grid>
        <Box mt={2}>
          <Typography>Skills</Typography>
          <Box display="flex" >
            {skills.map((skill) =>(
              <Box className={classes.skillChip} key={skill}>{skill}</Box> 
            ))}
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Box color="red" width="100%" display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="caption">*Required fields</Typography>
          <Button variant="contained" disableElevation color="primary"> Post Jobs</Button>
        </Box>
      </DialogActions>
    </Dialog>
  )
}