// Blog.jsx
import React, { useState } from 'react';
import { FaExternalLinkAlt, FaRegComment, FaUser } from 'react-icons/fa';
import { LuCalendarDays } from 'react-icons/lu';
import { MdOutlineMessage } from 'react-icons/md';

const Blog = () => {
  // Blog data array
  const blogData = [
    { id: 1, image: '/blog3.jpg', title: 'Understanding React Hooks', name: 'John Doe', date: 'October 10, 2024', description: 'React hooks provide a way to use state and other features in functional components...' },
    { id: 2, image: '/blog2.jpg', title: 'Mastering JavaScript ES6', name: 'Jane Smith', date: 'September 5, 2024', description: 'ES6 brings many new features to JavaScript, making coding more efficient...' },
    { id: 3, image: '/blog1.jpg', title: 'CSS Tricks for Better Design', name: 'Alice Johnson', date: 'August 20, 2024', description: 'Learn some cool CSS tricks that can enhance the design of your web applications...' },
    { id: 4, image: '/blog4.jpg', title: 'Understanding Node.js Event Loop', name: 'Mike Davis', date: 'July 15, 2024', description: 'Node.js is known for its event-driven architecture, which allows handling multiple requests simultaneously...' },
    { id: 5, image: '/blog5.jpg', title: 'Getting Started with TypeScript', name: 'Emily Clark', date: 'June 1, 2024', description: 'TypeScript adds static types to JavaScript, providing better tooling and error detection during development...' },
    { id: 6, image: '/blog6.jpg', title: 'Building a REST API with Express.js', name: 'James Wilson', date: 'May 22, 2024', description: 'Express.js makes it simple to build robust REST APIs quickly and efficiently using Node.js...' },
    { id: 7, image: '/blog3.jpg', title: 'Async Programming in JavaScript', name: 'Chris Lee', date: 'April 18, 2024', description: 'Learn how to handle asynchronous operations in JavaScript using async/await and promises...' },
    { id: 8, image: '/blog4.jpg', title: 'A Guide to Responsive Web Design', name: 'Sarah Adams', date: 'March 9, 2024', description: 'Responsive web design is essential to ensure that your site works well across devices, from desktops to mobiles...' },
    { id: 9, image: '/blog5.jpg', title: 'Introduction to MongoDB', name: 'John Roberts', date: 'February 28, 2024', description: 'MongoDB is a NoSQL database that provides high flexibility and scalability for storing data in JSON-like format...' },
    { id: 10, image: '/blog6.jpg', title: 'JavaScript ES6 Features You Should Know', name: 'Megan Brown', date: 'January 20, 2024', description: 'ES6 brought many exciting features to JavaScript, like arrow functions, destructuring, and template literals...' },
    { id: 11, image: '/blog1.jpg', title: 'Building a Chat Application with WebSocket', name: 'David King', date: 'December 15, 2023', description: 'WebSockets enable full-duplex communication between client and server, ideal for building real-time applications like chat apps...' },
    { id: 12, image: '/blog2.jpg', title: 'CSS Grid Layout: A Comprehensive Guide', name: 'Rachel Green', date: 'November 5, 2023', description: 'CSS Grid is a powerful tool that allows developers to create complex layouts with ease. Learn how to use it effectively in your web projects...' },
    { id: 13, image: '/blog3.jpg', title: 'React Router for Dynamic Web Applications', name: 'Mark Taylor', date: 'October 25, 2023', description: 'React Router helps you build single-page applications by enabling navigation between different components without full page reloads...' },
    { id: 14, image: '/blog4.jpg', title: 'Building a To-Do List App with React', name: 'Laura White', date: 'September 15, 2023', description: 'Learn how to build a simple to-do list app with React, including adding, deleting, and editing tasks...' },
    { id: 15, image: '/blog5.jpg', title: 'Intro to Cloud Computing with AWS', name: 'Steven Scott', date: 'August 1, 2023', description: 'AWS (Amazon Web Services) offers a range of cloud computing services that can help you scale your applications and store data in the cloud...' },
    { id: 16, image: '/blog6.jpg', title: 'Building Single Page Applications with Angular', name: 'Sophia Clark', date: 'July 25, 2023', description: 'Angular is a powerful framework for building single-page applications with dynamic content and routing capabilities...' },
    { id: 17, image: '/blog1.jpg', title: 'Version Control with Git and GitHub', name: 'Oscar Fisher', date: 'June 5, 2023', description: 'Learn the fundamentals of version control with Git and GitHub, tools that help you manage your code and collaborate with others...' },
    { id: 18, image: '/blog2.jpg', title: 'Building Mobile Apps with React Native', name: 'Kaitlyn Hill', date: 'May 17, 2023', description: 'React Native allows you to build cross-platform mobile apps using JavaScript and React. Learn how to get started with React Native...' },
    { id: 19, image: '/blog3.jpg', title: 'Understanding API Authentication with JWT', name: 'Liam Evans', date: 'April 3, 2023', description: 'JSON Web Tokens (JWT) are used for secure authentication in web applications. Learn how JWT works and how to implement it in your APIs...' },
    { id: 20, image: '/blog4.jpg', title: 'Introduction to Docker for Developers', name: 'Sophia Harris', date: 'March 19, 2023', description: 'Docker is a tool for containerizing applications and their dependencies. Learn how to use Docker to make development and deployment more efficient...' },
    { id: 21, image: '/blog5.jpg', title: 'Getting Started with Firebase', name: 'Oliver Moore', date: 'February 25, 2023', description: 'Firebase is a platform that helps developers build mobile and web applications quickly, with features like real-time databases and authentication...' },
    { id: 22, image: '/blog6.jpg', title: 'Introduction to Webpack for Frontend Developers', name: 'Isabella Carter', date: 'January 10, 2023', description: 'Webpack is a powerful module bundler that allows you to bundle JavaScript, CSS, and other assets for efficient web development...' },
    { id: 23, image: '/blog1.jpg', title: 'Understanding React Hooks', name: 'John Doe', date: 'October 10, 2024', description: 'React hooks provide a way to use state and other features in functional components...' },
    { id: 24, image: '/blog2.jpg', title: 'Mastering JavaScript ES6', name: 'Jane Smith', date: 'September 5, 2024', description: 'ES6 brings many new features to JavaScript, making coding more efficient...' },
    { id: 25, image: '/blog3.jpg', title: 'CSS Tricks for Better Design', name: 'Alice Johnson', date: 'August 20, 2024', description: 'Learn some cool CSS tricks that can enhance the design of your web applications...' },
    { id: 26, image: '/blog4.jpg', title: 'Understanding Node.js Event Loop', name: 'Mike Davis', date: 'July 15, 2024', description: 'Node.js is known for its event-driven architecture, which allows handling multiple requests simultaneously...' },
    { id: 27, image: '/blog5.jpg', title: 'Getting Started with TypeScript', name: 'Emily Clark', date: 'June 1, 2024', description: 'TypeScript adds static types to JavaScript, providing better tooling and error detection during development...' },
    { id: 28, image: '/blog6.jpg', title: 'Building a REST API with Express.js', name: 'James Wilson', date: 'May 22, 2024', description: 'Express.js makes it simple to build robust REST APIs quickly and efficiently using Node.js...' },
    // Add more blog entries here as needed
  ];

  // Pagination configuration
  const blogsPerPage = 6; // Number of blogs to show per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(blogData.length / blogsPerPage);

  // Slice the blogData based on the current page
  const currentBlogs = blogData.slice((currentPage - 1) * blogsPerPage, currentPage * blogsPerPage);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="px-4 md:px-32 py-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentBlogs.map((blog) => (
          <div key={blog.id} className="bg-white shadow-md rounded overflow-hidden p-3">
            <div className="overflow-hidden rounded-md mb-4">
              <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-150" />
            </div>
            <div className="py-4 px-2">
              <h2 className="text-2xl font-semibold mb-2 hover:text-primary">{blog.title}</h2>
              <div className="flex justify-start items-center gap-6">
                <p className="text-gray-500 text-md flex justify-start items-center gap-2">
                  <FaUser className="text-orange-600" /> {blog.name}
                </p>
                <p className="flex justify-start text-gray-500 text-md items-center gap-2">
                  <LuCalendarDays className="text-orange-600" /> {blog.date}
                </p>
              </div>
              <p className="text-gray-700 text-lg my-4">
                {blog.description.slice(0, 60)}... {/* Show preview of 60 characters */}
              </p>
              <div className="flex items-center justify-between">
                <button className="text-black font-semibold hover:text-primary flex justify-start items-center gap-2">
                  Read More <FaExternalLinkAlt />
                </button>
                <div className="relative">
                  <MdOutlineMessage className="text-gray-500 hover:text-gray-700 text-3xl" />
                  <div className="absolute top-0 right-0 bg-primary px-1 rounded-full">
                    <p className="text-xs font-medium text-white">5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {/* <div className="flex justify-center items-center mt-8">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-orange-600 text-lg rounded-md mx-2 text-white hover:bg-orange-600 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2 text-lg flex justify-start items-center gap-4">
          <p className='text-white bg-orange-700 rounded-full py-2 px-4'>{currentPage} </p><p className='text-white bg-orange-600 rounded-full py-2 px-4'>{totalPages}</p>
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-orange-600 text-lg rounded-md mx-2 text-white hover:bg-orange-600 disabled:opacity-50"
        >
          Next
        </button>
      </div> */}
    </div>
  );
};

export default Blog;
