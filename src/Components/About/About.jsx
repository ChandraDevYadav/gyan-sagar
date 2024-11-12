import React from 'react'

const About = () => {
    return (
        <div className='bg-white px-4 md:px-32'>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center py-24 gap-4">
                <div>
                    <div className=''>
                        <img src="/about.png" className='w-full h-full' alt="" />
                    </div>
                </div>
                <div>
                    <h1 className='text-primary text-xl mt-4'>About Our Edukon</h1>
                    <p className='text-4xl font-bold mt-4'>Good Qualification Services And Better Skills</p>
                    <p className='text-lg text-gray-600 mt-6'>Distinctively provide acces mutfuncto users whereas transparent proceses somes ncentivize eficient functionalities rather than extensible archtectur communicate leveraged services and cross-platform.</p>
                    <div className='flex justify-start items-center gap-4 mt-10'>
                        <img src="/icon1.jpg" alt="" className='w-16 h-16 object-fill' />
                        <div>
                        <p className='font-semibold text-xl'>Skilled Instructors</p>
                        <p className='pr-4 md:pr-24 text-lg text-gray-600 mt-3'>Distinctively provide acces mutfuncto users whereas communicate leveraged services</p>
                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-4 mt-6'>
                        <img src="/icon2.jpg" alt="" className='w-16 h-16 object-fill' />
                        <div>
                        <p className='font-semibold text-xl'>Get Certificate</p>
                        <p className='pr-4 md:pr-24 text-lg text-gray-600 mt-3'>Distinctively provide acces mutfuncto users whereas communicate leveraged services</p>
                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-4 mt-6'>
                        <img src="/icon3.jpg" alt="" className='w-16 h-16 object-fill' />
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

export default About