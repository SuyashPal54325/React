import { useState } from "react"



function App() {
 
  const [color , setColor ]=useState("orange")

  return (
   <div className="w-full  h-screen duration-200"  
   style={{backgroundColor:color}}
   >
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    <div className=" flex flex-wrap justify-center gap-3 shadow-lg  bg-white px-2 py-3 rounded-full  ">
      <button 
      onClick={()=>setColor("red")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
      style={{backgroundColor:"red"}}
      >Red</button>
      <button 
      onClick={()=>setColor("green")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
      style={{backgroundColor:"green"}}
      >Green</button>
      <button 
      onClick={()=>setColor("blue")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
      style={{backgroundColor:"Blue"}}
      >Blue</button>
      <button 
      onClick={()=>setColor("olive")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
      style={{backgroundColor:"olive"}}
      >Olive</button>
      <button 
      onClick={()=>setColor("Grey")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
      style={{backgroundColor:"Grey"}}
      >Grey</button>
    <button 
      onClick={()=>setColor("Yellow")}
      className="outline-none px-4 py-1 rounded-full text-black shadow-lg "
      style={{backgroundColor:"Yellow"}}
      >Yellow</button>
      <button 
      onClick={()=>setColor("Pink")}
      className="outline-none px-4 py-1 rounded-full text-black shadow-lg "
      style={{backgroundColor:"Pink"}}
      >Pink</button>
      <button 
      onClick={()=>setColor("Purple")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
      style={{backgroundColor:"Purple"}}
      >Purple</button>
      <button 
      onClick={()=>setColor("Lavender")}
      className="outline-none px-4 py-1 rounded-full text-black shadow-lg "
      style={{backgroundColor:"Lavender"}}
      >Lavender</button>
      <button 
      onClick={()=>setColor("White")}
      className="outline-none px-4 py-1 rounded-full text-black shadow-lg "
      style={{backgroundColor:"White"}}
      >White</button>
      <button 
      onClick={()=>setColor("Black")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
      style={{backgroundColor:"Black"}}
      >Black</button>
      </div>
    </div>
   </div>
  )
}

export default App
