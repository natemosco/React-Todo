import React from 'react'

export default function Todo(props) {
    return (
        <div
            className={`item${props.completed ? "_completed" : ""}`}>
            <h3>{props.task}</h3>

        </div>
    )
}

