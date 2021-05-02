import React from 'react'

export default function TodoItem({todo, onDelete}){
    return (
        <div className="mb-4">
            <h5>{todo.title}</h5>
            <p>{todo.desc}</p>
            <button className="btn btn-danger btn-sm" onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
    )
}
