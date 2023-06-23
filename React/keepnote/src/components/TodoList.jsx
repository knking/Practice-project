import React,{useEffect, useState} from 'react'

import CreateTask from '../modals/CreateTask'
import Card from './Card'

const TodoList = () => {

    const [modal,setModal]= useState(false)
    const [tasklist,setTasklist]= useState([])

    useEffect(()=>{
        let arr =localStorage.getItem("tasklist")
        if(arr){
            let obj = JSON.parse(arr)
            setTasklist(obj)
        }
    },[])

    const toggle = ()=>{
        setModal(!modal)
    }

    const saveTask = (taskObj)=>{
let tempArr =tasklist;
tempArr.push(taskObj);
localStorage.setItem("tasklist",JSON.stringify(tempArr))
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
    tasklist.map((obj,index)=><Card taskObj={obj} index={index}/>)
}
            </div>
            <CreateTask toggle={toggle} modal={modal} save={saveTask}/>
        </>
    )
}

export default TodoList