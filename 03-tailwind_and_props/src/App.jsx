// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  // const [count, setCount] = useState(0)
  let myObject = {
    username: "Vishal",
    age: 18
  }

  let newArray = [1, 2, 3, 4]

  //Props components ko banata hai reusable matlab ek bar card bana liya to kyu na use baar baar use kar liya jaye

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded mb-4">TailWind Test</h1>
      <Card userName="chai and code" someObject={myObject} btnText="Click Me!!!" />        {/*kah bhi poperty ki madad se values pass karna*/} 
      <Card channel="chai and code 2" someObject={newArray} btnText = "Visit Me!!" />
    </>
  );
}

export default App
