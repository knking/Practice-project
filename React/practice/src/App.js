
import Axios from 'axios'
import Card from './Card';
import { useEffect, useState } from 'react';


function App() {

  const [data, setData] = useState({})

  //below cpde is for random api user data 

  // useEffect(()=>{
  //   // setCardValue();
  // },[])

  // const setCardValue  = async ()=>{
  //   const {data} = await Axios.get('https://randomuser.me/api/')
  //   setData(data.results[0])
  //   console.log(data.results[0])

  //   }


  
  //below code os for weather app

  const setCardValue = async () => {
    const { data } = await Axios.get('https://api.weatherapi.com/v1/forecast.json?key=d2d2708ebffb48bfb3d124500232505&q=bihar')
    console.log(data)
    console.log(data.location)
    console.log(data.current)
    console.log(data.forecast)
    setData(data)
    console.log(data.forecast?.forecastday[0]?.day?.condition?.icon)
    
  }

  return (
    <div className="App d-flex">
      <button className="btn btn-info" onClick={setCardValue}>Get Card Data</button>

      <Card imgSrc={data.forecast?.forecastday[0]?.day?.condition?.icon} locationA={data.location?.name} currentA={data.current?.temp_c} forcastA={data.forcast?.forecastday[0]?.astro?.date} hourA={data.location?.localtime.slice(11,19)} />
      {/* <Card imgSrc={data.picture?.thumbnail} title={data.location?.city} cardtext={data.email}/>
      <Card imgSrc={data.picture?.thumbnail} title={data.location?.city} cardtext={data.email}/>
      <Card imgSrc={data.picture?.thumbnail} title={data.location?.city} cardtext={data.email}/> */}

    </div>
  );
}

export default App;
