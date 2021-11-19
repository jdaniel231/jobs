import React from "react";
import { Box, Button, Select, MenuItem, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  wrapper: {
    backgroundColor: '#fff',
    display: 'flex',
    boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)",
    radius: "5px",
    "& > *":{
      flex: 1,
      height: "45px",
      margin: "8px"
    },
  },
})

export default (props) => {

  const classes = useStyles()

  return (
    <Box px={2} mt={-5} mb={2} className={classes.wrapper}>
      <Select disableUnderline variant="filled" defaultValue="Full time">
        <MenuItem value="Full time">Full Time</MenuItem>
        <MenuItem value="Part time">Part Time</MenuItem>
        <MenuItem value="Contract">Contract</MenuItem>
      </Select>
      <Select disableUnderline variant="filled" defaultValue="Remote">
        <MenuItem value="Remote">Remote</MenuItem>
        <MenuItem value="in-Office">in-Office</MenuItem>
      </Select>
      <Button variant="contained" color="primary" disableElevation> 
          Search 
      </Button>
    </Box>
  )
}