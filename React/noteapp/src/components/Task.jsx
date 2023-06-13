import React from 'react'
import '../style/Task.css'

const Task = () => {
  return (
   <>
  <div className="task">
    <div className="notes">
    <p>Title</p>
    <span>Here is your nots</span>
    </div>
    <button>-</button>
  </div>
   </>
  )
}

export default Task