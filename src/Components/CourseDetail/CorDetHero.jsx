import React from 'react'
import { FaPlay, FaStar } from 'react-icons/fa'
import { IoStar } from 'react-icons/io5'

const CorDetHero = () => {
  return (
    <div className="bg-cover bg-center w-full px-4 md:px-24 py-4 md:py-16" style={{backgroundImage: 'url("/bg.png")'}}>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className='col-span-5 md:col-span-2 flex flex-col justify-center items-start'>
                <div className=''>
                <div className='flex justify-start items-center gap-4'>
                <p className='bg-green-600 text-white px-6 py-1 rounded'>Adobe XD</p>
                <p className='bg-primary text-white px-6 rounded py-1'>30% Off</p>
                </div>
                <p className='text-4xl font-bold mt-4'>Advanced Adobe Photoshop For Everyone</p>
                <p className='text-lg text-gray-600 mt-4'>The most impressive is collection of share me online college courses</p>
                <div className='flex justify-start items-center gap-3 mt-4 text-gray-700'>
                    <img src="/pr1.jpg" alt="" className='w-10 h-10 rounded-full' />
                    <p className='text-lg font-medium'>Chan Dra Dev</p>
                    <div className='flex justify-start items-center gap-1 text-md text-primary'>
                        <IoStar/><IoStar/><IoStar/><IoStar/><IoStar/>
                    </div>
                    <p className='text-lg font-medium'>03 Reviews</p>
                </div>
                </div>
            </div>
            <div className='col-span-5 md:col-span-3'>
            <div className="relative w-full h-full bg-white p-2 rounded-lg ">
                            <img src="/cd1.jpg" alt="Thumbnail" className="w-full h-full object-cover rounded-lg" />

                            {/* Play Button with emitting effect */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative flex items-center justify-center">
                                    {/* Emitting Effect */}
                                    <span className="absolute inline-flex h-16 w-16 rounded-full bg-white opacity-90 animate-ping delay-1000 "></span>
                                    <span className="absolute inline-flex h-12 w-12 rounded-full bg-white opacity-90 animate-ping delay-1000"></span>

                                    {/* Play Button Icon */}
                                    <button className="relative z-10 flex items-center justify-center w-16 h-16 bg-white text-orange-600 rounded-full shadow-lg hover:bg-pink-600">
                                        <FaPlay className="text-2xl" />
                                    </button>
                                </div>
                            </div>
                        </div>
            </div>
        </div>
    </div>
  )
}

export default CorDetHero