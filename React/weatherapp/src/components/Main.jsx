
import React from 'react'
import '../style/main.css'
import Todays from './Todays'
import SevenDays from './SevenDays'

// use hooks to display current city name when app loded

const Main = () => {
  return (
    <>
      <div className="header flex">
        <div className="left-section">
          <form className='search-form'>
            <input type='text' placeholder='Search for ctiies' id='search'></input>
          </form>
          <div className="city-name-section flex">
            <div className="city-details flex">
              <h1 className='city-name'>Noida</h1>
              <p className="chance-of-rain">chance of rain: <span>0</span>%</p>
              <div className="temperature">
                <p className='temp'>31 c</p>
              </div>
            </div>
            <div className="weatherlogo">
              <img src="" alt="Temperature logo" srcset="" />
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
            <SevenDays/>
            <SevenDays/>
            <SevenDays/>
            <SevenDays/>
            <SevenDays/>
            <SevenDays/>
            <SevenDays/>
          </div>
        </div>
      </div>

    </>
  )
}

export default Main