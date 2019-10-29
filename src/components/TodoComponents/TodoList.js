// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react'
import Todo from "./Todo";

export default class TodoList extends Component {
    // constructor(props) {      DO NOT DO THIS
    //     super(props);        DO NOT DO THIS   PASSING PROPS HERE IS A NO NO
    //     this.state = {
    //         allToDos: [...this.props.todo]         
    //     }
    // }
    constructor() {
        super();
        // this.state = {
        //     allToDos: []
        // };
    };
    // componentDidMount() {                DOES NOT WORK because this only runs once
    //     this.setState({                  componentWillUpdate would watch for changes and re-render
    //         allToDos: [...this.props.todo]
    //     });
    // };
    eventToggle = (e) => {
        this.props.toggleCompleted(e.target.id)
    }
    render() {
        return (
            <div>
                {this.props.todo.map((object) => {
                    // {this.state.allToDos.map((object) => {
                    return (
                        <div className="todo-card">
                            <Todo
                                key={object.id}
                                completed={object.completed}
                                task={object.task}
                                id={object.id}
                                toggleCompleted={this.props.toggleCompleted}
                            />
                        </div>
                    )
                })}
            </div>
        )
    };
};
