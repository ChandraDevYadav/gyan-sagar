import React from 'react'

const AboutMain = () => {
    return (
        <div className=' px-4 md:px-32'>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center py-24 gap-4">
                <div>
                    <div className='relative'>
                        <img src="/about1.jpg" className='w-full md:w-[75%] h-[30rem] border-[8px] border-white' alt="" />
                        <div className='absolute bottom-0 left-0 bg-primary border-[8px] text-center py-5 px-4 border-white'>
                            <p className='text-white text-4xl font-bold'>30+</p>
                            <p className='text-white text-lg mt-2'>Years Of <br /> Experiences</p>
                        </div>
                        <div className='absolute -bottom-20 bg-white p-2 right-4'>
                            <img src="/about2.jpg" className='w-full hidden md:block h-[30%]' alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-primary text-xl mt-4'>About Our Edukon</h1>
                    <p className='text-4xl font-bold mt-4'>Good Qualification Services And Better Skills</p>
                    <p className='text-lg text-gray-600 mt-6'>Distinctively provide acces mutfuncto users whereas transparent proceses somes ncentivize eficient functionalities rather than extensible archtectur communicate leveraged services and cross-platform.</p>
                    <div className='flex justify-start items-center gap-4 mt-10'>
                        <img src="/icon1.jpg" alt="" className='w-16 h-16 object-fill rounded-full' />
                        <div>
                        <p className='font-semibold text-xl'>Skilled Instructors</p>
                        <p className='pr-4 md:pr-24 text-lg text-gray-600 mt-3'>Distinctively provide acces mutfuncto users whereas communicate leveraged services</p>
                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-4 mt-6'>
                        <img src="/icon2.jpg" alt="" className='w-16 h-16 object-fill rounded-full' />
                        <div>
                        <p className='font-semibold text-xl'>Get Certificate</p>
                        <p className='pr-4 md:pr-24 text-lg text-gray-600 mt-3'>Distinctively provide acces mutfuncto users whereas communicate leveraged services</p>
                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-4 mt-6'>
                        <img src="/icon3.jpg" alt="" className='w-16 h-16 object-fill rounded-full' />
                        <div>
                        <p className='font-semibold text-xl'>Online Classes</p>
                        <p className='pr-4 md:pr-24 text-lg text-gray-600 mt-3'>Distinctively provide acces mutfuncto users whereas communicate leveraged services</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMain