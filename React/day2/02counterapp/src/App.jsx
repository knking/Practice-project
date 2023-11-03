import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count,setCount]=useState(1)
  
  // const addvalue = ()=>{
  //   if(count>=20) return
  //   else{
  //     setCount(count+1)
  //   }
  // }

  // function decrementValue(){
  //   if(count<=0) count=""
  //   else{
  //     count=count-1
  //   }
  // }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter value : {count}</h2>
      <button onClick={()=>count>=10?"" : setCount(count+1)}>Increament</button>
      <button onClick={()=>count <=0?"": setCount(count -1)}>Decrement</button>
    </>
  )
}

export default App
