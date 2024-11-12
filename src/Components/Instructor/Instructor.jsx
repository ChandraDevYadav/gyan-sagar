import React from 'react';
import { FaBook, FaStar, FaUsers } from "react-icons/fa";
import { IoStar } from 'react-icons/io5';

const Instructors = () => {
    // Define an array of instructors
    const instructors = [
        {
            id: 1,
            name: "Dr. Alice Johnson",
            qualification: "Ph.D. in Machine Learning",
            ratingStars: 4.8,
            courses: 12,
            students: 1520,
            image: "/i1.jpg",
        },
        {
            id: 2,
            name: "Mr. John Doe",
            qualification: "M.Sc. in Computer Science",
            ratingStars: 4.5,
            courses: 8,
            students: 1240,
            image: "/i2.jpg",
        },
        {
            id: 3,
            name: "Ms. Emily Clark",
            qualification: "MBA in Digital Marketing",
            ratingStars: 4.7,
            courses: 15,
            students: 980,
            image: "/i4.jpg",
        },
        {
            id: 4,
            name: "Ms. Chandra Dev",
            qualification: "B.E. Computer",
            ratingStars: 4.7,
            courses: 15,
            students: 980,
            image: "/i3.jpg",
        },
    ];

    return (
        <div className="px-4 md:px-24 py-12 bg-gray-50">
            <p className='text-lg text-primary text-center uppercase'>World - class Instructors</p>
            <p className='text-4xl font-bold text-center mb-12 mt-3'>Classes Taught By Real Creators</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {instructors.map((instructor) => (
                    <div key={instructor.id} className="bg-white rounded-lg shadow-lg transform transition duration-300 hover:-translate-y-3">
                    <div className='flex justify-center items-center p-4'>
                        <img
                            src={instructor.image}
                            alt={instructor.name}
                            className="w-56 h-56 object-fill mb-4"
                        />
                    </div>
                    <h3 className="text-xl font-bold mb-1 text-center">{instructor.name}</h3>
                    <p className="text-gray-600 mb-2 text-center pt-2 uppercase">{instructor.qualification}</p>
                    <div className="flex justify-center items-center mb-2 pb-4 pt-2">
                        <div className="flex gap-1 text-yellow-400">
                            {Array.from({ length: 5 }, (_, i) => (
                                <span key={i} className={i < Math.round(instructor.ratingStars) ? 'text-yellow-400' : 'text-gray-300'}>
                                    <IoStar />
                                </span>
                            ))}
                        </div>
                        {/* <span className="ml-2 text-gray-600">({instructor.ratingStars})</span> */}
                    </div>
                    <div className='flex justify-between items-center border-t border-gray-300 p-4'>
                        <p className="text-gray-700 flex justify-start items-center gap-2"><FaBook /> {instructor.courses} Courses</p>
                        <p className="text-gray-700 flex justify-start items-center gap-2"><FaUsers /> {instructor.students} Students</p>
                    </div>
                </div>
                
                ))}
            </div>
            <p className='text-center pt-12 text-lg'>Want to help people learn, grow and achieve more in life? <span className='text-primary'>Become an instructor</span></p>
        </div>
    );
};

export default Instructors;
