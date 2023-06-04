import React from 'react'
import '../style/Todays.css'
const Todays = ({sendForcast}) => {
const dd = sendForcast?.hour[0]
  // console.log(dd?.time)
  const setTime = dd?.time;
  return (
    <>
    <div className="todays-card">
      <p className='todays-time'>{setTime}</p>
      <img src="" alt="weather"  className='todays-img-logo'/>
      <p className='todays-temp'>25 C</p>
    </div>
    
    </>
  )
}

export default Todays