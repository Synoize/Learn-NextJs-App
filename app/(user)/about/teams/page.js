import Image from 'next/image'
import React from 'react'
import teamMember1 from '@/public/team_member_1.jpg'

// Nested App Routes
const Teams = () => {
  return (
    <div>
      <h1 className='common_heading'>Our Team's</h1>
      <div className='grid grid-cols-4 gap-8 mt-8'>
        <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:translate-y-2 transition-all duration-300'>
          <div className='w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden'>
            <Image
              src={'/team_member_1.jpg'}
              alt='alice'
              width={200}
              height={200}
              className='w-full h-full'
            />
          </div>
          <h3 className='text-lg font-semibold text-center text-gray-800'>Alice Leo</h3>
          <p className='text-sm text-gray-600 text-center mt-2'>Frontend Developer</p>
          <p className='text-xs text-gray-500 text-center mt-1'>React & TypeScript</p>
        </div>

        <div className='bg-white rounded-lg shadow-md hover:shadow-lg hover:translate-y-2 transition-all duration-300'>
          <div className='w-full h-full relative bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center'>
            <Image
              src={teamMember1}
              alt='alice'
              fill={true}
              quality={100}
              priority={false}
              placeholder='blur'
              className='rounded-lg object-cover'
            />
          </div>
        </div>

        <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:translate-y-2 transition-all duration-300'>
          <div className='w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center'>
            <span className='text-2xl font-bold text-purple-600'>TT</span>
          </div>
          <h3 className='text-lg font-semibold text-center text-gray-800'>Alice Leo</h3>
          <p className='text-sm text-gray-600 text-center mt-2'>Frontend Developer</p>
          <p className='text-xs text-gray-500 text-center mt-1'>React & TypeScript</p>
        </div>

        <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:translate-y-2 transition-all duration-300'>
          <div className='w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center'>
            <span className='text-2xl font-bold text-purple-600'>TT</span>
          </div>
          <h3 className='text-lg font-semibold text-center text-gray-800'>Alice Leo</h3>
          <p className='text-sm text-gray-600 text-center mt-2'>Frontend Developer</p>
          <p className='text-xs text-gray-500 text-center mt-1'>React & TypeScript</p>
        </div>

        <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:translate-y-2 transition-all duration-300'>
          <div className='w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center'>
            <span className='text-2xl font-bold text-purple-600'>TT</span>
          </div>
          <h3 className='text-lg font-semibold text-center text-gray-800'>Alice Leo</h3>
          <p className='text-sm text-gray-600 text-center mt-2'>Frontend Developer</p>
          <p className='text-xs text-gray-500 text-center mt-1'>React & TypeScript</p>
        </div>

        <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:translate-y-2 transition-all duration-300'>
          <div className='w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center'>
            <span className='text-2xl font-bold text-purple-600'>TT</span>
          </div>
          <h3 className='text-lg font-semibold text-center text-gray-800'>Alice Leo</h3>
          <p className='text-sm text-gray-600 text-center mt-2'>Frontend Developer</p>
          <p className='text-xs text-gray-500 text-center mt-1'>React & TypeScript</p>
        </div>

      </div>
    </div>
  )
}

export default Teams