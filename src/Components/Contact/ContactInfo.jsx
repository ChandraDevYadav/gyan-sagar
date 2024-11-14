import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { FaEnvelopeOpenText } from 'react-icons/fa6'
import { PiPhoneCall } from 'react-icons/pi'
import { SlGlobe } from 'react-icons/sl'

const ContactInfo = () => {
    return (
        <div className="">
            <div className="grid grid-cols-1 gap-6">
                
                {/* Office Address */}
                <div className="relative bg-white rounded py-4 px-4 flex justify-start items-center w-full gap-2 overflow-hidden group hover:bg-transparent">
                    <span className="absolute inset-0 bg-green-600 transition-transform duration-500 ease-out transform translate-x-full group-hover:translate-x-0 group-hover:group-active:translate-x-full -z-10"></span>
                    <CiLocationOn className="text-5xl text-green-600 z-10 transition-colors duration-300 group-hover:text-white" />
                    <div className="z-10 transition-colors duration-300 group-hover:text-white">
                        <h1 className="text-lg font-bold">Office Address</h1>
                        <p className="text-gray-500 text-lg">Mahabir Chowk Hanumannagar-7</p>
                    </div>
                </div>

                {/* Phone Number */}
                <div className="relative bg-white rounded py-4 px-4 flex justify-start items-center w-full gap-2 overflow-hidden group hover:bg-transparent">
                    <span className="absolute inset-0 bg-blue-600 transition-transform duration-500 ease-out transform translate-x-full group-hover:translate-x-0 -z-10"></span>
                    <PiPhoneCall className="text-5xl text-blue-600 z-10 transition-colors duration-300 group-hover:text-white" />
                    <div className="z-10 transition-colors duration-300 group-hover:text-white">
                        <h1 className="text-lg font-bold">Phone Number</h1>
                        <p className="text-gray-700 text-lg">+977-980-591-2060, 9819937895</p>
                    </div>
                </div>

                {/* Email */}
                <div className="relative bg-white rounded py-4 px-6 flex justify-start items-center w-full gap-4 overflow-hidden group hover:bg-transparent">
                    <span className="absolute inset-0 bg-orange-600 transition-transform duration-500 ease-out transform translate-x-full group-hover:translate-x-0 -z-10"></span>
                    <FaEnvelopeOpenText className="text-4xl text-orange-600 z-10 transition-colors duration-300 group-hover:text-white" />
                    <div className="z-10 transition-colors duration-300 group-hover:text-white">
                        <h1 className="text-lg font-bold">Send Email</h1>
                        <p className="text-gray-700 text-lg">yadavchandradev4@gmail.com</p>
                    </div>
                </div>

                {/* Website */}
                <div className="relative bg-white rounded py-4 px-6 flex justify-start items-center w-full gap-4 overflow-hidden group hover:bg-transparent">
                    <span className="absolute inset-0 bg-red-600 transition-transform duration-500 ease-out transform translate-x-full group-hover:translate-x-0 -z-10"></span>
                    <SlGlobe className="text-4xl text-red-600 z-10 transition-colors duration-300 group-hover:text-white" />
                    <div className="z-10 transition-colors duration-300 group-hover:text-white">
                        <h1 className="text-lg font-bold">Our Website</h1>
                        <p className="text-gray-700 text-lg">www.edukon.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo
