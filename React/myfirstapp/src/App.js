import logo from './logo.svg';
import './App.css';
import { useState } from 'react'


function SuperHeros() {
  let [hreo, setHero] = useState(["Superman", "Batman", "Ironman"])

  const [name,setName] = useState(()=>"Spiderman")
  const onAddName = ()=>{
    setHero([...hreo,name])
    setName("")
  }
  return (
    <>
      <ul>
        {
          hreo.map((h) => (
            <li key={h}>{h}</li>
          ))
        }
      </ul>
      <input type='text' value={name} onChange={(e)=> setName(e.target.value)}></input>
      <button onClick={onAddName}>Add Value</button>
    </>
  )
}

function Counter() {
  let [count, setCount] = useState(0);

  function Total() {
    setCount(count+1)
  }
  return (
    <>
      <button onClick={Total}>
        Total Count: {count}
      </button>
    </>
  )
}

function App() {
  return (

    <>
      <h1>I am Learning react</h1>
      <Counter />
      <SuperHeros/>
    </>
  );
}

export default App;
