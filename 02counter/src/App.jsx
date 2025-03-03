import { useState } from "react";

function App() {

  let [counter, setCounter]=useState(15);
 
  const addValue=()=>{
    if(counter<20){
      // setCounter(counter+1);
      counter=counter+1;
      setCounter(counter)
    }
  }

  const removeValue=()=>{
    if(counter>0){
      // setCounter(counter-1);
      counter=counter-1;
      setCounter(counter)
    }
  }

  return (
   <>
   <h1>Suyash Pal </h1>
   <h2>Counter Value :{counter }</h2>

   <button  onClick={addValue}>Add Value </button>

   <button onClick={removeValue}>Remove Value </button>


   </>
  )
}

export default App
