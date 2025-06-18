"use client"

import React, { useEffect, useState } from 'react'

// client Component
const Home = () => {
  const [count, setCount] = useState(0);
  const [fetchData, setFetchData] = useState([]);

  const API = "https://jsonplaceholder.typicode.com/todos";

  const HandleFetchData = async () => {
    try {
      const response = await fetch(API)
      const data = await response.json();
      setFetchData(data);
      console.log(data);
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  useEffect(() => {
    HandleFetchData();
  }, [])

  return (
    <div>
      <h1 className='common_heading'>Home</h1>
      <button className='border p-4 rounded-lg' onClick={() => setCount(count + 1)}>Click: {count}</button>

      <div>
        <ul className='h-[60vh] overflow-y-auto'>
          {
            fetchData.map((data, idx) => (
              <li key={idx}>{data.title}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Home