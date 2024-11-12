import React from 'react'
import { FaPlay, FaStar } from 'react-icons/fa'

const ComFeedBack = () => {
  return (
    <div className="bg-cover bg-center w-full px-4 md:px-24 py-4 md:py-16" style={{backgroundImage: 'url("/bg.png")'}}>
        <p className='text-lg text-primary text-center uppercase'>Loved by 200,000+ students</p>
        <p className='text-4xl font-bold text-center mb-12 mt-3'>Student Community Feedback</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className=''>
            <div className="relative w-full h-full ">
                            <img src="/com.jpg" alt="Thumbnail" className="w-full h-full object-cover rounded-lg" />

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
            <div className='flex flex-col justify-center items-center'>
                <div className='bg-white rounded py-6'>
                <div className='flex justify-between mx-4 md:mx-10 pb-4 items-center border-b border-gray-300'>
                    <div className='flex justify-start items-center gap-4'>
                        <div>
                        <img src="/pr3.jpg" alt="" className='w-16 h-16 rounded-full' />
                        </div>
                        <div>
                        <p className='font-bold text-lg'>Chan Dra Dev</p>
                        <p className='text-md font-medium text-gray-600'>Web Developer</p>
                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-1 text-orange-600'>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>
                </div>
                <p className='mx-10 mt-4 text-lg'>Rapidiously buildcollaboration anden deas sharing viaing and bleedng edgeing nterfaces fnergstcally plagiarize teams anbuilding paradgms whereas goingi forward process and monetze</p>
                </div>
                <div className='bg-white rounded py-6 mt-4'>
                <div className='flex justify-between mx-4 md:mx-10 pb-4 items-center border-b border-gray-300'>
                    <div className='flex justify-start items-center gap-4'>
                        <div>
                        <img src="/pr4.jpg" alt="" className='w-16 h-16 rounded-full' />
                        </div>
                        <div>
                        <p className='font-bold text-lg'>Ganesh Dahal</p>
                        <p className='text-md font-medium text-gray-600'>Web Designer</p>
                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-1 text-orange-600'>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>
                </div>
                <p className='mx-10 mt-4 text-lg'>Rapidiously buildcollaboration anden deas sharing viaing and bleedng edgeing nterfaces fnergstcally plagiarize teams anbuilding paradgms whereas goingi forward process and monetze</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ComFeedBack