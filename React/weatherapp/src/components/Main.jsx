
import React from 'react'
import '../style/main.css'

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
        </div>
        <div className="right-section">
          right
        </div>
      </div>

    </>
  )
}

export default Main