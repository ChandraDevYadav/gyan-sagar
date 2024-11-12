import React from 'react';
import { BiMoviePlay } from 'react-icons/bi';
import { FaExternalLinkAlt, FaSignal, FaStar } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa6';
import { IoStar } from 'react-icons/io5';

const FeaturedCourses = () => {
    // Define an array of featured courses
    const featuredCourses = [
        {
            id: 1,
            image: "/fp1.jpg",
            profileImage: "/pr1.jpg",
            title: "AI & Machine Learning",
            stars: 4.5,
            totalReviews: 128,
            lessons: 10,
            instructorName: "Dr. Alice Johnson",
            courseName: "Machine Learning Basics",
            class: "Offline",
            discount: "30",
            courseCode: "MLB101",
            bgColor: "bg-cyan-600"
        },
        {
            id: 2,
            image: "/fp2.jpg",
            profileImage: "/pr2.jpg",
            title: "Web Development Bootcamp",
            stars: 4.8,
            totalReviews: 305,
            lessons: 25,
            instructorName: "Mr. John Doe",
            courseName: "Full Stack Development",
            class: "Online",
            discount: "25",
            courseCode: "WDB202",
            bgColor: "bg-purple-600"
        },
        {
            id: 3,
            image: "/fp3.jpg",
            profileImage: "/pr3.jpg",
            title: "Digital Marketing Essentials",
            stars: 4.2,
            totalReviews: 89,
            lessons: 15,
            instructorName: "Ms. Emily Clark",
            courseName: "Digital Marketing",
            class: "Offline",
            discount: "30",
            courseCode: "DME303",
            bgColor: "bg-orange-600"
        },
        {
            id: 4,
            image: "/fp4.jpg",
            profileImage: "/pr4.jpg",
            title: "Data Science and Analytics",
            stars: 4.7,
            totalReviews: 215,
            lessons: 18,
            instructorName: "Dr. Sarah Thompson",
            courseName: "Data Science 101",
            class: "Offline",
            discount: "35",
            courseCode: "DSA404",
            bgColor: "bg-green-600"
        },
        {
            id: 5,
            image: "/fp5.jpg",
            profileImage: "/pr5.jpg",
            title: "Cloud Computing Mastery",
            stars: 4.6,
            totalReviews: 189,
            lessons: 12,
            instructorName: "Ms. Karen Lee",
            courseName: "Cloud Computing Basics",
            class: "Online",
            discount: "30",
            courseCode: "CCB505",
            bgColor: "bg-blue-600"
        },
        {
            id: 6,
            image: "/fp6.jpg",
            profileImage: "/pr6.jpg",
            title: "Graphic Design Mastery",
            stars: 4.9,
            totalReviews: 330,
            lessons: 20,
            instructorName: "Mr. Mike Williams",
            courseName: "Graphic Design Essentials",
            class: "Offline",
            discount: "20",
            courseCode: "GDE606",
            bgColor: "bg-pink-600"
        }
    ];



    return (
        <div className="px-4 md:px-32 py-12 bg-gray-100">
            <h2 className="text-center text-xl text-primary mb-4">Featured Courses</h2>
            <p className='text-4xl text-center font-bold mb-10'>Pick A Course To Get Started</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featuredCourses.map((course) => (
                    <div key={course.id} className="bg-white rounded-lg shadow-lg p-6">
                        <div className='relative'>
                            <div className="overflow-hidden rounded-md mb-4">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-150"
                                />
                            </div>

                            <div className={`${course.bgColor} absolute px-3 py-3 rounded-full text-white top-[88%] right-4`}>
                                <h3 className="text-lg font-bold text-white'">${course.discount}</h3>
                            </div>
                        </div>
                        <div className='flex justify-start items-center gap-3 mt-6'>
                            <div className={`${course.bgColor} flex justify-start items-center rounded`}>
                                <div className='w-[6px] h-[6px] opacity-60 bg-white rounded-full ml-2'></div>
                                <p className='text-white px-2 py-1 font-medium text-sm'>{course.courseCode}</p>
                            </div>
                            <div className="flex items-center">
                                <div className="flex gap-[2px] text-yellow-400">
                                    {Array.from({ length: 5 }, (_, i) => (
                                        <IoStar  key={i} className={i < Math.round(course.stars) ? 'text-yellow-400' : 'text-gray-300'} />
                                    ))}
                                </div>
                                <span className="ml-4 text-gray-600">{course.totalReviews} reviews</span>
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-2 py-4 hover:text-primary">{course.title}</h3>
                        <div className='flex justify-between items-center border-b border-gray-300 pb-4'>
                            <div className="flex items-center gap-2">
                                <BiMoviePlay className='text-primary' />
                                <p className="text-gray-500">{course.lessons} X Lesson</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaSignal className='text-primary' />
                                <p className="text-gray-500">{course.class} Class</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center pt-4'>
                            <div className="flex items-center">
                                <img
                                    src={course.profileImage}
                                    alt={course.instructorName}
                                    className="w-10 h-10 rounded-full mr-2"
                                />
                                <p className="text-black font-medium hover:text-primary">By {course.instructorName}</p>
                            </div>
                            <div className="group">
                                <button className="text-black font-semibold px-4 py-2 rounded-md flex items-center gap-2 transition duration-200 group-hover:text-primary">
                                    Read More
                                    <FaExternalLinkAlt className="text-primary text-sm transition duration-200 group-hover:text-primary" />
                                </button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );

};

export default FeaturedCourses;
