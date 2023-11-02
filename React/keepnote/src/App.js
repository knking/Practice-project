
import 'bootstrap/dist/css/bootstrap.min.css'
import Task from './components/Task.jsx';
import './App.css'
import { useState } from 'react';

function App() {

  const [singleTask, setSingleTask] = useState("")
  const [addTask, setAddTask] = useState([])
  const [editId, setEditId] = useState(0);

  // Handle Add function 
  const handleSubmit = (e) => {
    e.preventDefault()
    if(editId){
      // const editTodo = addTask[editId]
      const updateTodos = addTask.map((val,id)=>
      id===editId?(id=editId, val=singleTask):(id=id,val=val)
      )
      console.log(updateTodos, editId)
      setAddTask(updateTodos)
      localStorage.setItem("tasks",JSON.stringify(addTask))
      
      setEditId(0)
      setSingleTask(" ")

      return
    }
    setAddTask([...addTask, singleTask])
    setSingleTask(" ")
  }

  //Handle delete function 
  const handleDelete = (idx) => {
    const filteredArr = addTask.filter((val, i) => {
      return i !== idx;
    })
    setAddTask(filteredArr)
  }

  //handle Edit funcation 
const handleEdit= (idx)=>{
  setSingleTask(addTask[idx])
  console.log(idx)
  setEditId(idx)

}

  return (
    <div className='main'>
      <div className='notes'>
        <h1>Add Your Note </h1>
        <form onSubmit={handleSubmit}>
          <div className='form-div'>
            <input type='text' placeholder='Add Notes Here....' value={singleTask} onChange={(e) => (setSingleTask(e.target.value))}></input>
            <button type='submit'>{editId?"Update":"Add"}</button>
          </div>
        </form>
        <h3>Your Notes</h3>
        {
          addTask.map((val, idx) => (
            <Task key={idx} addTask={val} deleteTask={handleDelete} editTask ={handleEdit} index={idx}  />
          ))

        }

      </div>

    </div>
  );
}

export default App;