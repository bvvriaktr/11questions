import { sampleSize, map } from "lodash/fp";
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const random10 = sampleSize(10);
const itemWidth = 400;

const styles = theme => ({
  countryItem: {
    width: itemWidth
  },
  flag: {
    marginRight: 16,
    verticalAlign: "middle"
  },
  personItem: {
    paddingLeft: 30,
    width: itemWidth
  },
  root: {
    backgroundColor: theme.palette.background.paper,
    overflowY: "scroll",
    width: "100%"
  }
});

const QuoteList = props => {
  const { classes, quoteList = [] } = props;
  const tenQuotes = random10(quoteList);
  return (
    <List className={classes.root}>
      {tenQuotes.map((quote, index) => (
        <ListItem className={classes.personItem} key={index}>
          <ListItemText>{quote.Question}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

export default withStyles(styles)(QuoteList);
