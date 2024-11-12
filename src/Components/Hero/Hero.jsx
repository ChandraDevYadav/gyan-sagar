import React from 'react'
import RotatingCircles from '../RotatingCircles'

const Hero = () => {
  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-4 md:mt-16">
            <div className='flex justify-center items-center'>
                <div className='pl-4 md:pl-32'>
                <h1 className='text-xl font-medium text-primary'>Online Education</h1>
                <p className='text-4xl md:text-6xl font-bold mt-3'>Learn The <br /> Skills You Need <br /> To Succeed</p>
                <p className='text-xl text-gray-600 mt-4'>Free online courses from the world’s Leading experts. join 18+ million Learners today.</p>
                <div className='mt-6'>
                    <input type="text" placeholder='Keywords of your course' className='px-2 py-4 w-2/4' />
                    <button className='px-6 py-4 bg-primary text-white'>Search Course</button>
                </div>
                <div className='flex flex-col md:flex-row justify-start items-center gap-4 mt-6'>
                    <p className='text-lg text-gray-600'>Most Popular :</p>
                    <p className='underline'>Web Dev</p>
                    <p className='underline'>Frontend Dev</p>
                    <p className='underline'>Background Dev</p>
                    <p className='underline'>App Dev</p>
                </div>
                </div>
            </div>
            <div className='mt-12 md:mt-0'>
                <RotatingCircles/>
            </div>
        </div>
    </div>
  )
}

export default Hero