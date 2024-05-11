import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(  //yaha par variable karefrence nahi liya ja raha 
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
