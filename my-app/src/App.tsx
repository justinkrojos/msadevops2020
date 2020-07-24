import React, { useState } from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import Logo from "./icons/MSALogo.png";
import Button from "@material-ui/core/Button";

import SearchBar from "./components/SearchBar";
import MediaGrid from "./components/MediaGrid";

// @ts-ignore
import IUserInput from "./common/Interfaces.ts";


const useStyles = makeStyles(() => ({
  background: {
    height: "100vh",
    margin: "auto",
    padding: "60px",
  },

  logo: {
    height: "250px",
    width: "250px",
    color: "#FF4500",
    marginBottom: "-40px",
  },

  button: {
    margin: "30px",
    color: "#FF4500",
    borderRadius: "7px",
    borderColor: "#FF4500",
    borderWidth: "3px",
    fontWeight: "bold",
    fontSize: "25px",
    padding: "15px 35px 15px 35px",
    "&:hover": {
      borderWidth: "3px",
      borderColor: "#FF4500",
      background: "#FF4500",
      color: "white",
    },
  },

  centredContainer: {
    textAlign: "center",
    margin: "5px",
  },

  title: {
    fontSize: "100px",
    textTransform: "uppercase",
    color: "#FF4500",
    fontWeight: "bold",
  },

  subheading: {
    fontSize: "35px",
    fontWeight: "bold",
  },

  subsubheading: {
    fontSize: "25px",
    color: "#818181",
  },

  search: {
    background: "#FF4500",
    width: "50vw",
    height: "100vh",
    position: "fixed",
    transition: "right 0.5s",
    padding: '100px 200px 100px 200px',
    right: '0',
  }

}));

function App() {
  const classes = useStyles();

  const [showSearch, setShowSearch] = React.useState(false);

    
  const [UserInput, setUserInput] = useState<IUserInput>({
    SearchQuery: "",
  });
  function SetUserInput(a: IUserInput) {
    setUserInput(a);
  }

  return (
    <div className={"home-page"}>
      <Container className={classes.background}>
        <Grid container>
          <Grid item xs={12} className={classes.centredContainer}>
            <img src={Logo} className={classes.logo} alt="Logo" />
          </Grid>
          <Grid item xs={12} className={classes.centredContainer}>
            <Typography className={classes.title}>Numbers!</Typography>
          </Grid>
          <Grid item xs={12} className={classes.centredContainer}>
            <Typography className={classes.subheading}>
              The site for useless facts about numbers
            </Typography>
          </Grid>

          <Grid item xs={12} className={classes.centredContainer}>
            <Typography className={classes.subsubheading}>
              <i>But how useless can a fact be?</i>
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.centredContainer}>

             {showSearch ? <SearchBar SetUserInput={(a: IUserInput) => SetUserInput(a)} /> : <Button
                variant={"outlined"}
                className={classes.button}
                color={"primary"}
                onClick={() => setShowSearch(!showSearch)}
                >
                Try it now
             </Button>}
             <MediaGrid SearchQuery={UserInput.SearchQuery} />
          </Grid>
        </Grid>
      </Container>

      
    </div>
  );
}

export default App;
