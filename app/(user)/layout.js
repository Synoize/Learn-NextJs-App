import Navigation from '@/components/Navigation'
import React from 'react'

export default function Userlayout({ children }) {
  return (
    <div>
      <Navigation />
      <div className='max-w-7xl w-full mx-auto p-8'>
        {children}
      </div>
    </div>
  )
}
