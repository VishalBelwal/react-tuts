/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'


const anotherUser = "Chai Aur React"

const reactElement = React.createElement(
  'a',
  {
    href: 'https://www.google.com',
    target: '_main'
  },
  'Click me to use Google',
  anotherUser  
)

// yaha par react tree banne ke baad another user inject ho raha hai ye sab ek evaluated expression hail

ReactDOM.createRoot(document.getElementById('root')).render(  //yaha par variable karefrence nahi liya ja raha 
    // <App />
    reactElement
)
