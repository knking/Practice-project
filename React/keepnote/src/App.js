
import 'bootstrap/dist/css/bootstrap.min.css'
import Task from './components/Task.jsx';
import './App.css'
import { useState } from 'react';

function App() {

  const [singleTask,setSingleTask]= useState("")


  return (
    <div className='main'>
      <div className='notes'>
      <h1>Add Your Note </h1>
    <form>
      <div className='form-div'>
      <input type='text' placeholder='Add Notes Here....' value={singleTask} onChange={(e)=>(setSingleTask(e.target.value))}></input>
      <button type='submit'>Add</button>
      </div>
    </form>
    <h3>Your Notes</h3>
      <Task addTask={singleTask}/>
    
      </div>
      
    </div>
  );
}

export default App;