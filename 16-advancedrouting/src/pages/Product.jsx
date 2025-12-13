import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Product = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      
      <nav className="p-4 border-b border-gray-700">
        <div className="container mx-auto flex items-center justify-start">
          
          <span className="text-xl font-bold text-white mr-8">Products</span>
          
          <div className="flex space-x-6">
            <Link
              to="/products/web-dev"
              className="text-gray-300 hover:text-white transition duration-150 ease-in-out font-medium"
            >
              Web Dev
            </Link>
            <Link
              to="/products/devops"
              className="text-gray-300 hover:text-white transition duration-150 ease-in-out font-medium"
            >
              DevOps
            </Link>
          </div>
          
        </div>
      </nav>

      <div className="container mx-auto p-4 text-white">
        <Outlet />
      </div>

    </div>
  )
}

export default Product