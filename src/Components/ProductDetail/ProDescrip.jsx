import React from 'react'
import Carousel from './Carousel'
import { FaStar } from 'react-icons/fa';
import AddToCartButton from '../Product/AddToCartButton';
// import AddToCartButton from '../Product/AddToCartButton';

const ProDescrip = () => {
  const images = [
    "/pro1.jpg",
    "/pro2.jpg",
    "/pro3.jpg",
  ];
  return (
    <div className='bg-white py-4 px-4 rounded'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div>
          <Carousel images={images} />
        </div>
        <div>
          <h1 className='text-3xl font-bold text-primary'>The Title here</h1>
          <div className='flex gap-2 justify-start items-center font-medium mt-3'>
            <div className='flex gap-1'>
              <FaStar className='text-pink-600 text-xl' />
              <FaStar className='text-pink-600 text-xl' />
              <FaStar className='text-pink-600 text-xl' />
              <FaStar className='text-pink-600 text-xl' />
              <FaStar className='text-pink-600 text-xl' />
            </div>
            <p className='text-gray-600 text-lg'>( 3 Review )</p>
          </div>
          <p className='text-3xl text-primary font-bold mt-3'>$ 340.00</p>
          <p className='text-xl text-primary font-medium mt-5'>Product Description</p>
          <p className='text-lg text-gray-600 mt-3'>Energistia an deliver atactica metrcs after avsionary Apropria trnsition enterpris an sources applications emerging psd template.</p>
          <div className='flex justify-center items-center gap-4 mt-8'>
            <div className='w-full'>
              <select name="" id="" className='px-2 py-3 w-full font-medium border border-gray-300'>
                <option value="select size">Select Size</option>
                <option value="2xl">2XL</option>
                <option value="xl">XL</option>
                <option value="lg">LG</option>
                <option value="md">MD</option>
                <option value="sm">SM</option>
                <option value="xs">XS</option>
              </select>
            </div>
            <div className='w-full'>
              <select name="" id="" className='px-2 py-3 w-full font-medium border border-gray-300'>
                <option value="select size">Select Color</option>
                <option value="2xl">Pink</option>
                <option value="xl">Green</option>
                <option value="lg">Red</option>
                <option value="md">Blue</option>
                <option value="sm">Ash</option>
                <option value="xs">White</option>
              </select>
            </div>
          </div>
          <div className='flex flex-col md:flex-row justify-start items-start md:items-center gap-4 mt-5'>
            <div>
              <AddToCartButton/>
            </div>
            <div>
              <input type="text" placeholder='Enter Discount Code' className='px-2 py-2 border border-gray-300 rounded' />
            </div>
          </div>
          <button className='px-8 font-semibold text-xl py-3 bg-pink-600 text-white rounded mt-5 hover:rounded-full hover:bg-pink-700'>Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProDescrip