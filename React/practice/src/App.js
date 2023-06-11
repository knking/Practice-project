
import Axios from 'axios'
import Card from './Card';
import { useEffect, useState } from 'react';


function App() {

const [data,setData]= useState({})

// useEffect(()=>{
//   // setCardValue();
// },[])

// const setCardValue  = async ()=>{
//   const {data} = await Axios.get('https://randomuser.me/api/')
//   setData(data.results[0])
//   console.log(data.results[0])
  
//   }

const setCardValue =  async ()=>{
const { data } = await Axios.get('https://api.weatherapi.com/v1/forecast.json?key=d2d2708ebffb48bfb3d124500232505&q=bihar')
console.log(data)
}

  return (
    <div className="App d-flex">
      <button className="btn btn-info" onClick={setCardValue}>Get Card Data</button>
    
      {/* <Card imgSrc={data.picture?.thumbnail} title={data.location?.city} cardtext={data.email}/>
      <Card imgSrc={data.picture?.thumbnail} title={data.location?.city} cardtext={data.email}/>
      <Card imgSrc={data.picture?.thumbnail} title={data.location?.city} cardtext={data.email}/> */}
      
    </div>
  );
}

export default App;
