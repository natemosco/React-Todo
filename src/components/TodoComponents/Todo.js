import React from 'react'
import color from "./Todo.css";

export default function Todo(props) {
    return (
        <div
            className={`item${props.completed ? "_completed" : ""}`}
            onClick={() => { props.toggleCompleted(props.id) }}>
            <h3>{props.task}</h3>

        </div>
    )
}

