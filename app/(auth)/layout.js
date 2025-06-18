import React from 'react'

export default function Authlayout({ children }) {
  return (
    <div>
      <div className='max-w-7xl mx-auto p-8'>
        {children}
      </div>
    </div>
  )
}
