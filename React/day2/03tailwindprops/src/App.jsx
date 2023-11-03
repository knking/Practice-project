import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/Crad'

function App() {

  let myObj={
    name:"krishna",
    age:25
  }
  let arr=[1,2,3,4]
  return (
    <>
    <h1 className='bg-green-400 rounded-xl mb-6'>Tailwind CSS</h1>
<Card userName="Krishna" btnText="Click Me"/>
<Card userName={"Roy"} btnText="View Profile"/>

    </>
  )
}

export default App
