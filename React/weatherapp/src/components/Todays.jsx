import React from 'react'
import '../style/Todays.css'

// const Todays = ({ sendForcast }) => {

const Todays = ({ time,imgSrc,temp}) => {

  // const dd = sendForcast?.hour[3]
  // const hr = sendForcast?.hour

  // const setTime = dd?.time;
  // const src = dd?.condition?.icon
  // const temp = dd?.temp_c
  return (
    <>
      <div className="todays-card">
      <p className='todays-time'>{time}</p>
        {/* <img src={src} alt="weather" className='todays-img-logo' />
        <p className='todays-time'>{setTime.slice(11,16)}</p> */}

        <img src={imgSrc} alt="weather" className='todays-img-logo' />
        <p className='todays-temp'>{temp}<span>&#8451;</span></p>
      </div>

    </>
  )
}

export default Todays