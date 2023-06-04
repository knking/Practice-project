import React from 'react'
import '../style/Todays.css'
const Todays = ({sendForcast}) => {

const dd = sendForcast?.hour[3]
const hr= sendForcast?.hour


  const setTime = dd?.time;
  const src= dd?.condition?.icon
  const temp = dd?.temp_c
  return (
    <>
    <div className="todays-card">

{
 hr.map((k,value)=>{
  <>
{
  console.log(k)
}
<p className='todays-time'>{setTime}</p>
  <img src={src} alt="weather" className='todays-img-logo'/>
  <p className='todays-temp'>{temp}<span>&#8451;</span></p>
  </>
  
 })
}
     
    </div>
    
    </>
  )
}

export default Todays