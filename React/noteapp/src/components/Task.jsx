import React from 'react'
import '../style/Task.css'

const Task = ({title,content,deleteTask,index}) => {
  return (
   <>
  <div className="task">
    <div className="notes">
    <p>{title}</p>
    <span>{content}</span>
    </div>
    <button onClick={()=>deleteTask(index)}>-</button>
  </div>
   </>
  )
}

export default Task