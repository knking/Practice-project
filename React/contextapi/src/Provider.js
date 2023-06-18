import React, { useState } from 'react'

import PackageContext from './Context'

const Provider = (props) => {
    const [mission, setMission] = useState({
        mname: "Go to Russia",
        agent: 7,
        accept: "Not Accepted Yet"

    })

    return (
        <PackageContext.Provider value={{
            data: mission,
            isMissonAccepted: () => {
                setMission({ ...mission, accept: "ACCEPTED" })
            }

        }}>
            {
                props.children
            }
        </PackageContext.Provider>
    )
}

export default Provider;