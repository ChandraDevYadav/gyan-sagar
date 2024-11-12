import React from 'react'
import { FaAngleDoubleRight, FaSearch } from 'react-icons/fa'

const BlogDetailRight = () => {
    return (
        <div>
            <div className='flex justify-start items-center relative p-6 bg-white'>
                <input type="text" placeholder='Search...' className='w-full px-4 py-3 border border-gray-200 bg-gray-200' />
                <FaSearch className='text-xl absolute right-10' />
            </div>
            <div className='bg-white mt-4'>
                <p className='text-xl font-semibold border-b border-gray-300 pb-6 px-6 pt-6'>Post Category</p>
                <div className='flex justify-between items-center mt-5 border-b border-gray-300 pb-4 px-6'>
                    <p className='flex justify-start items-center gap-1 text-gray-600'><FaAngleDoubleRight className='text-sm' /> Themeforest</p>
                    <p className='text-gray-600'>06</p>
                </div>
                <div className='flex justify-between items-center mt-5 border-b border-gray-300 pb-4 px-6'>
                    <p className='flex justify-start items-center gap-1 text-gray-600'><FaAngleDoubleRight className='text-sm' />Photodune</p>
                    <p className='text-gray-600'>11</p>
                </div>
                <div className='flex justify-between items-center mt-5 border-b border-gray-300 pb-4 px-6'>
                    <p className='flex justify-start items-center gap-1 text-gray-600'><FaAngleDoubleRight className='text-sm' />Codecanyon</p>
                    <p className='text-gray-600'>07</p>
                </div>
                <div className='flex justify-between items-center mt-5 border-b border-gray-300 pb-4 px-6'>
                    <p className='flex justify-start items-center gap-1 text-gray-600'><FaAngleDoubleRight className='text-sm' />GRaphicdriver</p>
                    <p className='text-gray-600'>09</p>
                </div>
                <div className='flex justify-between items-center mt-5 border-b border-gray-300 pb-4 px-6'>
                    <p className='flex justify-start items-center gap-1 text-gray-600'><FaAngleDoubleRight className='text-sm' />Wordpress</p>
                    <p className='text-gray-600'>50</p>
                </div>
                <div className='flex justify-between items-center mt-5 border-b border-gray-300 pb-4 px-6'>
                    <p className='flex justify-start items-center gap-1 text-gray-600'><FaAngleDoubleRight className='text-sm' />Joomla</p>
                    <p className='text-gray-600'>20</p>
                </div>
                <div className='flex justify-between items-center mt-5 pb-6 px-6'>
                    <p className='flex justify-start items-center gap-1 text-gray-600'><FaAngleDoubleRight className='text-sm' />3docean</p>
                    <p className='text-gray-600'>93</p>
                </div>
            </div>
            <div className='bg-white mt-4'>
                <p className='text-xl font-semibold border-b border-gray-300 pb-6 px-6 pt-6'>Most Popular Post</p>
                <div className='flex justify-start gap-4 items-start mt-5 border-b border-gray-300 pb-4 px-6'>
                    <img src="/blog1.jpg" className='w-24 h-20' alt="" />
                    <div>
                        <p className='text-lg font-medium'>Poor People’s Campaign Our Resources</p>
                        <p className='text-lg text-gray-500'>Jun 05,2022</p>
                    </div>
                </div>
                <div className='flex justify-start gap-4 items-start mt-5 border-b border-gray-300 pb-4 px-6'>
                    <img src="/blog2.jpg" className='w-24 h-20' alt="" />
                    <div>
                        <p className='text-lg font-medium'>Poor People’s Campaign Our Resources</p>
                        <p className='text-lg text-gray-500'>Jun 05,2022</p>
                    </div>
                </div>
                <div className='flex justify-start gap-4 items-start mt-5 border-b border-gray-300 pb-4 px-6'>
                    <img src="/blog3.jpg" className='w-24 h-20' alt="" />
                    <div>
                        <p className='text-lg font-medium'>Poor People’s Campaign Our Resources</p>
                        <p className='text-lg text-gray-500'>Jun 05,2022</p>
                    </div>
                </div>
                <div className='flex justify-start gap-4 items-start mt-5 pb-4 px-6'>
                    <img src="/blog4.jpg" className='w-24 h-20' alt="" />
                    <div>
                        <p className='text-lg font-medium'>Poor People’s Campaign Our Resources</p>
                        <p className='text-lg text-gray-500'>Jun 05,2022</p>
                    </div>
                </div>
            </div>
            <div className='bg-white mt-4'>
                <p className='text-xl font-semibold border-b border-gray-300 pb-6 px-6 pt-6'>Our Archives</p>
                <div className='flex justify-between items-center mt-5 border-b border-gray-300 pb-4 px-6'>
                    <p className='flex justify-start items-center gap-1 text-gray-600'><FaAngleDoubleRight className='text-sm' /> January</p>
                    <p className='text-gray-600'>2024</p>
                </div>
                <div className='flex justify-between items-center mt-5 border-b border-gray-300 pb-4 px-6'>
                    <p className='flex justify-start items-center gap-1 text-gray-600'><FaAngleDoubleRight className='text-sm' />Febuary</p>
                    <p className='text-gray-600'>2024</p>
                </div>
                <div className='flex justify-between items-center mt-5 border-b border-gray-300 pb-4 px-6'>
                    <p className='flex justify-start items-center gap-1 text-gray-600'><FaAngleDoubleRight className='text-sm' />September</p>
                    <p className='text-gray-600'>2024</p>
                </div>
                <div className='flex justify-between items-center mt-5 border-b border-gray-300 pb-4 px-6'>
                    <p className='flex justify-start items-center gap-1 text-gray-600'><FaAngleDoubleRight className='text-sm' />October</p>
                    <p className='text-gray-600'>2024</p>
                </div>
                <div className='flex justify-between items-center mt-5 pb-6 px-6'>
                    <p className='flex justify-start items-center gap-1 text-gray-600'><FaAngleDoubleRight className='text-sm' />December</p>
                    <p className='text-gray-600'>2024</p>
                </div>
            </div>
            <div className='bg-white mt-4'>
                <p className='text-xl font-semibold border-b border-gray-300 pb-6 px-6 pt-6'>Gallery Photos</p>
                <div className='grid grid-cols-3 justify-center items-center gap-x-4 gap-y-4 mt-8 pb-6 px-6'>
                    <img src="/blog1.jpg" className='w-full h-24' alt="" />
                    <img src="/blog2.jpg" className='w-full h-24' alt="" />
                    <img src="/blog3.jpg" className='w-full h-24' alt="" />
                    <img src="/blog4.jpg" className='w-full h-24' alt="" />
                    <img src="/fp1.jpg" className='w-full h-24' alt="" />
                    <img src="/fp2.jpg" className='w-full h-24' alt="" />
                    <img src="/fp3.jpg" className='w-full h-24' alt="" />
                    <img src="/blog4.jpg" className='w-full h-24' alt="" />
                    <img src="/blog5.jpg" className='w-full h-24' alt="" />
                </div>
            </div>
            <div className='bg-white mt-4'>
                <p className='text-xl font-semibold border-b border-gray-300 pb-6 px-6 pt-6'>Our Popular Tags</p>
                <div className='grid grid-cols-3 justify-center items-center gap-x-4 gap-y-4 mt-8 pb-6 px-6'>
                    <button className='border border-gray-200 py-2'>envato</button>
                    <button className='border border-gray-200 py-2'>themeforest</button>
                    <button className='border border-gray-200 py-2'>codecanyon</button>
                    <button className='border border-gray-200 py-2'>videohive</button>
                    <button className='border border-gray-200 py-2'>audiojungle</button>
                    <button className='border border-gray-200 py-2'>3docean</button>
                    <button className='border border-gray-200 py-2'>envato</button>
                    <button className='border border-gray-200 py-2'>themeforest</button>
                    <button className='border border-gray-200 py-2'>codecanyon</button>
                </div>
            </div>
        </div>
    )
}

export default BlogDetailRight