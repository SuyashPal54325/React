import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let  [counter, setCounter]=useState(0);


  // let counter =6;


  const addValue=()=>{
    if(counter<20){
    console.log("value added",Math.random());
    counter=counter+1;
    setCounter(counter);
    }
    else{
      console.log("Counter Value Exceeds")
    }
  }

  const removeValue=()=>{
    if(counter>0){
    console.log("value removed",Math.random());
    counter=counter-1;
    setCounter(counter);
    }
    else{
      console.log("Counter Value Minimum")
    }
  }

  return (
   <>
    <h1>Chai Aur react Hooks</h1>
    <h2>Counter Value: {counter}</h2>

    <button
    onClick={addValue}
    >Add Value {counter}</button>
    <br />
    <button
    onClick={removeValue}
    >Remove Value {counter}</button>
   </>
  )
}

export default App
