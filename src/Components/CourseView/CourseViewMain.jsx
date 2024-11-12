import React from 'react'
import CourseViewLeft from './CourseViewLeft'
import CourseViewRight from './CourseViewRight'

const CourseViewMain = () => {
  return (
    <div>
        <div className="grid grid-cols-9 gap-4 px-4 md:px-24 py-4 md:py-16">
            <div className='col-span-9 md:col-span-6'>
                <CourseViewLeft/>
            </div>
            <div className='col-span-9 md:col-span-3'>
                <CourseViewRight/>
            </div>
        </div>
    </div>
  )
}

export default CourseViewMain