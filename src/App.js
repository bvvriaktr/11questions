import React, { useState, useEffect } from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import QuoteList from "./QuoteList";
import { fetchData } from "./importData";
import { withStyles } from "@material-ui/core/styles";

const style = {
  listContainer: {
    overflowY: "scroll",
  },
  root: {
    height: "100vh",
    width: "100vw"
  }
};
const App = ({ classes }) => {
  const [quoteList, setQuoteList] = useState([]);

  useEffect(() => {
    setInterval(() => fetchData().then(setQuoteList), 1000 * 60 * 60 * 6);
    fetchData().then(setQuoteList);
  }, []);

  return (
    <Grid className={classes.root} container wrap="nowrap">
      <Grid className={classes.listContainer} item>
        <QuoteList quoteList={quoteList} />
      </Grid>
    </Grid>
  );
};

export default withStyles(style)(App);
