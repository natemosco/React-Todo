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
        this.state = {
            allToDos: []
        }
    }
    componentDidMount() {
        this.setState({
            allToDos: [...this.props.todo]
        })
    }
    render() {
        return (
            <div>
                {this.state.allToDos.map((object) => {
                    return (
                        <div className="todo-card">
                            <Todo
                                key={object.id}
                                completed={object.completed}
                                task={object.task}
                            ></Todo>
                        </div>
                    )
                })}
            </div>
        )
    }
}
