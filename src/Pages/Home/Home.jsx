import React from 'react'
import Hero from '../../Components/Hero/Hero'
import CustomSlider from '../../Components/Sliders/CustomSlider'
import PopCategory from '../../Components/PopCategory/PopCategory'
import FeaturedCourses from '../../Components/FetCourses/FetCourses'
import About from '../../Components/About/About'
import Instructors from '../../Components/Instructor/Instructor'
import ComFeedBack from '../../Components/ComFeedBack/ComFeedBack'
import BlogPage from '../../Components/BlogPage/BlogPage'
import SuccessPage from '../../Components/SuccessPage/SuccessPage'

const Home = () => {
    return (
        <div>
            <Hero />
            <CustomSlider />
            <PopCategory />
            <FeaturedCourses />
            <About />
            <Instructors />
            <ComFeedBack />
            {/* <BlogPage /> */}
            <SuccessPage />
            {/* <SearchFooter/> */}
            
        </div>
    )
}

export default Home