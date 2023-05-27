import React from 'react'

const Card = ({ myname, list }) => {

    return (
        <>
            <div>This is Card </div>
            
            <ul>
                {list.map((lst)=>(
                    <li key={lst}>{lst}</li>
                ))}
                
            </ul>
        </>
    )
}

export default Card