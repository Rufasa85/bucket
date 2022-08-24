import React, {useState} from 'react'
import "./style.css"

export default function Todo(props) {
  const [isEditing, setIsEditing] = useState(false)   
  const [text, setText] = useState(props.task)
  const [priority, setPriority] = useState(props.priority)
  const submitHandler = e=>{
      e.preventDefault();
      props.editTodo(props.id,{
          text:text,
          priority:priority,
          id:props.id,
          complete:props.complete
      })
      setIsEditing(false)
      
  }
  const changeCompleteness = ()=>{
    props.editTodo(props.id,{
        text:props.task,
        priority:props.priority,
        id:props.id,
        complete:!props.complete
    })
  }
  return (
  <>
  {isEditing?(
    <form onSubmit={submitHandler}>
       <input name="todo" placeholder="todo....." value={text} onChange={e=>setText(e.target.value)}/>
        <select name="priority" value={priority} onChange={e=>setPriority(e.target.value)}>
            <option value="high">
                I really gotta do this!
            </option>
            <option value="med">
              I probably should do this
            </option>
            <option value="low">
              Eh, its not that important
            </option>
        </select>
        <button>Save!</button>
    </form>
  ):(

    <li className={`Todo ${props.priority} ${props.complete?"complete":""}`}>
    

        <span onClick={changeCompleteness}>{props.task}</span>
        <button onClick={()=>setIsEditing(true)}>Edit</button> 
        <button onClick={()=>props.deleteTodo(props.id)}>Delete</button>
      
        </li>
      )}
  </>
    
  )
}
