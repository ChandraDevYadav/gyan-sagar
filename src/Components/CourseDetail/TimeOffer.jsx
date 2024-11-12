import React from 'react'
import { FaGlobe, FaSignal } from 'react-icons/fa'
import { FaBook } from 'react-icons/fa6'
import { FcAlarmClock } from 'react-icons/fc'
import { GrCertificate } from 'react-icons/gr'
import { IoHourglassOutline } from 'react-icons/io5'
import { LuClock9 } from 'react-icons/lu'
import { TfiVideoClapper } from 'react-icons/tfi'

const TimeOffer = () => {
  return (
    <><div className='bg-white'>
          <div className='flex justify-between items-center bg-primary py-5 px-4 text-white'>
              <p className='text-xl font-bold'>$89</p>
              <p className='flex justify-center items-center gap-1 text-lg'><LuClock9 /> Limited time offer</p>
          </div>
          <div className='flex justify-between items-center pb-3 pt-6 px-7 text-black'>
              <p className='text-lg gap-2 flex justify-start items-center'><FcAlarmClock />Course level</p>
              <p className='text-lg'>Beginner</p>
          </div>
          <div className='flex justify-between items-center py-3 px-5 bg-gray-100 mx-2 text-black'>
              <p className='text-lg gap-2 flex justify-start items-center'><FaBook />Course Duration</p>
              <p className='text-lg'>10 week</p>
          </div>
          <div className='flex justify-between items-center py-3 px-7 text-black'>
              <p className='text-lg gap-2 flex justify-start items-center'><FaSignal />Online Class</p>
              <p className='text-lg'>Beginner</p>
          </div>
          <div className='flex justify-between items-center py-3 px-5 bg-gray-100 mx-2 text-black'>
              <p className='text-lg gap-2 flex justify-start items-center'><TfiVideoClapper />Lessions</p>
              <p className='text-lg'>08</p>
          </div>
          <div className='flex justify-between items-center py-3 px-7 text-black'>
              <p className='text-lg gap-2 flex justify-start items-center'><img src="/panel.png" className='w-4 h-4 bg-black' alt="" />Quizzes</p>
              <p className='text-lg'>05</p>
          </div>
          <div className='flex justify-between items-center py-3 px-5 bg-gray-100 mx-2 text-black'>
              <p className='text-lg gap-2 flex justify-start items-center'><IoHourglassOutline />Pass parcentages</p>
              <p className='text-lg'>03</p>
          </div>
          <div className='flex justify-between items-center py-3 px-7 text-black'>
              <p className='text-lg gap-2 flex justify-start items-center'><GrCertificate />Certificate</p>
              <p className='text-lg'>80</p>
          </div>
          <div className='flex justify-between items-center py-3 px-5 bg-gray-100 mx-2 text-black'>
              <p className='text-lg gap-2 flex justify-start items-center'><FaGlobe />Language</p>
              <p className='text-lg'>Yes</p>
          </div>
          <div className='py-3 px-7'>
              <h1 className='text-lg font-semibold'>Secure Payment:</h1>
              <div className='flex justify-start items-center py-4'>
                  <img src="/card.jpg" className='' alt="" />
              </div>
          </div>
      </div></>
  )
}

export default TimeOffer