import React from 'react'

const SearchFooter = () => {
  return (
    <div>
      <div className='grid grid-cols-2'>
        <div>
          <h1>Want Us To Email You About Special Offers And Updates?</h1>
        </div>
        <div>
          <div className='relative w-full'>
            <input type="text" placeholder='Search Here' className='px-2 py-4' />
            <button className='bg-green-600 text-white px-6 py-3 absolute top-0'>Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchFooter