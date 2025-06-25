import React from 'react'
import ServiceList from './ServiceList';

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
        <ServiceList/>
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