import React from 'react'

const Card = ({imgSrc,locationA="bihar",currentA="44",forcastA="rainy",hourA="5"}) => {
  return (
    <>
    <div className="card" style={{width:"18rem"}}>
  <img src={imgSrc} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Location: {locationA}</h5>
    <p className="card-text">Current weather: {currentA}</p>
    <p className="card-text">forecast: {forcastA}</p>
    <p className="card-text">Date{hourA}</p>

    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </>
   
  )
}

export default Card