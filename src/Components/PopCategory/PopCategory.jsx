import React from 'react';

const PopCategory = () => {
    // Define an array of course categories
    const courses = [
        {
            id: 1,
            image: "/ca1.jpg",
            title: "Computer Science",
            coursesCount: "24 Courses",
        },
        {
            id: 2,
            image: "/ca2.jpg",
            title: "Civil Engineering",
            coursesCount: "04 Courses",
        },
        {
            id: 3,
            image: "/ca3.jpg",
            title: "Business Analysis",
            coursesCount: "27 Courses",
        },
        {
            id: 4,
            image: "/ca4.jpg",
            title: "Data Science Analytics",
            coursesCount: "28 Courses",
        },
        {
            id: 5,
            image: "/ca5.jpg",
            title: "Learning Management",
            coursesCount: "78 Courses",
        },
        {
            id: 6,
            image: "/ca6.jpg",
            title: "Computer Engineering",
            coursesCount: "38 Courses",
        },
    ];

    return (
        <div className="px-4 md:px-32 pb-8 bg-white">
            <h1 className="text-primary text-xl text-center pt-12">Popular Category</h1>
            <p className="text-4xl text-center font-bold">Popular Category For Learn</p>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-16">
                {courses.map((course) => (
                    <div key={course.id} className="bg-white px-8 py-6 hover:-translate-y-2 transform transition duration-300 shadow-xl rounded">
                        <div className="flex justify-center items-center">
                            <img src={course.image} alt={course.title} />
                        </div>
                        <p className="text-center text-xl font-medium mt-3">{course.title}</p>
                        <p className="text-center mt-3">{course.coursesCount}</p>
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center mt-6">
                <button className="text-white font-semibold text-md bg-primary px-6 py-2 rounded hover:shadow-2xl">Browse All Categories</button>
            </div>
        </div>
    );
};

export default PopCategory;
