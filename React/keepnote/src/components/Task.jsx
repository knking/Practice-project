import React from 'react'
import  '../Task.css'
const Task = ({addTask}) => {
  return (
    <>
    <li>
        <span className='span-tag'>{addTask}</span>
        <button className='btn-1'>Delete</button>
        <button className='btn-2'>Edit</button>
    </li>
    </>
  )
}

export default Task;