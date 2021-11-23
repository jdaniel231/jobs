import React from "react";
import { Box, Grid, Typography, Button, makeStyles } from "@material-ui/core";
import { differenceInMinutes } from "date-fns";


const useStyles = makeStyles((theme) =>({
  wrapper: {
    border: '1px solid #e8e8e8',

    "&:hover": {
      boxShadow: '0px 5px 25px rgba(0, 0, 0, 0.1)', 
      borderLeft: '6px solid #4d64e4'
    }
  },
  companyName:{ 
    fontsize: "13.5px",
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(0.75),
    borderRadius: "5px",
    display: "inline-block",
    fontWeight: 600,
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
  }
}))

export default (props) => {
  const classes = useStyles()
  return(
    <Box p={2} className={classes.wrapper}>
      <Grid container alignItems="center">
        <Grid item xs>
          <Typography  variant="subtitle1">{props.title}</Typography>
          <Typography className={classes.companyName} variant="subtitle1">{props.companyName}</Typography>
        </Grid>
        <Grid  container item xs>
          {props.skills.map(skill => <Grid className={classes.skillChip} item key={skill}>{skill}</Grid>)}
        </Grid>
        <Grid item container xs direction="column" alignItems="flex-end">
          <Grid item>
            <Typography variant="caption">
              {differenceInMinutes(Date.now(), props.postedOn)} minutos | {props.type} | {props.location}
            </Typography>
          </Grid>
          <Grid item>
            <Box mt={2}>
              <Button variant="outlined">Check</Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}