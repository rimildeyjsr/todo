import React from 'react';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import DoneIcon from '@material-ui/icons/Done';
import { makeStyles } from '@material-ui/core/styles';
import './edit-form.css';

const useStyles = makeStyles({
  fabIcon: {
    margin: '25px 0 25px 40px',
    width: '40px',
    height: '40px',
    color: '#ffffff',
    backgroundColor: 'green'
  },
});

export default function EditForm(props) {
  const classes = useStyles();

  return (
    <div className="edit-form-container">
      <form onSubmit={props.handleEditDone}>
        <TextField
          name="updatedItem"
          label="Update item"
          defaultValue={props.initialText}
          margin="normal"
        />

        <Fab
          aria-label="Add"
          className={classes.fabIcon}
          type='submit'
        >
          <DoneIcon/>
        </Fab>

      </form>
    </div>
  )

}

