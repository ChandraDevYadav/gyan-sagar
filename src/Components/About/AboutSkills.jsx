import React from 'react'

const AboutSkills = () => {
  return (
    <div className='relative'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='bg-green-400 h-[30rem]'></div>
            <div className='bg-black h-[30rem]'></div>
        </div>
        <div className='flex flex-col md:flex-row justify-start items-center gap-6 absolute top-10 md:top-28 left-4 md:left-44'>
            <div className=''>
                <p className='text-4xl font-bold text-white text-start leading-relaxed'>Build Your Project <br className='hidden md:block'/> Management Skills Online <br className='hidden md:block'/> Anytime</p>
                <button className='text-green-600 bg-white px-6 py-2 mt-6 rounded font-semibold'>Sign Up Now</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='flex justify-start items-center gap-2 bg-white pl-4 pr-16 rounded py-5'>
                    <img src="/icon1.jpg" alt="" className='w-16 h-16 rounded-full' />
                    <div>
                        <p className='text-xl font-bold'>Skilled Instructors</p>
                        <p className='text-lg mt-1'>You pick the schedule.</p>
                    </div>
                </div>
                <div className='flex justify-start items-center gap-2 bg-white pl-4 pr-16 rounded py-5'>
                    <img src="/icon2.jpg" alt="" className='w-16 h-16 rounded-full' />
                    <div>
                        <p className='text-xl font-bold'>Get Certificate</p>
                        <p className='text-lg mt-1'>You pick the schedule.</p>
                    </div>
                </div>
                <div className='flex justify-start items-center gap-2 bg-white pl-4 pr-16 rounded py-5'>
                    <img src="/icon3.jpg" alt="" className='w-16 h-16 rounded-full' />
                    <div>
                        <p className='text-xl font-bold'>Online Classes</p>
                        <p className='text-lg mt-1'>You pick the schedule.</p>
                    </div>
                </div>
                <div className='flex justify-start items-center gap-2 bg-white pl-4 pr-16 rounded py-5'>
                    <img src="/icon4.jpg" alt="" className='w-16 h-16 rounded-full' />
                    <div>
                        <p className='text-xl font-bold'>Educator Helps</p>
                        <p className='text-lg mt-1'>You pick the schedule.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutSkills