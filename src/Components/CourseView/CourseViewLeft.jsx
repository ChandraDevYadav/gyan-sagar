import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterest, FaTwitter } from 'react-icons/fa'

const CourseViewLeft = () => {
  return (
    <div>
        <h1 className='text-2xl font-bold my-6'>Themeforest Standard Website Design</h1>
        <div className="vp-video mb-4">
      <video controls className="w-full shadow-md">
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
    <p className='text-xl font-bold mt-8'>Introduction</p>
    <p className='text-lg text-gray-600 mt-3'>This is an excellent course. The content seems very thorough and comprehensive. I like the way all the concepts and configurations are clearly demonstrated in GNS3. There are also a lot of troubleshooting examples and real world applications. I especially enjoyed the practical simlets.</p>
    <div className='flex justify-start items-start gap-5 mt-10'>
        <div>
            <img src="/01 (5).jpg" className='w-28 h-20 rounded-full' alt="" />
        </div>
        <div>
            <h1 className='text-lg font-semibold'>Rajib Raj</h1>
            <p className='text-md text-gray-600 mt-1'>This is an excellent course. The content seems very thorough and comprehensive. I like the way all the concepts and configurations are clearly demonstrated in GNS3.</p>
            <div className='flex justify-start items-center text-xl gap-2 mt-6'>
                <div className='bg-white p-2 rounded-full'>
                <FaFacebookF className='text-blue-600'/>
                </div>
                <div className='bg-white p-2 rounded-full'>
                <FaInstagram className='text-red-500'/>
                </div>
                <div className='bg-white p-2 rounded-full'>
                <FaLinkedinIn className='text-blue-400'/>
                </div>
                <div className='bg-white p-2 rounded-full'>
                <FaTwitter className='text-black'/>
                </div>
                <div className='bg-white p-2 rounded-full'>
                <FaPinterest className='text-orange-600'/>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default CourseViewLeft