import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function Myapp(){
  return(
    <h6>Lorem ipsum dolor sit amet.</h6>
  )
}


// const anotherElement=(
//   <a href="https://google.com" target='_blank'>Visit Google</a>
// )

// const reactElement = React.createElement(
//   'a',
//   { href: 'https://google.com', target: '_blank' },
//   'Click me to visit Google pp'
// );


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Myapp/>
    <App />
  </StrictMode>

  // reactElement

  /*
  anotherElement
*/
)
