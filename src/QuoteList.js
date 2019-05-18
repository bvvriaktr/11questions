import { sampleSize } from "lodash/fp";
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const random8 = sampleSize(8);
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

const staticQuestions = [
  {Question: 'Where do you live?'}, 
  {Question: 'Why did you join Riaktr?'}
]

const QuoteList = props => {
  const { classes, quoteList = [] } = props;
  const filteredQuotes = [...staticQuestions, ...random8(quoteList)];
  return (
    <List className={classes.root}>
      {filteredQuotes.map((quote, index) => (
        <ListItem className={classes.personItem} key={index}>
          <ListItemText>{quote.Question}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

export default withStyles(styles)(QuoteList);
