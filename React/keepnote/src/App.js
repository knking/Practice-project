
import 'bootstrap/dist/css/bootstrap.min.css'
import Task from './components/Task.jsx';
import './App.css'
import { useState } from 'react';

function App() {

  const [singleTask, setSingleTask] = useState("")
  const [addTask, setAddTask] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    setAddTask([...addTask,singleTask])
    setSingleTask(" ")
  }

  const handleDelete = (idx)=>{
const filteredArr = addTask.filter((val,i)=>{
  
return i!==idx;
})
setAddTask(filteredArr)
  }

  return (
    <div className='main'>
      <div className='notes'>
        <h1>Add Your Note </h1>
        <form onSubmit={handleSubmit}>
          <div className='form-div'>
            <input type='text' placeholder='Add Notes Here....' value={singleTask} onChange={(e) => (setSingleTask(e.target.value))}></input>
            <button type='submit'>Add</button>
          </div>
        </form>
        <h3>Your Notes</h3>
        {
          addTask.map((val,idx)=>(
          <Task key={idx} addTask={val} deleteTask={handleDelete} index={idx}/>
          ))
      
        }

      </div>

    </div>
  );
}

export default App;