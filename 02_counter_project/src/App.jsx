// ui updation ko react control karta hai

import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)        //yaha basically ham hooks use kar rahe hai  
  //setCounter yani dusra function dusri value leta hai ki ye batao ki ab iske andar konsi value dale

  // let counter = 5

  
  const addValue = () => {
    // const counter = counter + 1
    if (counter >= 20) {
      alert("Value is greater than 20")
    } else {
      setCounter(counter + 1)   // value updation like this
    }             
  }

  const removeValue = () => {
    // let counter = counter - 1
    if (counter > 0) {
      setCounter(counter - 1)               // value updation like this
    } else {
      alert("Value is less than 0")
    }
  }

  return (
    <>
        <h1>Chai Aur React</h1>
        <h2>Counter value: {counter}</h2>

        <button onClick={addValue}>Add value</button>
        <br />
        <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
