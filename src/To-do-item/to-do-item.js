import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import './to-do-item.css';
import withStyles from "@material-ui/core/styles/withStyles";
import EditForm from '../Edit-form/edit-form';

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
      completedItem: false,
    };
  }

  checkBoxChange = (e) => {
    console.log(e.target.checked);
    this.setState({
      completedItem: e.target.checked
    })
  };

  editItem = (e) => {
    console.log('edit item');
    this.setState({
      isEditing: true,
    });
  };

  editDone = (e) => {
    e.preventDefault();
    console.log('edit done');
    this.setState({
      isEditing: false,
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
            onChange={this.checkBoxChange}
          />

          <p
            className="to-do-item-text"
            style={{ textDecoration : this.state.completedItem ? 'line-through' : null }}>
            {this.props.text}
          </p>

          <div className="edit-button-container" onClick={this.editItem}>
            <EditIcon/>
          </div>

          <div className="delete-button-container" onClick={this.props.handleDelete}>
            <DeleteIcon/>
          </div>
        </div>

        {
          this.state.isEditing ?
            <EditForm
              handleEditDone={this.editDone}
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
