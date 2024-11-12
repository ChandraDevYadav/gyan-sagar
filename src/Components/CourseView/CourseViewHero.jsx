import React from 'react'
import { Link } from 'react-router-dom'

const CourseViewHero = () => {
  return (
    <div className="relative h-96 flex flex-col items-center justify-center bg-cover bg-right" 
         style={{ backgroundImage: "url('/bg.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-25"></div> {/* Dark overlay */}
      <h1 className="relative text-white text-2xl md:text-4xl font-bold z-10">
      Archives: Courses
      </h1>
      <div className='flex justify-center items-center text-md mt-4'>
          <Link to='/' className='text-gray-700 font-medium'>Home &nbsp;/</Link>
          <p className='text-gray-700 font-medium'>&nbsp; Course Page</p>
        </div>
    </div>
  )
}

export default CourseViewHero