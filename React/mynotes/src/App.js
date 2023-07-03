
import { useState } from 'react'
import './App.css';

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
        <form className='todoForm' onSubmit={handleSubmit} >
          <input type='text' placeholder='Enter Todo here...' value={todo} onChange={(e) => setTodo(e.target.value)} />
          <button type='submit'>{editId ? "Update" : "Add"}</button>
        </form>
        <ul className="altTodos">
          {
            todos.map((t) => (
              <li className='singleTodo'>
                <span className='todoText' key={t.id}>{t.todo}</span>
                <button onClick={() => handleEdit(t.id)}>Edit</button>
                <button onClick={() => handleDelete(t.id)}>Delete</button>
              </li>
            ))
          }

        </ul>
      </div>
    </div>
  );
}

export default App;
