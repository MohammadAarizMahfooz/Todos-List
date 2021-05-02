import React from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {
    let myStyle = {
        minHeight:"50vh"
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className="text-center my-3">Todos List</h3>
            {/* this below piece of code means that if props.todos.length == 0 then show this paragraph else show that props.todos.map */}
            {props.todos.length===0?<p className="text-center"><strong>No todos to display. Add now</strong></p>:
            props.todos.map((todo)=>{
                return( <><TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr/> </>)
            })
            }
            
        </div>
    )
}