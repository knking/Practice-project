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

    console.log(task)

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
          task.map((item,value)=>(
            <Task  key={value} title={item.title} content={item.content}/>
          ))
        }
      </div>

    </>
  )
}

export default Home