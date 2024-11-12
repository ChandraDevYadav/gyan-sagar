import React from 'react'

const MainFooter = () => {
    return (
        <div className='px-4 md:px-32 bg-[#161616] pt-4 md:pt-12'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-y-0 mt-12'>
                <div className='text-center md:text-start'>
                    <h1 className='text-2xl font-bold text-white'>Site Map</h1>
                    <div className=' flex justify-center md:justify-start'>
                        <div className='bg-green-600 w-12 mt-2 h-[3px] mb-4'></div>
                    </div>
                    <p className='text-white mb-2'>Documentation</p>
                    <p className='text-white mb-2'>Feedback</p>
                    <p className='text-white mb-2'>Plugins</p>
                    <p className='text-white mb-2'>Support Forums</p>
                    <p className='text-white mb-2'>Themes</p>
                </div>
                <div className='text-center md:text-start'>
                    <h1 className='text-2xl font-bold text-white'>Useful Links</h1>
                    <div className=' flex justify-center md:justify-start'>
                        <div className='bg-green-600 w-12 mt-2 h-[3px] mb-4'></div>
                    </div>
                    <p className='text-white mb-2'>About Us</p>
                    <p className='text-white mb-2'>Help Link</p>
                    <p className='text-white mb-2'>Terms & Conditions</p>
                    <p className='text-white mb-2'>Contact Us</p>
                    <p className='text-white mb-2'>Privacy Policy</p>
                </div>
                <div className='text-center md:text-start'>
                    <h1 className='text-2xl font-bold text-white'>Social Contact</h1>
                    <div className=' flex justify-center md:justify-start'>
                        <div className='bg-green-600 w-12 mt-2 h-[3px] mb-4'></div>
                    </div>
                    <p className='text-white mb-2'>Facebook</p>
                    <p className='text-white mb-2'>Twitter</p>
                    <p className='text-white mb-2'>Instagram</p>
                    <p className='text-white mb-2'>YouTube</p>
                    <p className='text-white mb-2'>Github</p>
                </div>
                <div className='text-center md:text-start'>
                    <h1 className='text-2xl font-bold text-white'>Our Support</h1>
                    <div className=' flex justify-center md:justify-start'>
                        <div className='bg-green-600 w-12 mt-2 h-[3px] mb-4'></div>
                    </div>
                    <p className='text-white mb-2'>Help Center</p>
                    <p className='text-white mb-2'>Paid with Mollie</p>
                    <p className='text-white mb-2'>Status</p>
                    <p className='text-white mb-2'>Changelog</p>
                    <p className='text-white mb-2'>Contact Support</p>
                </div>
            </div>
            <div>
                <p className='text-center py-12 text-white'>© 2022 Edukon Designed by CodeHustler</p>
            </div>
        </div>
    )
}

export default MainFooter