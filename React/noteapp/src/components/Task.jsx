import React from 'react'
import '../style/Task.css'

const Task = ({title,content}) => {
  return (
   <>
  <div className="task">
    <div className="notes">
    <p>{title}</p>
    <span>{content}</span>
    </div>
    <button>-</button>
  </div>
   </>
  )
}

export default Task