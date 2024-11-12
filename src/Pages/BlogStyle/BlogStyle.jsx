import React from 'react'
import BlogStyleRight from '../../Components/BlogStyle/BlogStyleRight'
import BlogStyleLeft from '../../Components/BlogStyle/BlogStyleLeft'

const BlogStyle = () => {
  return (
    <div className='px-4 md:px-32 py-24'>
        <div className="grid grid-cols-1 md:grid-cols-9 gap-6">
            <div className='col-span-6'>
                <BlogStyleLeft/>
            </div>
            <div className='col-span-3'>
                <BlogStyleRight/>
            </div>
        </div>
    </div>
  )
}

export default BlogStyle