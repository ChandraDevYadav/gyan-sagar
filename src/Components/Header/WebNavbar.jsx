import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const WebNavbar = () => {
  return (
    <div className='hidden md:block sticky top-0 bg-[#ffd3ff] z-50 py-2'>
      <div className='flex justify-around items-center'>
        <div>
          <img src="/logo2.png" alt="" className='w-16 h-16' />
        </div>
        <div className='flex justify-center items-center gap-10'>
          <ul className='list-none flex justify-center items-center gap-10 font-medium'>
            <Link to=''>Home</Link>
            <div class="relative group inline-block">
              <p class="text-black font-semibold text-md py-2 px-4 rounded flex justify-start gap-2 items-center">
                Courses <FaPlus className='text-xs'/>
              </p>

              <ul class="absolute hidden group-hover:block font-medium bg-pink-200 text-black w-52 py-6 px-4 rounded-b-lg z-10">
                <li className="">
                  <Link
                    class="rounded-t hover:bg-pink-400 hover:text-pink-700 py-2 px-4 block whitespace-no-wrap"
                    to="/courses"
                  >
                    Course
                  </Link>
                </li>
                <li>
                  <Link
                    class=" hover:bg-pink-400 hover:text-pink-700 py-2 px-4 block whitespace-no-wrap"
                    to="/coursesdetail"
                  >
                    Course Details
                  </Link>
                </li>
                <li>
                  <Link
                    class=" hover:bg-pink-400 hover:text-pink-700 py-2 px-4 block whitespace-no-wrap"
                    to="/courseview"
                  >
                    Course View
                  </Link>
                </li>
              </ul>
            </div>
            <div class="relative group inline-block">
              <p class="text-black font-semibold text-md py-2 px-4 rounded flex justify-start gap-2 items-center">
                Blog <FaPlus className='text-xs'/>
              </p>

              <ul class="absolute hidden group-hover:block font-medium bg-pink-200 text-black w-52 py-6 px-4 rounded-b-lg z-10">
                <li className="">
                  <Link
                    class="rounded-t hover:bg-pink-400 hover:text-pink-700 py-2 px-4 block whitespace-no-wrap"
                    to="/blog"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    class=" hover:bg-pink-400 hover:text-pink-700 py-2 px-4 block whitespace-no-wrap"
                    to="/blogdetail"
                  >
                    Blog Style1
                  </Link>
                </li>
                <li>
                  <Link
                    class=" hover:bg-pink-400 hover:text-pink-700 py-2 px-4 block whitespace-no-wrap"
                    to="/blogstyle"
                  >
                    Blog Style2
                  </Link>
                </li>
              </ul>
            </div>
            <div class="relative group inline-block">
              <p class="text-black font-semibold text-md py-2 px-4 rounded flex justify-start gap-2 items-center">
                Pages <FaPlus className='text-xs'/>
              </p>

              <ul class="absolute hidden group-hover:block font-medium bg-pink-200 text-black w-52 py-6 px-4 rounded-b-lg z-10">
                <li className="">
                  <Link
                    class="rounded-t hover:bg-pink-400 hover:text-pink-700 py-2 px-4 block whitespace-no-wrap"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    class=" hover:bg-pink-400 hover:text-pink-700 py-2 px-4 block whitespace-no-wrap"
                    to="/team"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    class=" hover:bg-pink-400 hover:text-pink-700 py-2 px-4 block whitespace-no-wrap"
                    to="/instructor"
                  >
                    Instructor
                  </Link>
                </li>
                <li>
                  <Link
                    class=" hover:bg-pink-400 hover:text-pink-700 py-2 px-4 block whitespace-no-wrap"
                    to="/shop"
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    class=" hover:bg-pink-400 hover:text-pink-700 py-2 px-4 block whitespace-no-wrap"
                    to="/shopdetail"
                  >
                    Shop Details
                  </Link>
                </li>
              </ul>
            </div>
            <Link to='/contact'>Contact</Link>
          </ul>
          <ul className='list-none flex justify-center items-center font-medium'>
            <li className='bg-white text-black px-8 py-3'>Log In</li>
            <li className='bg-primary text-white px-8 py-3'>Sign Up</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default WebNavbar