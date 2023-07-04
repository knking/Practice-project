
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [country, setCountry] = useState([])

  const fetchCountry = async () => {

    try {
      const countries = await axios.get('https://countriesnow.space/api/v0.1/countries')
      console.log(countries.data.data)
      setCountry(countries.data.data)
    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    fetchCountry();
  }, [])

  return (
    <div className="App">
      <div className='App-header'>
        <h1>Select Your Home Town</h1>
        <div>
          {country && (
            <select>
              <option disabled selected hidden>
                Select country
              </option>
              {
                country.map((country)=>(
                  <option>{country.country}</option>
                ))
              }
            </select>
          )

          }

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
