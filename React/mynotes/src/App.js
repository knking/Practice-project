
import { useState } from 'react'
import './App.css';

function App() {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault()
    if (todo !== '') {
      setTodos([{
        id: `${todo}-${Date.now()}`, todo
      }, ...todos])
    }
    setTodo("")
  }

  return (
    <div className="App">
      <div className='container'>
        <h1>Todo List App</h1>
        <form className='todoForm' onSubmit={handleSubmit} >
          <input type='text' placeholder='Enter Todo here...' value={todo} onChange={(e) => setTodo(e.target.value)} />
          <button type='submit'>Add</button>
        </form>
        <ul className="altTodos">
          {
            todos.map((t) => (
              <li className='singleTodo'>
                <span className='todoText'>{t.todo}</span>
                <button>Edit</button>
                <button>Delete</button>
              </li>
            ))
          }

        </ul>
      </div>
    </div>
  );
}

export default App;
