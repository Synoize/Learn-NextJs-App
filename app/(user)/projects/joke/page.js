'use client'

import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Loading = () => {
    return (
        <div className='w-full flex justify-center items-center'>
            <div className=" w-4 h-4 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
    );
};


const RendomJokes = () => {
    const URL = "https://official-joke-api.appspot.com/random_joke";

    const [loading, setLoading] = useState(false)
    const [showPunchline, setShowPunchline] = useState(false)
    const [jokes, setJokes] = useState({})

    const fetchRandomJokes = async () => {
        setLoading(true)
        try {
            const res = await axios(URL)
            setJokes(res.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchRandomJokes()
    }, [])
    return (
        <div className="max-w-md w-full mx-auto mt-10 p-10 bg-white rounded-2xl shadow-lg flex flex-col items-center">
            <h1 className="text-2xl font-semibold mb-4 text-center text-gray-800 flex flex-col gap-4"><span className='text-5xl'>😂</span> Random Jokes</h1>

            <p className="inline-block bg-blue-100 text-gray-800 text-sm font-medium rounded-full px-3 py-1 mb-2">{jokes.type}</p>
            <div className="w-full p-4 mb-4">
                <p className="text-gray-700 font-semibold mb-2">🪄 {jokes.setup}</p>
                {
                    showPunchline ? (
                        <>
                            <div className="p-4 border border-gray-200 rounded-lg bg-yellow-200 text-gray-900">💥 {jokes.punchline}</div>
                            <button onClick={() => setShowPunchline(false)} className='cursor-pointer mt-4 p-2 px-4 rounded-full text-xs bg-gray-600 text-white'>Hide</button>
                        </>

                    ) : (
                        <button className='cursor-pointer mt-4 p-2 px-4 rounded-full text-xs bg-pink-600 text-white' onClick={() => setShowPunchline(true)}>Reveal</button>
                    )
                }
            </div>

            <button
                onClick={fetchRandomJokes}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full px-6 py-2 h-12 w-40 transition duration-200 cursor-pointer"
            >
                {
                    loading ? <Loading /> : "Get a Joke"
                }
            </button>
            <p className='mt-4 text-gray-500'>Id:{jokes.id}</p>
        </div>
    )
}

export default RendomJokes