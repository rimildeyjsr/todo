import React from 'react';
import ToDoItem from '../To-do-item/to-do-item';
import Card from '@material-ui/core/Card';
import withStyles from "@material-ui/core/styles/withStyles";
import axios from 'axios';
import AddItem from "../Add-item/add-item";

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
    this.state = {
      todoList: [],
      id: 201,
    }
  }

  componentDidMount() {
    console.log('initial get');
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        this.setState({
          todoList: res.data,
        })
      });
  }

  deleteItem = (e) => {
    const url = 'https://jsonplaceholder.typicode.com/todos/' + e;
    axios.delete(url).then((response) => {
      const arr = this.state.todoList.filter((item) => {
        return item.id !== e;
      });
      this.setState({
        todoList: arr,
      });
    });
  };

  addNewItem = (e) => {
    e.preventDefault();
    const url = 'https://jsonplaceholder.typicode.com/todos';
    const newData = e.target.newItem.value;
    const newToDo = {
      userId: 1,
      title: newData,
      completed: false,
      id: this.state.id,
    };
    e.target.newItem.value = '';
    axios.post(url, newToDo).then((response) => {
      this.setState((prevState) => ({
        todoList: [newToDo, ...prevState.todoList],
        id: prevState.id + 1,
      }));
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <AddItem handleNewItem={this.addNewItem}/>
        <Card className={classes.card}>
          {
            this.state.todoList.map((item) => (
              <ToDoItem
                text={item.title}
                key={item.id}
                id={item.id}
                completed={item.completed}
                handleDelete={this.deleteItem}
              />
            ))
          }
        </Card>
      </div>
    );
  }
}

export default withStyles(useStyles())(ToDoList);
