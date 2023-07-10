
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [countries, setCountries] = useState([])

  const[singleCountry, setSingleCountry] = useState();

  const [cities,setCities] = useState([])
  const [singleCity, setSingleCity] = useState("")
  const [submit, setSubmit] = useState(false)


  const fetchCountry = async () => {

    try {
      const countries = await axios.get('https://countriesnow.space/api/v0.1/countries')
      
      setCountries(countries.data.data)
    } catch (error) {
      console.log(error)
    }

  }

  const submitHandler = ()=>{
if(singleCountry && singleCity){
  setSubmit(true)
}
  }

  useEffect(() => {
    fetchCountry();
  }, [])

  const fetchCities = (country)=>{
    setSubmit(false)
    setSingleCity(null)
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
                  <option key={`${country.country}-${Date.now()}`} value={country.country}>{country.country}</option>
                ))
              }
            </select>
          )
          }

{
  cities && 
  <select onChange={(e)=>setSingleCity(e.target.value)} value={singleCity}>
  <option disabled selected hidden>
    Select City
  </option>
  {
    cities.map((city)=>(
<option value={city} key={`${city}-${Date.now()}`}>{city}</option>
    ))
  }
</select>
} 
          <button onClick={submitHandler}>GO</button>
        </div>
        {
          submit  &&  <h3>Your country is {singleCountry} and city is {singleCity}</h3>
        }
       
      </div>

    </div>
  );
}

export default App;
