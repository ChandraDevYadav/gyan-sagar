import React from 'react'
import { Link } from 'react-router-dom'

const ProDetHero = () => {
  return (
    <div className='bg-cover bg-center relative px-4 md:px-28 py-8 md:py-52' style={{ backgroundImage: "url('/bg.jpg')" }}>
            <div className='flex justify-center items-center'>
                <div>
                    <h1 className='text-3xl md:text-6xl font-bold text-primary'>OUR SHOP SINGLE</h1>
                    <div className='flex justify-center mt-5 items-center gap-4 text-lg'>
                        <p className='text-primary font-medium pr-4 border-r-2 border-gray-300'>Product Detail</p>
                        <Link to='/' className='font-medium text-pink-600'>Home</Link>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ProDetHero