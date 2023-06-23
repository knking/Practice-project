import React,{useState} from 'react'

import CreateTask from '../modals/CreateTask'

const TodoList = () => {

    const [modal,setModal]= useState(false)
    const [tasklist,setTasklist]= useState([])

    const toggle = ()=>{
        setModal(!modal)
    }

    const saveTask = (taskObj)=>{
let tempArr =tasklist;
tempArr.push(taskObj);
setTasklist(tempArr)
setModal(false)
    }

    return (
        <>

            <div className='header text-center'> 
                <h3>Todo List</h3>
                <button className='btn btn-primary mt-2' onClick={()=>setModal(true)}>Create task</button>
            </div>
            <div className="task-container">
{
    tasklist.map((obj)=><li>{obj.Name}</li>)
}
            </div>
            <CreateTask toggle={toggle} modal={modal} save={saveTask}/>
        </>
    )
}

export default TodoList