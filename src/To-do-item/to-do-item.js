import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import './to-do-item.css';
import withStyles from "@material-ui/core/styles/withStyles";
import EditForm from '../Edit-form/edit-form';
import axios from 'axios';

const useStyles = theme => ({
  checkBox: {
    flex: 3,
  }
});

class ToDoItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      completedItem: this.props.completed,
      text: this.props.text,
      id: this.props.id,
    };
  }

  checkBoxChange = (e) => {
    const url = 'https://jsonplaceholder.typicode.com/todos/' + this.state.id;
    let newVal = e.target.checked;
    axios.put(url, { completed: e.target.checked }).then( (response) => {
      this.setState({
        completedItem: newVal,
      });
    });
  };

  editItem = (e) => {
    this.setState((prevState) => ({
      isEditing: !prevState.isEditing,
    }));
  };

  editDone = (e) => {
    e.preventDefault();
    const newData = e.target.updatedItem.value;
    const url = 'https://jsonplaceholder.typicode.com/todos/' + this.state.id;
    axios.put(url, { title: newData }).then( (response) => {
      this.setState({
        isEditing: false,
        text: newData,
      });
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="to-do-item-container">
        <div className="to-do-item">
          <Checkbox
            className={classes.checkBox}
            color="primary"
            checked={this.state.completedItem}
            onChange={this.checkBoxChange}
          />

          <p
            className="to-do-item-text"
            style={{ textDecoration : this.state.completedItem ? 'line-through' : null }}>
            {this.state.text}
          </p>

          <div className="edit-button-container" onClick={this.editItem}>
            <EditIcon/>
          </div>

          <div className="delete-button-container" onClick={() => this.props.handleDelete(this.state.id)}>
            <DeleteIcon/>
          </div>
        </div>

        {
          this.state.isEditing ?
            <EditForm
              handleEditDone={this.editDone}
              initialText={this.state.text}
            />
            :
            null
        }

        <Divider/>
      </div>
    );
  }
}

export default withStyles(useStyles())(ToDoItem);
