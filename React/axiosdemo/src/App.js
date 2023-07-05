
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [countries, setCountries] = useState([])

  const[singleCountry, setSingleCountry] = useState();

  const [cities,setCities] = useState([])

  const fetchCountry = async () => {

    try {
      const countries = await axios.get('https://countriesnow.space/api/v0.1/countries')
      console.log(countries.data.data)
      setCountries(countries.data.data)
    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    fetchCountry();
  }, [])

  const fetchCities = (country)=>{
    setSingleCountry(country)

    const findCities = countries.find((c)=>c.country === country)
   setCities(findCities.cities)
  }
  return (
    <div className="App">
      <div className='App-header'>
        <h1>Select Your Home Town</h1>
        <div>
          {countries && (
            <select onChange={(e)=>fetchCities(e.target.value)} value={singleCountry}>
              <option disabled selected hidden>
                Select country
              </option>
              {
                countries.map((country)=>(
                  <option key={`${country.country}`} value={country.country}>{country.country}</option>
                ))
              }
            </select>
          )
          }

{
  cities && <select>
  <option disabled selected hidden>
    Select City
  </option>

  {
    cities.map((city)=>(
<option key={city}>{city}</option>
    ))
  }
  
  
</select>
}
          
          <button>GO</button>
        </div>
      </div>

    </div>
  );
}

export default App;
