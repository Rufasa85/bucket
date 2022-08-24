import React, {useState} from 'react'

export default function AddTodoForm(props) {
    const [text, setText] = useState("")
    const [priority, setPriority] = useState("med")
    const submitHandler = e=>{
        e.preventDefault();
        props.addTodo({
            text:text,
            priority:priority,
            complete:false
        })
        setText("")
        setPriority("med")
    }
  return (
    <form className="AddTodoForm" onSubmit={submitHandler}>
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
        <button>Add Todo</button>
    </form>
  )
}
