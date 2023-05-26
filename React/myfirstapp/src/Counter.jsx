import React from 'react'
import { useState } from 'react'

const Counter = () => {

const [count,setCount] = useState(0)

const oneUp =()=>(setCount(count + 1));
const oneDown = ()=> setCount(count - 1);

  return (
    <>
    <h1>Counter</h1>

    <button onClick={oneUp}>Add + </button>
    <button>Count: {count}</button>
    <button onClick={oneDown}>Sub - </button>
    
    </>
  )
}

export default Counter