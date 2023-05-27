import React from 'react'

const Card = ({ myname, list,details }) => {

    return (
        <>
            <div>This is Card </div>
            <h1>{details.gender}</h1>
            <h2>{details.name?.first}</h2>
            <h3>{details.location?.city}</h3>
            <ul>
                {list.map((lst)=>(
                    <li key={lst}>{lst}</li>
                ))}
                
            </ul>
        </>
    )
}

export default Card