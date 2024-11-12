import React from 'react'
import BlogDetailHero from '../../Components/BlogDetail/BlogDetailHero'
import BlogDetailLeft from '../../Components/BlogDetail/BlogDetailLeft'
import BlogDetailRight from '../../Components/BlogDetail/BlogDetailRight'

const BlogDetail = () => {
  return (
    <div>
      <BlogDetailHero/>
      <div className='px-4 md:px-32 py-24'>
      <div className="grid grid-cols-1 md:grid-cols-9 gap-6">
            <div className='col-span-6'>
                <BlogDetailLeft/>
            </div>
            <div className='col-span-3'>
                <BlogDetailRight/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDetail