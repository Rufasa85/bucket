import React from 'react'
import Todo from '../Todo'
import "./style.css"

export default function TodoList(props) {
  return (
    <div className="TodoList">
    <h3>Todo list: {props.todos.length} item(s) remaining!</h3>
        <ul>
            {props.todos.map((todo,i)=><Todo key={todo.id} task={todo.text} priority={todo.priority} deleteTodo={props.deleteTodo} editTodo = {props.editTodo} id={todo.id} complete={todo.complete}/>)}
        </ul>
    </div>
  )
}
