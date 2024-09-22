import logo from './logo.svg';
import {useState,useEffect} from 'react';
import './App.css';
import axios from "";

function App() {
  let [age,setAge]= useState(1)

  useEffect(() => {
    console.log("My age is ", age);
    
  },[]);
  
  function increase() {
    setAge(age+1);
  }
  return (
    <>
    {age} <button onClick={increase}> Increase it by one</button>
    </>
  );
}

export default App;
