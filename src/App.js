import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  };

  addTodo = (newTask) => {
    alert("hey hey")
    const newTodo = {
      task: newTask,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todo: [...this.state.todo, newTodo]
    });
  };

  toggleCompleted = (targetId) => {
    this.setState({
      todo: this.state.todo.map((todo) => {
        if (todo.id === targetId) {
          return {
            ...todo, completed: !todo.completed
          };
        } else {
          return todo
        };
      })
    });
  };
  filter = () => {

  }

  render() {
    return (
      <div>
        <TodoForm addTodo={this.addTodo} />
        <TodoList todo={this.state.todo} toggleCompleted={this.toggleCompleted} />
      </div>
    );
  }
}

export default App;
