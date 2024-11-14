import React, { useState, useEffect } from 'react';
import { AiOutlineEye, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineAppstore, AiOutlineUnorderedList } from 'react-icons/ai';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

function ProProduct() {
    const products = [
        {
          id: 1,
          image: '/pro1.jpg',
          name: 'Product Title Here',
          description: 'This is a short description of the product, highlighting key features and benefits.',
          rating: 4.5,
          price: 29.99,
        },
        {
          id: 2,
          image: '/pro2.jpg',
          name: 'Product Title Here',
          description: 'This is a short description of the product, highlighting key features and benefits.',
          rating: 4.0,
          price: 19.99,
        },
        {
          id: 3,
          image: '/pro3.jpg',
          name: 'Product Title Here',
          description: 'This is a short description of the product, highlighting key features and benefits.',
          rating: 3.5,
          price: 39.99,
        },
        {
          id: 4,
          image: '/pro4.jpg',
          name: 'Product Title Here',
          description: 'This is a short description of the product, highlighting key features and benefits.',
          rating: 3.5,
          price: 39.99,
        },
        {
          id: 5,
          image: '/pro5.jpg',
          name: 'Product Title Here',
          description: 'This is a short description of the product, highlighting key features and benefits.',
          rating: 3.5,
          price: 39.99,
        },
        {
          id: 6,
          image: '/pro6.jpg',
          name: 'Product Title Here',
          description: 'This is a short description of the product, highlighting key features and benefits.',
          rating: 3.5,
          price: 39.99,
        },
        {
          id: 7,
          image: '/pro7.jpg',
          name: 'Product Title Here',
          description: 'This is a short description of the product, highlighting key features and benefits.',
          rating: 3.5,
          price: 39.99,
        },
        {
          id: 8,
          image: '/pro8.jpg',
          name: 'Product Title Here',
          description: 'This is a short description of the product, highlighting key features and benefits.',
          rating: 3.5,
          price: 39.99,
        },
        {
          id: 9,
          image: '/pro1.jpg',
          name: 'Product Title Here',
          description: 'This is a short description of the product, highlighting key features and benefits.',
          rating: 3.5,
          price: 39.99,
        },
        // add more products as needed
      ];

  // Load initial state from localStorage or default to 'grid'
  const [viewMode, setViewMode] = useState(localStorage.getItem('viewMode') || 'grid');

  const toggleLayout = (mode) => {
    setViewMode(mode);
    localStorage.setItem('viewMode', mode); // Save to localStorage
  };

  useEffect(() => {
    // When component mounts, set viewMode from localStorage if available
    const savedViewMode = localStorage.getItem('viewMode');
    if (savedViewMode) {
      setViewMode(savedViewMode);
    }
  }, []);

  return (
    <div className="">
      {/* Top icons for layout toggle */}
      <div className="flex justify-between items-center gap-4 mb-8 py-4 px-4 bg-white rounded-md">
        <p className='text-lg text-gray-600 font-medium'>Showing 01 - 12 of 139 Results</p>
        <div className='flex justify-center items-center gap-4'>
        <button 
          onClick={() => toggleLayout('grid')}
          className={viewMode === 'grid' ? 'text-pink-600' : 'text-gray-600 hover:text-black'}
        >
          <AiOutlineAppstore size={28} /> {/* Grid icon */}
        </button>
        <button 
          onClick={() => toggleLayout('row')}
          className={viewMode === 'row' ? 'text-pink-600' : 'text-gray-600 hover:text-black'}
        >
          <AiOutlineUnorderedList size={28} /> {/* Row icon */}
        </button>
        </div>
      </div>

      {/* Product layout */}
      <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-3 gap-6' : 'flex flex-col gap-4'}>
        {products.map((product) => (
          <div key={product.id} className={`${viewMode === 'grid' ? 'relative group p-4 border rounded-lg shadow-md' : 'flex items-start p-4 border rounded-lg shadow-md w-full'}`}>
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className={`${viewMode === 'grid' ? 'w-full h-64 object-cover' : 'w-full h-64 object-cover'} transition-transform ease-in duration-300 group-hover:scale-105`}
              />
              {/* Hover icons */}
              <div className="absolute inset-0 flex justify-center items-center gap-4 opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 transition-opacity duration-300">
                <button className="text-white hover:text-gray-200">
                  <AiOutlineEye size={24} /> {/* Eye icon */}
                </button>
                <button className="text-white hover:text-gray-200">
                  <AiOutlineHeart size={24} /> {/* Heart icon */}
                </button>
                <button className="text-white hover:text-gray-200">
                  <AiOutlineShoppingCart size={24} /> {/* Cart icon */}
                </button>
              </div>
            </div>
            {/* Product info */}
            <div className={`${viewMode === 'row' ? 'pl-6' : 'text-start'}`}>
              <h3 className="mt-4 text-xl font-bold">{product.name}</h3>
              <p className="text-gray-500">${product.price.toFixed(2)}</p>
              <div className="flex justify-start">
                {[...Array(5)].map((_, index) => (
                  <span key={index} className="text-yellow-400 text-lg">
                    {index < Math.round(product.rating) ? '★' : '☆'}
                  </span>
                ))}
              </div>
              {/* Conditionally render description in row layout */}
              {viewMode === 'row' && (
                <p className="text-gray-700 mt-2">
                  {product.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center items-center gap-4 mt-10'>
        <div className='bg-white p-3 rounded-md hover:bg-pink-500 hover:text-white'>
        <FaAngleLeft className='text-2xl '/>
        </div>
        <div className='bg-white px-4 py-3 rounded-md hover:bg-pink-500 hover:text-white font-medium'>
        01
        </div>
        <div className='bg-white px-4 py-3 rounded-md hover:bg-pink-500 hover:text-white font-medium'>
        02
        </div>
        <div className='bg-pink-500 text-white font-medium px-4 py-3 rounded-md'>
        03
        </div>
        <div className='bg-white px-4 py-3 rounded-md hover:bg-pink-500 hover:text-white font-medium'>
        04
        </div>
        <div className='bg-white p-3 rounded-md hover:bg-pink-500 hover:text-white'>
        <FaAngleRight className='text-2xl'/>
        </div>
      </div>
    </div>
  );
}

export default ProProduct;
