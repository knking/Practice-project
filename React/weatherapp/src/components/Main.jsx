
import React, { useState } from 'react'
import '../style/main.css'
import Todays from './Todays'
import SevenDays from './SevenDays'
import Axios from 'axios'

// use hooks to display current city name when app loded

const Main = () => {

  const [val, setVal] = useState();
   function fun(){
setVal()
console.log(val)
  }

  const [apiData, setApiData] = useState({});

  

  const fetchDeatis = async (event) => {
    event.preventDefault();
    const { data } = await Axios.get('https://api.weatherapi.com/v1/forecast.json?key=d2d2708ebffb48bfb3d124500232505&q={val}')

    const apiData = data.location;
    console.log(apiData)
    setApiData(apiData);
  }

  return (
    <>
     <input type='text' placeholder='Search for ctiies' id='search' value={val} onChange={(e) => setVal(e.target.value)} />
     <button onClick={fun}>HLOOOO</button>
      <div className="header flex">
        <div className="left-section">
          <form className='search-form' onSubmit={fetchDeatis}>
            {/* <input type='text' placeholder='Search for ctiies' id='search' value={val} onChange={(e) => setVal(e.target.value)} /> */}
            <button>Search</button>
          </form>
          <div className="city-name-section flex">
            <div className="city-details flex">
              <h1 className='city-name'>{apiData.name}</h1>
              <p className="chance-of-rain">chance of rain: <span>0</span>%</p>
              <div className="temperature">
                <p className='temp'>31 c</p>
              </div>
            </div>
            <div className="weatherlogo">
              <img src="" alt="Temperature logo" />
            </div>
          </div>
          <div className="today">
            <p>TODAYS'S FORECAST</p>
            <div className="forcast">
              <Todays />
              <Todays />
              <Todays />
              <Todays />
              <Todays />
              <Todays />
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