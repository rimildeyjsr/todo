import React from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
 card: {
   width: '500px',
   padding: '16px',
   margin: '20px 0',
   display: 'flex',
   justifyContent: 'center',
 },
 fabIcon: {
   margin: '25px 0 25px 40px',
   width: '40px',
   height: '40px',
   color: '#ffffff',
 },
});

export default function AddItem(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <form onSubmit={props.handleNewItem}>
        <TextField
          name="newItem"
          label="Add new item"
          margin="normal"
        />
        <Fab
          color="primary"
          aria-label="Add"
          className={classes.fabIcon}
          type='submit'>
          <AddIcon/>
        </Fab>
      </form>
    </Card>
  );
}
