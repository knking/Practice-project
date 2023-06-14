import React, { useState } from 'react'
import '../style/Home.css'
import Task from './Task'

const Home = () => {

  const [titleData, setTitleData] = useState('')
  const [textData, setTextData] = useState('')
 const [task,setTask] = useState([])

  const sendTask = (event) => {
    event.preventDefault()

    setTask([...task,{
      title:titleData,
      content:textData,
    }])

    setTitleData("");
    setTextData("");

  }

  const deleteItem= (index)=>{
const filteredArray = task.filter((val, idx)=>{
return idx !== index;
})
console.log(filteredArray)
setTask(filteredArray)
  }
  return (
    <>
      <div className="container">
        <form onSubmit={sendTask} className='form'>
          <input type="text" name="title" id="" placeholder='Title Here' value={titleData} onChange={(event) => setTitleData(event.target.value)} />
          <textarea name="textarea" id="" placeholder='Enter your Notes Here' value={textData} onChange={(event)=>setTextData(event.target.value)}>
          </textarea>
          <button type="submit">ADD</button>
        </form>
        {
          task.map((item,index)=>(
            <Task  key={index} title={item.title} content={item.content} deleteTask={deleteItem}
            index={index}/>
          ))
        }
      </div>

    </>
  )
}

export default Home