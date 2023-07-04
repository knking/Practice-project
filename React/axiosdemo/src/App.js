
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [userData, setUserData] = useState([]);
  const user = async () => {
    try {
      const userDetails = await axios.get('https://randomuser.me/api/')
      console.log(userDetails.data.results[0].picture.large)
      setUserData(userDetails.data.results[0])
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    user();
  }, [])

  return (
    <div className="App">
      <div className='App-header'>
       <h1>Select Your Home Town</h1>
       <div>
       <select>
        <option disabled selected hidden>
Select country
        </option>
       </select>
       <select>
        <option disabled selected hidden>
Select City
        </option>
        <option>Bihar</option>
        <option>UP</option>
       </select>
       <button>GO</button>
       </div>
      </div>

    </div>
  );
}

export default App;
