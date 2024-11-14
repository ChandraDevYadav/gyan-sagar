import React from 'react'
import EmbeddedMap from './EmbeddedMap'
import ContactInfo from './ContactInfo'

const ContactMain = () => {
  return (
    <div className='px-4 md:px-36 py-8 md:py-24'>
        <h1 className='text-center text-xl text-primary'>Get in touch with us</h1>
        <p className='text-5xl text-black font-bold text-center mt-4'>We're Always Eager To Hear From You!</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-start mt-12">
                <div className='col-span-3 md:col-span-2'>
                    <EmbeddedMap />
                </div>
                <div className='col-span-3 md:col-span-1'>
                    <ContactInfo />
                </div>
            </div>
    </div>
  )
}

export default ContactMain