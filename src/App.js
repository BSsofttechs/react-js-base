import React from 'react';
import { makeStyles } from "@mui/styles";
 
const useStyles = makeStyles({
  root: {
   width: "100%",
  },
})

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
     <h1>Welcome</h1>
     
    </div> );
}

export default App;
