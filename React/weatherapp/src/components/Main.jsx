
import React, { useEffect, useState } from 'react'
import '../style/main.css'
import Todays from './Todays'
import SevenDays from './SevenDays'
import Axios from 'axios'

// use hooks to display current city name when app loded

const Main = () => {

  
  const [loc, setLoc] = useState({});
  const [curr, setCurr] = useState({});
  const [forCas, setForCas] = useState({});
  const [cityName,setCityName] = useState("bihar")

  const [newtime,setNewTime] = useState([])
  console.log("Outer Time")
  console.log(newtime[4])

  function addCity(event){
setCityName(event.target.value)
  }

  const fetchDeatis = async (event) => {
    event.preventDefault();
    const { data } = await Axios.get(`https://api.weatherapi.com/v1/forecast.json?key=d2d2708ebffb48bfb3d124500232505&q=${cityName}`)

    const loc = data.location;
    const curr =data.current;
    const forCas = data.forecast.forecastday;
    setLoc(loc)
    setCurr(curr)
    setForCas(forCas)

    // console.log(forCas[0].date) // work on this 

   
    let newtime = forCas[0].hour;
    console.log("inner Time")
    console.log(newtime)
    setNewTime(newtime)
  
    console.log((forCas[0].hour[0]?.time).slice(11,16))
console.log("verify data ")
    console.log(forCas)
  }
// const getLocation = (event)=>{
// setCityName("bihar")
// fetchDeatis(event)
// }

//   useEffect(()=>{
// getLocation();
//   })


  return (
    <>
      <div className="header flex">
        <div className="left-section">
          <form className='search-form' onSubmit={fetchDeatis}>
          <input type='text'
           placeholder='Search for ctiies' 
           id='search' value={cityName} onChange={addCity} /> 
            <button>Search</button>
          </form>
          <div className="city-name-section flex">
            <div className="city-details flex">
              <h1 className='city-name'>{loc.name}</h1>
              <p className="chance-of-rain">chance of rain: <span>0</span>%</p>
              <div className="temperature">
                <p className='temp'>{curr.temp_c} <span>&#8451;</span></p>
              </div>
            </div>
            <div className="weatherlogo flex">
              <img src={curr.condition?.icon} alt="Temperature logo" />
            </div>
          </div>

          <div className="today">
            <p>TODAYS'S FORECAST</p>
            <div className="forcast">
              {/* <Todays sendForcast={forcas[0]}/> */}
              <Todays time={newtime} imgSrc={"https://"} temp="30.c"/> 
              {/* <Todays time={newtime[0]} imgSrc={"https://"} temp="15.c"/>
              <Todays time={newtime[8]} imgSrc={"https://"} temp="18.c"/>
              <Todays time={newtime[12]} imgSrc={"https://"} temp="22.c"/>
              <Todays time={newtime[16]} imgSrc={"https://"} temp="36.c"/>
              <Todays time={newtime[23]} imgSrc={"https://"} temp="56.c"/> */} 
            </div>
          </div>
          <div className="wind-section">
            <p>AIR CONDITIONS</p>
            <div className="aircondition-section">
              <div className="real-feel-section">
                <div className="real">
                  <p>Real Feel</p>
                  <p className='real-feel'>30 C</p>
                </div>
                <div className="wind">
                  <p>Wind</p>
                  <p><span className='wind-speed'>3</span>km/h</p>
                </div>
              </div>
              <div className="chanc-of-rain-section">
                <div className="chance">
                  <p>Chance Of Rain</p>
                  <p><span>0</span>%</p>
                </div>
                <div className="uv-sec">
                  <p>UV Index</p>
                  <p className='uv'></p>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="right-section">
          <p>7-DAY FORECAST</p>
          <div className="seven-days">
            <SevenDays />
            <SevenDays />
            <SevenDays />
            <SevenDays />
            <SevenDays />
            <SevenDays />
            <SevenDays />
          </div>
        </div>
      </div>

    </>
  )
}

export default Main