import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const { userid } = useParams()
  return (
    <div className='text-center bg-gray-600 text-2xl text-white p-6 m-4'>User: {userid}</div>
  )
}

export default User

//ab ye sab hamare par depend karega ki ham is userId ke basis par kya karna chate hai example database call karna chate hai ya fir use display karana chate hai