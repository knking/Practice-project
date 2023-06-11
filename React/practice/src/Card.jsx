import React from 'react'

const Card = ({imgSrc,location="bihar",current="44",forcast="rainy",hour="5"}) => {
  return (
    <>
    <div className="card" style={{width:"18rem"}}>
  <img src={imgSrc} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{location}</h5>
    <p className="card-text">{current}</p>
    <p className="card-text">{forcast}</p>
    <p className="card-text">{hour}</p>

    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </>
   
  )
}

export default Card