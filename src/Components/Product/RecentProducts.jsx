import React from 'react';
import { FaStar } from 'react-icons/fa';

const RecentProducts = () => {
  // Sample array of recent products
  const recentProducts = [
    {
      id: 1,
      image: '/pro1.jpg',
      name: 'Recent Product 1',
      description: 'This is a short description of recent product 1.',
      price: 29.99,
      rating: 4.0,
    },
    {
      id: 2,
      image: '/pro2.jpg',
      name: 'Recent Product 2',
      description: 'This is a short description of recent product 2.',
      price: 19.99,
      rating: 4.0,
    },
    {
      id: 3,
      image: '/pro3.jpg',
      name: 'Recent Product 3',
      description: 'This is a short description of recent product 3.',
      price: 39.99,
      rating: 4.0,
    },
    {
      id: 4,
      image: '/pro4.jpg',
      name: 'Recent Product 4',
      description: 'This is a short description of recent product 4.',
      price: 49.99,
      rating: 4.0,
    },
    {
      id: 5,
      image: '/pro5.jpg',
      name: 'Recent Product 5',
      description: 'This is a short description of recent product 5.',
      price: 59.99,
      rating: 4.0,
    },
    // Add more products as needed
  ];

  return (
    <div className="bg-white mt-4 rounded-md">
      <h2 className="text-2xl font-bold pt-6 pb-3 px-6">Recent Products</h2>
      <div className='flex justify-start items-center gap-1 mt-2 mb-4 px-6'>
            <div className='bg-pink-600 rounded-full w-12 h-1'></div>
            <div className='bg-pink-600 rounded-full w-1 h-1'></div>
            <div className='bg-pink-600 rounded-full w-1 h-1'></div>
            <div className='bg-pink-600 rounded-full w-1 h-1'></div>
            <div className='bg-pink-600 rounded-full w-1 h-1'></div>
        </div>
      <div className="grid grid-cols-1 gap-x-6">
        {recentProducts.map((product) => (
          <div key={product.id} className="flex justify-center items-center gap-4 border-b">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-20 h-20 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <div className="flex justify-start gap-1 mt-2">
                <FaStar className='text-yellow-400 text-sm'/>
                <FaStar className='text-yellow-400 text-sm'/>
                <FaStar className='text-yellow-400 text-sm'/>
                <FaStar className='text-yellow-400 text-sm'/>
                <FaStar className='text-yellow-400 text-sm'/>
              </div>
              <p className="text-md font-bold mt-2">${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProducts;
