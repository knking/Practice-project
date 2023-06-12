import React from 'react'
import '../style/Home.css'

const Home = () => {
  return (
   <>
   <div className="container">

    <form action="" className='form'>

      <input type="text" name="title" id="" placeholder='Title Here'/>
      <textarea name="textarea" id="" placeholder='Enter your Notes Herea'>

      </textarea>
      <button type="submit">ADD</button>
    </form>
   </div>
   
   </>
  )
}

export default Home