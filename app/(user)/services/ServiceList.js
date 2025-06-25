"use client";

import { useSearchParams } from 'next/navigation'
import React from 'react'

const ServiceList = () => {
    // http://localhost:3000/services?web=html&app=react%20native
    const searchParams = useSearchParams();
    console.log("searchParams: ", searchParams);

    const web = searchParams.getAll('web');
    const app = searchParams.get('app');
    console.log("web: ", web, "app: ", app);
    
  return (
    <div className='bg-slate-50 text-black p-4 rounded-lg '>
        <p>ServiceList</p>
        <p>Web: {web}</p>
        <p>App: {searchParams.get('app')}</p>
    </div>
  )
}

export default ServiceList