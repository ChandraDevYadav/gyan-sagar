import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Accordion from './Accordion';

const ProductFilter = () => {
  const [genderFilter, setGenderFilter] = useState('');
  const [lookingForGender, setLookingForGender] = useState('');
  const [ageRange, setAgeRange] = useState({ fromAge: 18, toAge: 18 });
  const [countryFilter, setCountryFilter] = useState('');

  const handleFilter = () => {
    // Implement filter logic here
    console.log({ genderFilter, lookingForGender, ageRange, countryFilter });
  };

  return (
    <div className="">
      <div className="bg-white rounded w-full px-8 py-8">
        <p className='text-xl font-medium text-primary'>Search Product Here!</p>
        <div className='flex justify-start items-center gap-1 mt-4'>
            <div className='bg-pink-600 rounded-full w-12 h-1'></div>
            <div className='bg-pink-600 rounded-full w-1 h-1'></div>
            <div className='bg-pink-600 rounded-full w-1 h-1'></div>
            <div className='bg-pink-600 rounded-full w-1 h-1'></div>
            <div className='bg-pink-600 rounded-full w-1 h-1'></div>
        </div>
        <div className='mt-4 flex justify-start items-center relative'>
            <input type="text" placeholder='Search' className='border rounded-md py-3 px-4' />
            <div className='absolute right-0 bg-pink-600 py-4 px-4 rounded-tr-md rounded-br-md'>
            <FaSearch className='text-white text-lg'/>
            </div>
        </div>
      </div>
      <div className="bg-white rounded w-full px-8 py-8 mt-4">
        <p className='text-xl font-medium text-primary'>All Categories</p>
        <div className='flex justify-start items-center gap-1 mt-4'>
            <div className='bg-pink-600 rounded-full w-12 h-1'></div>
            <div className='bg-pink-600 rounded-full w-1 h-1'></div>
            <div className='bg-pink-600 rounded-full w-1 h-1'></div>
            <div className='bg-pink-600 rounded-full w-1 h-1'></div>
            <div className='bg-pink-600 rounded-full w-1 h-1'></div>
        </div>
        <div className='mt-4 flex justify-start items-center relative'>
            <Accordion/>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
