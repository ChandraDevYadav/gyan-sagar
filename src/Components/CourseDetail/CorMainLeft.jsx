import React from 'react'
import { FiCheckCircle } from 'react-icons/fi'
import Accordion from './Accordion'
import CommentSection from './CommentSection';
import LeaveComment from './LeaveComment';

const CorMainLeft = () => {
    const items = [
        {
            title: "Photoshop Basics",
            type: "list",
            lessons: 5,
            duration: "17:37",
            content: [
              { title: "1.1 Welcome to the course", duration: "02:30", link: "https://www.youtube.com/watch?v=link1" },
              { title: "1.2 How to set up your Photoshop workspace", duration: "08:33", link: "https://www.youtube.com/watch?v=link2" },
              { title: "2.1 Essential Photoshop Tools", duration: "03:38", link: "https://www.youtube.com/watch?v=link3" },
              { title: "2.2 Finding inspiration", duration: "02:30", link: "https://www.youtube.com/watch?v=link4" },
              { title: "3.1 Choosing Your Format", duration: "03:48", link: "https://www.youtube.com/watch?v=link5" }
            ]
          },
        {
          title: "Instructor Profile",
          type: "profile",
          lessons: 1,
          duration: '03:20', // You can omit or set to null if no duration is needed
          content: {
            image: "/01 (5).jpg",
            name: "John Doe",
            profession: "Digital Artist & Instructor",
            description: "John has over 15 years of experience in digital art and design.",
            social: [
              { platform: "Twitter", link: "https://twitter.com/johndoe" },
              { platform: "LinkedIn", link: "https://linkedin.com/in/johndoe" },
              { platform: "Facebook", link: "https://linkedin.com/in/johndoe" },
              { platform: "Instagram", link: "https://linkedin.com/in/johndoe" }
            ]
          }
        },
      ];
      
      
    return (
        <div>
            <div className='mr-6'>
                <p className='text-2xl font-bold'>Course Overview</p>
                <p className='text-lg text-gray-700 mt-3'>In this course take you from the fundamentals and concepts of data modeling all the way
                    through anumber of best practices and techniques that you’ll need to build data models in your organization. You’ll find many
                    By the end of the course, you’ll be all set to not only put these principles to works but also to maike the key data modeling
                    and design decisions required by the info data modeling that transcend the nuts-and-bolts that clearly the key covered the
                    course and design patterns.</p>
                <p className='text-2xl font-bold mt-3'>What You'll Learn in This Course:</p>
                <ul className='mt-3'>
                    <li className='flex justify-start items-center text-md text-gray-600 gap-2 mt-2'><FiCheckCircle className='text-primary'/> Ready to begin working on real-world data modeling projects</li>
                    <li className='flex justify-start items-center text-md text-gray-600 gap-2 mt-2'><FiCheckCircle className='text-primary'/>Expanded responsibilities as part of an existing role</li>
                    <li className='flex justify-start items-center text-md text-gray-600 gap-2 mt-2'><FiCheckCircle className='text-primary'/>Be able to create Flyers, Brochures, Advertisements</li>
                    <li className='flex justify-start items-center text-md text-gray-600 gap-2 mt-2'><FiCheckCircle className='text-primary'/>Find a new position involving data modeling.</li>
                    <li className='flex justify-start items-center text-md text-gray-600 gap-2 mt-2'><FiCheckCircle className='text-primary'/>Work with color and Gradients and Grids</li>
                </ul>
                <p className='text-lg text-gray-700 mt-3'>In this course take you from the fundamentals and concepts of data modeling all the way through anumber of best practices and techniques that you’ll need to build data models in your organization. You’ll find many examples that clearly the key covered the course</p>
                <p className='text-lg text-gray-700 mt-3'>By the end of the course, you’ll be all set to not only put these principles to works but also to maike the key data modeling and design decisions required by the info data modeling that transcend the nuts-and-bolts that clearly the key covered the course and design patterns.</p>
                <h1 className='text-2xl font-bold mt-4'>Course Content</h1>
                <div className='mt-4'>
                <Accordion items={items} />
                </div>
                <div>
                    <CommentSection/>
                </div>
                <div>
                    <LeaveComment/>
                </div>
            </div>
        </div>
    )
}

export default CorMainLeft