import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import "./App.css";
import Home from "./components/Home";
import ListForm from "./components/ListForm";
import { useEffect, useState } from "react";
import ListIcon from "@material-ui/icons/List";
import HomeIcon from "@material-ui/icons/Home";
import { useDispatch } from "react-redux";
import { getForm, createForm } from "./actions/form";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppBar, Container, Grid, Grow, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));
function App() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(1);

  useEffect(() => {
    dispatch(getForm());
  }, [dispatch]);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Router>
      <div className="App">
        {/* <List> */}
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography variant="h2" align="center">
            So let's create your own FORM
          </Typography>
        </AppBar>
        <Grow in>
          <Container>
            <Grid>
              <Grid
                container
                className={classes.mainContainer}
                justify="space-between"
                alignItems="stretch"
                spacing={3}
              >
                <Grid item xs={12} sm={10}>
                  <Home />
                </Grid>
                <Grid item xl={12} sm={10}>
                  <ListForm />
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </div>
    </Router>
  );
}

export default App;
