import  {useState} from 'react'
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
function App() {
  const [todos, setTodos] = useState([{
    id:1,
    text:"learn react",
    complete:false,
    priority:"high"
  },{
    id:2,
    text:"eat sushi",
    complete:false,
    priority:"med"
  },
  {
    id:3,
    text:"take a nap",
    complete:false,
    priority:"low"
  }
])
  const addTodo = todoObj=>{
    todoObj.id = todos.length? todos[todos.length-1].id+1:1
    setTodos([...todos,todoObj])
  }

  const deleteTodo =id=>{
    const newTodos = todos.filter(todo=>todo.id!==id)
    setTodos(newTodos)
  }

  const editTodo=(id,todoObj)=>{
    const newTodos = todos.map(todo=>{
      if(todo.id===id){
        return todoObj
      }
      return todo
    })
    setTodos(newTodos)
  }


  return (
    <div>
      <AddTodoForm addTodo={addTodo}/>
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo}/>
      
    </div>
  );
}

export default App;
