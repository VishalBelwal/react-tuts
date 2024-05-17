import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
  const data = useLoaderData()
  // const [data, setData] = useState([])      //ye data ko page par render karne ke liye state use hogi
  // //jab bhi component load hoga tyo api use hona chahiye
  // useEffect(() => {
  //   fetch('https://api.github.com/users/VishalBelwal')
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data);
  //     setData(data)
  //   })
  // },[])
  return (
    <div className="text-center m-5 p-5 bg-gray-600 text-white text-2xl">
      Github Followers: {data.followers}
      <div className="flex items-center ">
        <img
          src={data.avatar_url}
          alt="Git Picture"
          width={300}
          height={300}
          className="m-4 p-2"
        />
        Name = {data.login}
      </div>
    </div>
  );
}

export default Github

export const githubinfoLoader = async() => {
  const response = await fetch('https://api.github.com/users/VishalBelwal')
  return response.json()
}