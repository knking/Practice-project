import React from 'react'
import '../style/Todays.css'
const Todays = ({sendForcast}) => {

const dd = sendForcast?.hour[3]
const hr= sendForcast?.hour
console.log(hr)
// for(let i= 0;i<hr.length;i++){
//   console.log(hr)
// }
  // console.log(dd?.time)
  const setTime = dd?.time;
  const src= dd?.condition?.icon
  return (
    <>
    <div className="todays-card">
      <p className='todays-time'>{setTime}</p>
      <img src={src} alt="weather"  className='todays-img-logo'/>
      <p className='todays-temp'>25 C</p>
    </div>
    
    </>
  )
}

export default Todays