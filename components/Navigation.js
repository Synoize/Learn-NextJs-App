import Link from 'next/link'
import React from 'react'

const Navigation = () => {
    return (
        <header className='grid grid-cols-3 h-20 items-center  bg-white text-black px-10'>
            <div>Logo</div>
            <nav>
                <ul className='flex gap-8'>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/about'>About</Link>
                    </li>
                    <li>
                        <Link href='/services'>Services</Link>
                    </li>
                    <li>
                        <Link href='/contact'>Contact</Link>
                    </li>
                    <li>
                        <Link href='/profile'>Profile</Link>
                    </li>
                </ul>
            </nav>

            <div className='flex justify-end gap-4'>
                <Link href='/login'>
                    <button className='border rounded-lg p-2 px-8 cursor-pointer'>Login</button>
                </Link>
                <Link href='/signup'>
                    <button className='border rounded-lg p-2 px-8 cursor-pointer'>SignUp</button>
                </Link>
            </div>

        </header>
    )
}

export default Navigation