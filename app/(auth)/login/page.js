import style from '../auth.module.css'
import Link from 'next/link'
import React from 'react'

const login = () => {
    return (
        <div>
            <h1>User <span className={style.common_heading}>Login</span></h1>

            <Link href='/'>
                <button className='border rounded-lg p-2 px-8 cursor-pointer'>Go to home page</button>
            </Link>
        </div>
    )
}

export default login