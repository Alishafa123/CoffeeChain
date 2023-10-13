// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'

function App() {
  const [state,setstate]=useState({
    provider:null,
    signer:null,
    contract:null
  })
  useEffect(()=>{
    const template=async ()=>{
// const contract_Address="";
// const contractABI="";

try {
  const { ethereum } = window;
  const account = await ethereum.request({ method: "eth_requestAccounts" });
  // handle the 'account' here
} catch (error) {
  // handle the error here, such as showing a message to the user
  console.error('Error while requesting Ethereum accounts:', error);
}
    }
    template();
  },[])
  return (
    <div className="App">
    
    </div>
  );
}

export default App;
