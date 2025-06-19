import React from 'react'

// server component
const Services = async () => {
  const API = "https://jsonplaceholder.typicode.com/todos";

  const fetchData = await fetch(API)
  const data = await fetchData.json()

  console.log(data);

  return (
    <div>
      <h1 className='common_heading'>Services</h1>
      <div>
        <ul className='h-[60vh] overflow-y-auto'>
          {
            data.map((data, idx) => (
              <li key={idx}>{data.title}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Services