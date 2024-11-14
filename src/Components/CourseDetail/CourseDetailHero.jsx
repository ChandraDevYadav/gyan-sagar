import React from 'react'
import { Link } from 'react-router-dom'

const ContactHero = () => {
  return (
    <div className='bg-cover bg-center relative px-4 md:px-28 py-8 md:py-52' style={{ backgroundImage: "url('/bg.jpg')" }}>
            <div className='flex justify-center items-center'>
                <div>
                    <h1 className='text-3xl md:text-6xl font-bold text-primary text-center'>Everything about the courses!</h1>
                    <div className='flex justify-center mt-5 items-center gap-4 text-lg'>
                    <Link to='/' className='font-medium text-pink-600 pr-4 border-r-2 border-gray-300'>Home</Link>
                        <p className='text-primary font-medium'>Contact</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ContactHero