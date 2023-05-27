
import { useEffect, useState } from "react";
import Card from "./Card";
import Axios from 'axios'

const App = ()=>{

    const list = ["hitesh","anurag","krishna"]
    const [details, setDetails] = useState({})
    
    const fetcgDetails = async ()=>{
        const {data} = await Axios.get('https://randomuser.me/api')
        console.log(data)

        const details = data.results[0]
        setDetails(details)
    }

    useEffect(()=>{
fetcgDetails()
    },[])
    return(
        <div>
        Hello from App component 
        <Card myname ="Hitesh" list={list}  details={details}/>
        <button onClick={fetcgDetails}>Get Data</button>
    </div>
    )
   
}

export default App;