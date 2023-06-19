
import React, { useEffect, useState } from 'react'
import '../style/main.css'
import Todays from './Todays'
import SevenDays from './SevenDays'
import Axios from 'axios'

// use hooks to display current city name when app loded

const Main = () => {

  const [cityName,setCityName] = useState();

  const [data, setData] = useState({})

  const fetchDeatis = async (event) => {
    event.preventDefault();
    const { data } = await Axios.get(`https://api.weatherapi.com/v1/forecast.json?key=d2d2708ebffb48bfb3d124500232505&q=${cityName}`)
setData(data)
  }
  
  return (
    <>
      <div className="header flex">
        <div className="left-section">
          <form className='search-form' onSubmit={fetchDeatis}>
            <input type='text'
              placeholder='Search for ctiies'
              id='search' value={cityName} onChange={(event)=>(setCityName(event.target.value))} />
            <button>Search</button>
          </form>
          <div className="city-name-section flex">
            <div className="city-details flex">
              <h1 className='city-name'>{data.location?.name}</h1>
              <p className="chance-of-rain">chance of rain: <span>0</span>%</p>
              <div className="temperature">
                <p className='temp'>{data.current?.temp_c} <span>&#8451;</span></p>
              </div>
            </div>
            <div className="weatherlogo flex">
              <img src={data.current?.condition?.icon} alt="Temperature logo" />
            </div>
          </div>

          <div className="today">
            <p>TODAYS'S FORECAST</p>
            <div className="forcast">
              {/* <Todays sendForcast={forcas[0]}/> */}
              <Todays time={data.forecast?.forecastday[0]?.hour[5]?.time.slice(11,19)} imgSrc={data.forecast?.forecastday[0]?.hour[5]?.condition?.icon}
               temp={data.forecast?.forecastday[0]?.hour[5]?.temp_c} />

              <Todays time={data.forecast?.forecastday[0]?.hour[8]?.time.slice(11,19)} imgSrc={data.forecast?.forecastday[0]?.hour[8]?.condition?.icon}
               temp={data.forecast?.forecastday[0]?.hour[8]?.temp_c} />

              <Todays time={data.forecast?.forecastday[0]?.hour[11]?.time.slice(11,19)} imgSrc={data.forecast?.forecastday[0]?.hour[11]?.condition?.icon}
               temp={data.forecast?.forecastday[0]?.hour[11]?.temp_c} />

               <Todays time={data.forecast?.forecastday[0]?.hour[14]?.time.slice(11,19)} imgSrc={data.forecast?.forecastday[0]?.hour[14]?.condition?.icon}
               temp={data.forecast?.forecastday[0]?.hour[14]?.temp_c} />

               <Todays time={data.forecast?.forecastday[0]?.hour[17]?.time.slice(11,19)} imgSrc={data.forecast?.forecastday[0]?.hour[17]?.condition?.icon}
               temp={data.forecast?.forecastday[0]?.hour[17]?.temp_c} />

               <Todays time={data.forecast?.forecastday[0]?.hour[20]?.time.slice(11,19)} imgSrc={data.forecast?.forecastday[0]?.hour[20]?.condition?.icon}
               temp={data.forecast?.forecastday[0]?.hour[20]?.temp_c} />

               <Todays time={data.forecast?.forecastday[0]?.hour[23]?.time.slice(11,19)} imgSrc={data.forecast?.forecastday[0]?.hour[23]?.condition?.icon}
               temp={data.forecast?.forecastday[0]?.hour[23]?.temp_c} />
            </div>
          </div>
          <div className="wind-section">
            <p>AIR CONDITIONS</p>
            <div className="aircondition-section">
              <div className="real-feel-section">
                <div className="real">
                  <p>Real Feel</p>
                  <p className='real-feel'>{data.current?.feelslike_c}<span>&#8451;</span></p>
                </div>
                <div className="wind">
                  <p>Wind</p>
                  <p><span className='wind-speed'>{data.current?.wind_kph} </span> km/h</p>
                </div>
              </div>
              <div className="chanc-of-rain-section">
                <div className="chance">
                  <p>Chance Of Rain</p>
                  <p><span>0</span>%</p>
                </div>
                <div className="uv-sec">
                  <p>UV Index</p>
                  <p className='uv'>{data.current?.uv}</p>
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