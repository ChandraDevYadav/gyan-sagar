import React from 'react';
import { FaBook, FaStar, FaUsers } from "react-icons/fa";
import { IoStar } from 'react-icons/io5';

const InstructorsMain = () => {
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
        {
            id: 5,
            name: "Dr. Michael Brown",
            qualification: "Ph.D. in Data Science",
            ratingStars: 4.6,
            courses: 10,
            students: 1100,
            image: "/i1.jpg",
        },
        {
            id: 6,
            name: "Dr. Sarah Lee",
            qualification: "Ph.D. in Artificial Intelligence",
            ratingStars: 4.9,
            courses: 14,
            students: 1320,
            image: "/i2.jpg",
        },
        {
            id: 7,
            name: "Mr. Robert King",
            qualification: "M.Tech in Software Engineering",
            ratingStars: 4.4,
            courses: 9,
            students: 890,
            image: "/i3.jpg",
        },
        {
            id: 8,
            name: "Dr. Anna White",
            qualification: "Ph.D. in Cybersecurity",
            ratingStars: 4.7,
            courses: 11,
            students: 970,
            image: "/i4.jpg",
        },
        {
            id: 9,
            name: "Ms. Karen Davis",
            qualification: "M.A. in Psychology",
            ratingStars: 4.8,
            courses: 7,
            students: 1025,
            image: "/i1.jpg",
        },
        {
            id: 10,
            name: "Mr. James Wilson",
            qualification: "M.Sc. in Cloud Computing",
            ratingStars: 4.5,
            courses: 6,
            students: 810,
            image: "/i2.jpg",
        },
        {
            id: 11,
            name: "Dr. Linda Martinez",
            qualification: "Ph.D. in Network Security",
            ratingStars: 4.8,
            courses: 12,
            students: 1240,
            image: "/i3.jpg",
        },
        {
            id: 12,
            name: "Ms. Olivia Green",
            qualification: "B.Sc. in Software Development",
            ratingStars: 4.3,
            courses: 5,
            students: 760,
            image: "/i4.jpg",
        },
        {
            id: 13,
            name: "Mr. David Thompson",
            qualification: "M.Eng. in Mechanical Engineering",
            ratingStars: 4.6,
            courses: 13,
            students: 980,
            image: "/i1.jpg",
        },
        {
            id: 14,
            name: "Ms. Emma Harris",
            qualification: "M.B.A. in Business Analytics",
            ratingStars: 4.7,
            courses: 8,
            students: 910,
            image: "/i2.jpg",
        },
        {
            id: 15,
            name: "Dr. Sophia Roberts",
            qualification: "Ph.D. in Computational Biology",
            ratingStars: 4.9,
            courses: 10,
            students: 1145,
            image: "/i4.jpg",
        },
        {
            id: 16,
            name: "Mr. Christopher Young",
            qualification: "M.Sc. in Data Analytics",
            ratingStars: 4.4,
            courses: 9,
            students: 860,
            image: "/i3.jpg",
        }        
    ];

    return (
        <div className="px-4 md:px-24 py-12">
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
        </div>
    );
};

export default InstructorsMain;
