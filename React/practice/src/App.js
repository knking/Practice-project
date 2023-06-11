
import Axios from 'axios'
import Card from './Card';
import { useEffect, useState } from 'react';


function App() {

const [data,setData]= useState({})

useEffect(()=>{
  setCardValue();
},[])

const setCardValue  = async ()=>{
  const {data} = await Axios.get('https://randomuser.me/api/')
  setData(data.results[0])
  
  }

  return (
    <div className="App d-flex">
      <button className="btn btn-info" onClick={setCardValue}>Get Card Data</button>
      <Card imgSrc={data.picture?.thumbnail} title={data.location?.city} cardtext={data.email}/>
      <Card imgSrc={data.picture?.thumbnail} title={data.location?.city} cardtext={data.email}/>
      <Card imgSrc={data.picture?.thumbnail} title={data.location?.city} cardtext={data.email}/>
      <Card imgSrc={data.picture?.thumbnail} title={data.location?.city} cardtext={data.email}/>
      
    </div>
  );
}

export default App;
