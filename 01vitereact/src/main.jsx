import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';

import App from './App.jsx'

// function Myapp(){
//   return(
//     <div>
//       <h4>Customm Increase </h4>
//     </div>
//   )
// }

// const reactElement={
//   type: 'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank'
//   },
//   children:'Click to go google '
// }

// const anotherElement =(
//   <a href="https://google.com " target='_blank'>Visit Google </a>
// )

// const reactElement =React.createElement(
//   'a',
//   {href:'https://google.com',target:'_blank'},
//   'Click me to visit Google '
// )

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <App/>
  </StrictMode>
  
)
