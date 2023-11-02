import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let count =1;
  const addvalue = ()=>{
    console.log("Clicked",count)
    count=count+1
  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter value : {count}</h2>
      <button onClick={addvalue}>Increament</button>
      <button onClick={()=>console.log("Hi")}>Decrement</button>
    </>
  )
}

export default App
