import React from 'react'
import CorMainLeft from './CorMainLeft'
import CorMainRight from './CorMainRight'

const CorDetMain = () => {
  return (
    <div className='px-4 md:px-24 py-4 md:py-16'>
        <div className="grid grid-cols-9 gap-2">
            <div className='col-span-9 md:col-span-6'>
                <CorMainLeft/>
            </div>
            <div className='col-span-9 md:col-span-3'>
                <CorMainRight/>
            </div>
        </div>
    </div>
  )
}

export default CorDetMain