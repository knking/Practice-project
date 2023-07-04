
import { useState } from 'react'
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const [editId, setEditId] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(editId){
      const editItem= todos.find((t)=>t.id ===editId)
      const updatedTodos = todos.map((obj)=>obj.id ===editItem.id
      ? {obj:obj.id,todo}:{id:obj.id, todo:obj.todo}
      )

      setTodos(updatedTodos)
      setEditId(0)
      setTodo("")
      return
    }
    if (todo !== '') {
      setTodos([{
        id: `${todo}-${Date.now()}`, todo
      }, ...todos])
    }
    setTodo("")
  }

  const handleDelete = (id) => {
    const deleteTodo = todos.filter((idx) => idx.id !== id)
    setTodos([...deleteTodo])
  }

const handleEdit = (id)=>{
const editTodo = todos.find((i)=> i.id ===id);
setTodo(editTodo.todo);
setEditId(id);
}

  return (
    <div className="App">
      <div className='container'>
        <h1>Todo List App</h1>
       <TodoForm handleSubmit={handleSubmit} todo={todo} setTodo={setTodo} editId = {editId}/>
        <TodoList handleDelete={handleDelete} handleEdit={handleEdit} todo={todo} todos={todos}/>
      </div>
    </div>
  );
}

export default App;
