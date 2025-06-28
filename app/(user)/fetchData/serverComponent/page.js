import axios from 'axios'
import React from 'react'

const fetchDataServer = async (props) => {
  const searchParams = await props.searchParams
  const username = searchParams.name

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 3000)
  })
  
  let userData = null

  if (username) {
    const API = `https://api.genderize.io/?name=${username}`
    const res = await fetch(API)
    userData = await res.json()
  }

  return (
    <div className=" flex flex-col items-center justify-start py-10 px-4">
      <h1 className="text-4xl font-bold mb-10 text-slate-100">Gender Prediction</h1>

      <form method="GET" className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="flex-1 p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition cursor-pointer"
        >
          Predict
        </button>
      </form>

      {username === '' && (
        <div className="mt-6 w-full max-w-md px-4 py-3 rounded-lg bg-red-100 border border-red-300 text-red-800 flex items-center gap-3 shadow-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01M4.93 4.93l14.14 14.14M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9z"
            />
          </svg>
          <p className="text-sm font-medium">Please enter a name before searching.</p>
        </div>
      )}

      {userData && (
        <div className="mt-12 bg-white rounded-xl shadow-lg w-full max-w-md p-6 text-center">
          <div className="flex justify-center mb-6">
            <div className={`w-24 h-24 rounded-full ${userData.gender === 'male' ? 'bg-blue-500' : 'bg-pink-500'} text-white flex items-center justify-center text-4xl font-bold shadow`}>
              {userData.name.charAt(0).toUpperCase()}
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 capitalize">{userData.name}</h2>
          <p className="my-4 text-gray-600 text-sm"><span className="border rounded-full p-2 px-4 font-bold capitalize">{userData.gender}</span></p>
          <p className="text-gray-600 mt-10">Probability: <span className="font-bold">{(userData.probability * 100).toFixed(1)}%</span></p>
          <p className="text-gray-600 mt-2">Count: <span className="font-bold">{userData.count}</span></p>
        </div>
      )}
    </div>
  )
}

export default fetchDataServer