import React, { useState } from 'react';
import { IoStar } from 'react-icons/io5';
import { BiMoviePlay } from 'react-icons/bi';
import { FaSignal, FaExternalLinkAlt } from 'react-icons/fa';
import { FaFilter } from 'react-icons/fa6';

const CoursesPage = () => {
    const coursesData = [
        {
          id: 1,
          category: 'Frontend Development',
          language: 'JavaScript',
          price: 100,
          skill: 'Beginner',
          image: "/fp6.jpg",
            profileImage: "/pr6.jpg",
          title: 'JavaScript Basics for Beginners',
          stars: 4.5,
          totalReviews: 120,
          lessons: 10,
          instructorName: 'Alice Smith',
          courseName: 'JS101',
          class: 'Live',
          discount: '20%',
          courseCode: 'JSB101',
          bgColor: 'bg-green-500',
        },
        {
          id: 2,
          category: 'Backend Development',
          language: 'Python',
          price: 150,
          skill: 'Intermediate',
          image: "/fp1.jpg",
            profileImage: "/pr2.jpg",
          title: 'Python for Web Development',
          stars: 4.0,
          totalReviews: 85,
          lessons: 12,
          instructorName: 'John Doe',
          courseName: 'Python101',
          class: 'Recorded',
          discount: '15%',
          courseCode: 'PY101',
          bgColor: 'bg-blue-500',
        },
        {
          id: 3,
          category: 'Data Science',
          language: 'R',
          price: 200,
          skill: 'Advanced',
          image: "/fp2.jpg",
            profileImage: "/pr2.jpg",
          title: 'Data Science with R',
          stars: 4.8,
          totalReviews: 200,
          lessons: 15,
          instructorName: 'Sarah Lee',
          courseName: 'DSR201',
          class: 'Live',
          discount: '10%',
          courseCode: 'DS201',
          bgColor: 'bg-red-500',
        },
        {
          id: 4,
          category: 'Machine Learning',
          language: 'Python',
          price: 250,
          skill: 'Advanced',
          image: "/fp3.jpg",
            profileImage: "/pr3.jpg",
          title: 'Machine Learning A-Z',
          stars: 4.7,
          totalReviews: 180,
          lessons: 20,
          instructorName: 'Mark Johnson',
          courseName: 'ML102',
          class: 'Live',
          discount: '25%',
          courseCode: 'MLA102',
          bgColor: 'bg-purple-500',
        },
        {
          id: 5,
          category: 'Frontend Development',
          language: 'HTML & CSS',
          price: 90,
          skill: 'Beginner',
          image: "/fp4.jpg",
            profileImage: "/pr4.jpg",
          title: 'HTML & CSS from Scratch',
          stars: 4.3,
          totalReviews: 60,
          lessons: 8,
          instructorName: 'Emily Davis',
          courseName: 'HC101',
          class: 'Recorded',
          discount: '15%',
          courseCode: 'HCS101',
          bgColor: 'bg-orange-500',
        },
        {
          id: 6,
          category: 'Backend Development',
          language: 'Java',
          price: 180,
          skill: 'Intermediate',
          image: "/fp5.jpg",
            profileImage: "/pr5.jpg",
          title: 'Java for Web Applications',
          stars: 4.6,
          totalReviews: 110,
          lessons: 14,
          instructorName: 'Tom Wilson',
          courseName: 'JW102',
          class: 'Live',
          discount: '10%',
          courseCode: 'JWA102',
          bgColor: 'bg-yellow-500',
        },
        {
          id: 7,
          category: 'Data Science',
          language: 'Python',
          price: 210,
          skill: 'Intermediate',
          image: "/fp6.jpg",
            profileImage: "/pr6.jpg",
          title: 'Data Analysis with Python',
          stars: 4.4,
          totalReviews: 140,
          lessons: 18,
          instructorName: 'Lisa Brown',
          courseName: 'DAP202',
          class: 'Recorded',
          discount: '12%',
          courseCode: 'DA202',
          bgColor: 'bg-teal-500',
        },
        {
          id: 8,
          category: 'Frontend Development',
          language: 'React',
          price: 160,
          skill: 'Intermediate',
          image: "/fp5.jpg",
            profileImage: "/pr5.jpg",
          title: 'React - The Complete Guide',
          stars: 4.9,
          totalReviews: 300,
          lessons: 25,
          instructorName: 'Nancy Carter',
          courseName: 'React102',
          class: 'Live',
          discount: '20%',
          courseCode: 'R102',
          bgColor: 'bg-pink-500',
        },
        {
          id: 9,
          category: 'Machine Learning',
          language: 'Python',
          price: 300,
          skill: 'Advanced',
          image: "/fp4.jpg",
            profileImage: "/pr4.jpg",
          title: 'Deep Learning Masterclass',
          stars: 4.8,
          totalReviews: 250,
          lessons: 30,
          instructorName: 'Paul White',
          courseName: 'DL203',
          class: 'Live',
          discount: '15%',
          courseCode: 'DL203',
          bgColor: 'bg-indigo-500',
        },
        {
          id: 10,
          category: 'Frontend Development',
          language: 'Vue.js',
          price: 150,
          skill: 'Beginner',
          image: "/fp3.jpg",
            profileImage: "/pr3.jpg",
          title: 'Vue.js Basics',
          stars: 4.2,
          totalReviews: 50,
          lessons: 9,
          instructorName: 'Brian Thomas',
          courseName: 'VueB101',
          class: 'Recorded',
          discount: '10%',
          courseCode: 'VB101',
          bgColor: 'bg-blue-600',
        },
        {
          id: 11,
          category: 'Frontend Development',
          language: 'Angular',
          price: 180,
          skill: 'Intermediate',
          image: "/fp2.jpg",
            profileImage: "/pr2.jpg",
          title: 'Angular Essentials',
          stars: 4.5,
          totalReviews: 90,
          lessons: 12,
          instructorName: 'Sophia Green',
          courseName: 'Ang102',
          class: 'Live',
          discount: '18%',
          courseCode: 'AN102',
          bgColor: 'bg-red-600',
        },
        {
          id: 12,
          category: 'Backend Development',
          language: 'Node.js',
          price: 170,
          skill: 'Intermediate',
          image: "/fp1.jpg",
            profileImage: "/pr1.jpg",
          title: 'Node.js for Backend',
          stars: 4.4,
          totalReviews: 130,
          lessons: 11,
          instructorName: 'Daniel King',
          courseName: 'Node102',
          class: 'Recorded',
          discount: '12%',
          courseCode: 'ND102',
          bgColor: 'bg-green-600',
        },
        {
          id: 13,
          category: 'Data Science',
          language: 'SQL',
          price: 120,
          skill: 'Beginner',
          image: "/fp6.jpg",
            profileImage: "/pr6.jpg",
          title: 'SQL for Data Science',
          stars: 4.3,
          totalReviews: 75,
          lessons: 7,
          instructorName: 'Olivia Scott',
          courseName: 'SQL101',
          class: 'Recorded',
          discount: '25%',
          courseCode: 'SQL101',
          bgColor: 'bg-gray-500',
        },
        {
          id: 14,
          category: 'Machine Learning',
          language: 'Python',
          price: 250,
          skill: 'Advanced',
          image: "/fp1.jpg",
            profileImage: "/pr1.jpg",
          title: 'Natural Language Processing',
          stars: 4.6,
          totalReviews: 160,
          lessons: 22,
          instructorName: 'Sam Brown',
          courseName: 'NLP203',
          class: 'Live',
          discount: '15%',
          courseCode: 'NLP203',
          bgColor: 'bg-purple-600',
        },
        {
          id: 15,
          category: 'Frontend Development',
          language: 'JavaScript',
          price: 130,
          skill: 'Intermediate',
          image: "/fp2.jpg",
            profileImage: "/pr2.jpg",
          title: 'Advanced JavaScript (ES6+)',
          stars: 4.7,
          totalReviews: 110,
          lessons: 13,
          instructorName: 'Anna Bell',
          courseName: 'JS201',
          class: 'Recorded',
          discount: '20%',
          courseCode: 'JS201',
          bgColor: 'bg-yellow-600',
        },
        // Add more courses as needed to complete the total of 20
      ];
      

  const categories = ['Frontend Development', 'Backend Development', 'Data Science', 'Machine Learning'];
  const languages = ['JavaScript', 'Python', 'Java', 'C++'];
  const skills = ['Beginner', 'Intermediate', 'Advanced'];
  const [filters, setFilters] = useState({ category: '', language: '', skill: '', price: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6;

  const filteredCourses = coursesData.filter(course => {
    return (
      (filters.category ? course.category === filters.category : true) &&
      (filters.language ? course.language === filters.language : true) &&
      (filters.skill ? course.skill === filters.skill : true) &&
      (filters.price ? course.price <= filters.price : true)
    );
  });

  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * coursesPerPage,
    currentPage * coursesPerPage
  );

  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className=''>
      {/* Filter Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 bg-primary px-4 md:px-24 py-4 md:py-7">
        <div className='flex justify-start items-center gap-2 w-1/2'>
          <img src="/panel.png" alt="" className='w-5 h-5' />
          <p className='text-lg text-white'>Filters</p>
        </div>
        <select name="category" onChange={handleFilterChange} className="p-2 border w-full">
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select name="language" onChange={handleFilterChange} className="p-2 border w-full">
          <option value="">All Programming Languages</option>
          {languages.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
        <select name="skill" onChange={handleFilterChange} className="p-2 border w-full">
          <option value="">All Skill Levels</option>
          {skills.map((skill) => (
            <option key={skill} value={skill}>
              {skill}
            </option>
          ))}
        </select>
        <input
          type="number"
          name="price"
          placeholder="Max Price"
          onChange={handleFilterChange}
          className="p-2 border w-full"
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-4 md:px-24 pt-20">
        <div className='flex justify-start items-center'>
          <p className='text-lg text-gray-600'>Showing 1-6 of 10 results</p>
        </div>
        <div className='flex justify-start items-center gap-4'>
          <p className='text-lg text-gray-600'>Sort by :</p>
        <select name="skill" onChange={handleFilterChange} className="border bg-transparent text-primary">
          <option value="">All Skills</option>
          {skills.map((skill) => (
            <option key={skill} value={skill}>
              {skill}
            </option>
          ))}
        </select>
        </div>
      </div>

      {/* Courses Display */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-24 py-4 pb-4 md:pb-6 mt-4">
        {paginatedCourses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-md p-4">
            <div className='relative'>
              <div className="overflow-hidden rounded-md mb-4">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-150"
                />
              </div>
              <div className={`${course.bgColor} absolute px-3 py-5 rounded-full text-white top-[88%] right-4`}>
                <h3 className="text-lg font-bold">${course.discount}</h3>
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
                    <IoStar key={i} className={i < Math.round(course.stars) ? 'text-yellow-400' : 'text-gray-300'} />
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
              <button className="text-black font-semibold px-4 py-2 rounded-md flex items-center gap-2 transition duration-200 hover:text-primary">
                Read More
                <FaExternalLinkAlt className="text-primary text-sm transition duration-200 hover:text-primary" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 mb-24">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`mx-2 px-4 py-2 rounded-full ${currentPage === index + 1 ? 'bg-primary text-white' : 'bg-white'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
