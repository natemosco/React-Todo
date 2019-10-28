import React, { Component } from 'react'

export default class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            newToDo: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            newToDo: e.target.value
        });
    };
    handleSubmit = () => {
        e.preventDefault();
        this.props.addTodo(this.state.newToDo);
        this.setState({ newToDo: "" })
    }
    render() {

        return (
            <form onSubmit={handleSubmit}>
                <label htmlFor="input"></label>
                <input type="text" name="input" id="input" value={this.state.newToDo} onChage={handleChange} />
                <button>Add</button>
            </form>
        )
    }
}
