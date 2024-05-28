import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  
  const {setUser} = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({userName, password})
  }

  return (
    <div>
      <h2>LOGIN</h2>
      <input type="text" placeholder='userName' value={userName} onChange={(e) => setUserName(e.target.value)} />

      {"  "}
      <input type="password" placeholder='PassWord' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login;