import React from 'react'

export default function Todo(props) {
    return (
        <div
            className={`item${props.item.completed ? "_completed" : ""}`}>

        </div>
    )
}

