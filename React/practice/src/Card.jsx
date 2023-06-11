import React from 'react'

const Card = ({imgSrc,title="i am card title",cardtext="iam content of card"}) => {
  return (
    <>
    <div className="card" style={{width:"18rem"}}>
  <img src={imgSrc} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{cardtext}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </>
   
  )
}

export default Card