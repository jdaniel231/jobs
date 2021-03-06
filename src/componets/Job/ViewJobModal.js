import React from 'react'
import { IconButton ,makeStyles, Box, Grid, FilledInput, Select, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, Typography, Button, CircularProgress } from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";
import { format } from 'date-fns';

const useStyles = makeStyles((theme) => ({
  info: { 
    '& > *':{
      margin: '5px'
    }
  },

  skillChip:{ 
    margin: theme.spacing(0.5),
    padding: theme.spacing(0.75),
    fontsize: "14.5px",
    borderRadius: "5px",
    transition: ".3s",
    cursor: "pointer",
    fontWeight: 600,
    backgroundColor: theme.palette.secondary.main,
    color: "#fff"
  }, 
}));


export default (props) => {

  const classes = useStyles()

  return (
    <Dialog open={!!Object.keys(props.job).length} fullWidth >
      <DialogTitle>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        {props.job.title} @{props.job.companyName}
        <IconButton>
          <CloseIcon onClick={props.closeModal} />
        </IconButton>
      </Box>
    </DialogTitle>
    <DialogContent>
      <Box>
        <Box className={classes.info} display="flex">
          <Typography variant="caption" >Posted on: </Typography>
          <Typography variant="body2" >
            {props.job.postedOn && format(props.job.postedOn, "dd/MMM/yyyy HH:MM")}
          </Typography>
        </Box>

        <Box className={classes.info} display="flex">
          <Typography variant="caption" >Job type: </Typography>
          <Typography variant="body2">{props.job.type}</Typography>
        </Box>

        <Box className={classes.info} display="flex">
          <Typography variant="caption" >Job location: </Typography>
          <Typography variant="body2">{props.job.location}</Typography>
        </Box>

        <Box className={classes.info} display="flex">
          <Typography variant="caption" >Company name: </Typography>
          <Typography variant="body2">{props.job.companyName}</Typography>
        </Box>

        <Box className={classes.info} display="flex">
          <Typography variant="caption" >Company website: </Typography>
          <Typography variant="body2">{props.job.companyUrl}</Typography>
        </Box>

        <Box ml={0.5}>
          <Typography variant="caption" >Skills: </Typography>
          <Grid container alignItems="center">
            {props.job.skills && 
              props.job.skills.map((skill) => (
                <Grid item key={skill} className={classes.skillChip}>
                  {skill}
                </Grid>
              ))}
          </Grid>
        </Box>


      </Box>
    </DialogContent>
    <DialogActions>
      <Button variant='outlined' component="a" href={props.job.link} target="_blank" >Apply</Button>
    </DialogActions>
    </Dialog>
  )
}
