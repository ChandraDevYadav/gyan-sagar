import React from 'react'
import InstructorHero from '../../Components/Instructor/InstructorHero'
import InstructorCate from '../../Components/Instructor/InstructorCate'
import InstructorFeedBack from '../../Components/Instructor/InstructorFeedBack'
import InstructorSuccess from '../../Components/Instructor/InstructorSuccess'

const Instructor = () => {
  return (
    <div>
      <InstructorHero/>
      <InstructorCate/>
      <InstructorFeedBack/>
      <InstructorSuccess/>
    </div>
  )
}

export default Instructor