import React from 'react'
import  '../Task.css'
const Task = ({addTask,deleteTask,index,editTask}) => {
  return (
    <>
    <li>
        <span className='span-tag'>{addTask}</span>
        <button className='btn-1' onClick={()=>deleteTask(index)}>Delete</button>
        <button className='btn-2' onClick={()=>editTask(index)}>Edit</button>
    </li>
    </>
  )
}

export default Task;