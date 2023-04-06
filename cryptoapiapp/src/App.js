import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios';

function App() {

  useEffect(()=>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en').then(res=>{
      console.log(res.data);
    }).catch(error => console.error(error));
  },[])

  return (
    <div className="App">
      batu
    </div>
  );
}

export default App;
