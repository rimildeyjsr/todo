import React from 'react';
import ToDoItem from '../To-do-item/to-do-item';
import Card from '@material-ui/core/Card';
import withStyles from "@material-ui/core/styles/withStyles";

const useStyles = theme => ({
  card: {
    width: '500px',
    padding: '0px 16px',
    margin: '20px 0',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
  }

  deleteItem = (e) => {
    console.log('delete');
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <ToDoItem
          text="hello"
          handleDelete={this.deleteItem}
        />
        <ToDoItem
          text="hello rimil"
          handleDelete={this.deleteItem}
        />
      </Card>
    );
  }
}

export default withStyles(useStyles())(ToDoList);
