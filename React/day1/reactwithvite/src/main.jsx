import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'




/* This code dose not work
const reactElement = {
  type: 'a',
  props: {
      href: 'https://google.com',
      target: '_blank'
  },
  children: 'Click me to visit google'
}
ReactDOM.createRoot(document.getElementById('root')).render(
   reactElement
)
*/

/* below code working pefectily

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
)
ReactDOM.createRoot(document.getElementById('root')).render(
 anotherElement
)
*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

//Below code also work

// function MyApp(){
//   return(
//     <h2>Custom React !</h2>
//   )
// }
// ReactDOM.createRoot(document.getElementById('root')).render(
//     MyApp()
// )