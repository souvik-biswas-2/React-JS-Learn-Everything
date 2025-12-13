import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div
      className="flex flex-col items-center justify-center text-center p-5 bg-gray-900 text-white min-h-full"
    >
      
      <h1
        className="text-[10rem] font-extrabold text-red-500 tracking-wider m-0"
      >
        404
      </h1>

      <h2
        className="text-4xl sm:text-5xl font-semibold mt-2 mb-4"
      >
        Page Not Found
      </h2>

      <p
        className="text-lg max-w-xl mb-8 text-gray-400"
      >
        Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>

      <Link
        to="/"
        className="
          inline-block
          px-6 py-3
          text-lg font-bold
          text-white
          bg-blue-600
          rounded-lg
          shadow-md
          transition-colors
          duration-300
          hover:bg-blue-700
          focus:outline-none focus:ring-4 focus:ring-blue-500
        "
      >
        Go to Homepage
      </Link>
    </div>
  )
}

export default NotFound