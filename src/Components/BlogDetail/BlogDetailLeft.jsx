import React, { useState } from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight, FaExternalLinkAlt, FaUser } from 'react-icons/fa';
import { LuCalendarDays } from 'react-icons/lu';
import { MdOutlineMessage } from 'react-icons/md';
import { FaMessage } from 'react-icons/fa6';

const BlogDetailLeft = () => {
    const blogData = [
        { 
          id: 1, 
          images: ['/blog1.jpg'], // Single image
          title: 'Getting Started with React',
          name: 'John Doe',
          date: 'January 15, 2024',
          description: 'React is a powerful library for building user interfaces. It makes the process of creating dynamic web apps much easier by breaking the interface into smaller, reusable components... Start building with React and make your web apps interactive and responsive.',
        },
        { 
          id: 2, 
          images: ['/blog2.jpg', '/blog3.jpg', '/blog1.jpg'], // Carousel images
          title: 'Mastering JavaScript ES6',
          name: 'Jane Smith',
          date: 'February 10, 2024',
          description: 'JavaScript ES6 brings many new features, making coding more efficient and fun. Learn about arrow functions, template literals, classes, promises, and more... ES6 has completely transformed how we write JavaScript today.',
        },
        { 
          id: 3, 
          images: [], // Text placeholder
          title: 'Understanding CSS Grid',
          name: 'Alice Johnson',
          date: 'March 5, 2024',
          description: 'CSS Grid allows for flexible layout arrangements in web design, making it easier to create complex, responsive layouts. Dive deeper into grid-template-areas, grid-column, grid-row, and other essential CSS Grid concepts... CSS Grid has become an essential tool in modern web design.',
        },
        { 
          id: 4, 
          images: ['/blog3.jpg'],
          title: 'Introduction to Next.js',
          name: 'Michael Brown',
          date: 'April 18, 2024',
          description: 'Next.js is a React framework for building optimized web applications. With its built-in support for static site generation, server-side rendering, and API routes, Next.js makes building full-stack applications easier and faster... Mastering Next.js is an essential skill for any React developer.',
        },
        { 
          id: 5, 
          images: ['/blog4.jpg', '/blog5.jpg', '/blog6.jpg'],
          title: 'Responsive Design Techniques',
          name: 'Sarah Green',
          date: 'May 12, 2024',
          description: 'Learn how to create responsive websites that look great on all devices, from desktops to smartphones. With the use of media queries, flexible grids, and fluid images, your websites will adapt to different screen sizes seamlessly...',
        },
        { 
          id: 6, 
          images: [],
          title: 'CSS Tricks for Better Design',
          name: 'Laura White',
          date: 'June 22, 2024',
          description: 'Discover cool CSS tricks that can enhance the design of your applications. From custom animations to unique hover effects, CSS can be your best friend when it comes to creating visually appealing web apps...',
        },
        { 
          id: 7, 
          images: ['/blog5.jpg'],
          title: 'Building Accessible Websites',
          name: 'Chris Blue',
          date: 'July 15, 2024',
          description: 'Accessibility is crucial for creating inclusive web experiences. Learn how to make your websites more accessible by adding semantic HTML, keyboard navigation, and screen reader support...',
        },
        { 
          id: 8, 
          images: ['/blog4.jpg', '/blog5.jpg', '/blog6.jpg'],
          title: 'JavaScript Best Practices',
          name: 'Emma Red',
          date: 'August 10, 2024',
          description: 'Following best practices in JavaScript leads to cleaner, more maintainable code. From code organization to proper error handling, discover the tips and tricks that every developer should follow...',
        },
        { 
          id: 9, 
          images: [],
          title: 'Introduction to GraphQL',
          name: 'William Black',
          date: 'September 8, 2024',
          description: 'GraphQL offers a new way to query and manipulate data in your apps. With its flexible query language and strong typing, GraphQL helps developers create more efficient, scalable APIs...',
        },
        { 
          id: 10, 
          images: ['/blog4.jpg'],
          title: 'Understanding React Hooks',
          name: 'Sophia Lee',
          date: 'September 22, 2024',
          description: 'React Hooks have revolutionized functional components. Learn about useState, useEffect, useContext, and more... Hooks allow you to manage state and side effects in a more intuitive and reusable way.',
        },
        { 
          id: 11, 
          images: ['/blog4.jpg', '/blog5.jpg', '/blog6.jpg'],
          title: 'Server-Side Rendering vs Client-Side Rendering',
          name: 'Lucas White',
          date: 'October 5, 2024',
          description: 'What is the difference between SSR and CSR? Understand the pros and cons of both techniques and when to use them in your web apps. Server-side rendering can improve SEO and performance, while client-side rendering offers a more dynamic user experience...',
        },
        { 
          id: 12, 
          images: ['/blog1.jpg'],
          title: 'Understanding Asynchronous JavaScript',
          name: 'Ava Green',
          date: 'October 20, 2024',
          description: 'Asynchronous programming in JavaScript allows your applications to handle multiple tasks at once. Learn about callbacks, promises, async/await, and how to avoid callback hell...',
        },
        { 
          id: 13, 
          images: [],
          title: 'Building Progressive Web Apps (PWAs)',
          name: 'James Brown',
          date: 'November 3, 2024',
          description: 'Progressive Web Apps offer an app-like experience on the web. Learn how to make your web apps reliable, fast, and engaging, even on slow or unreliable networks... PWAs are the future of web development.',
        },
        { 
          id: 14, 
          images: ['/blog1.jpg', '/blog2.jpg', '/blog3.jpg'],
          title: 'Understanding the Event Loop in JavaScript',
          name: 'Lily Adams',
          date: 'November 15, 2024',
          description: 'The JavaScript event loop is the key to understanding asynchronous behavior. Learn how it works and how to handle non-blocking operations in JavaScript...',
        },
        { 
          id: 15, 
          images: ['/blog2.jpg'],
          title: 'Optimizing Web Performance',
          name: 'John Smith',
          date: 'December 1, 2024',
          description: 'Web performance is crucial for user experience. Learn how to optimize your websites by reducing load time, using lazy loading, compressing images, and more...',
        },
        { 
          id: 16, 
          images: ['/blog3.jpg'],
          title: 'Building Full-Stack Applications with MERN',
          name: 'Isla Grace',
          date: 'December 10, 2024',
          description: 'The MERN stack (MongoDB, Express, React, Node.js) is one of the most popular full-stack JavaScript solutions. Learn how to build scalable web applications with this powerful stack...',
        },
        { 
          id: 17, 
          images: ['/blog1.jpg', '/blog2.jpg', '/blog3.jpg'],
          title: 'Understanding TypeScript for JavaScript Developers',
          name: 'Ethan Hill',
          date: 'January 5, 2025',
          description: 'TypeScript adds type safety to JavaScript, helping developers avoid common errors. Learn how to get started with TypeScript and improve your code quality...',
        },
        { 
          id: 18, 
          images: [],
          title: 'Building a RESTful API with Node.js and Express',
          name: 'Mia Clark',
          date: 'January 20, 2025',
          description: 'Building RESTful APIs with Node.js and Express is an essential skill for modern web developers. Learn how to set up routes, handle requests, and structure your backend...',
        },
        { 
          id: 19, 
          images: ['/blog4.jpg'],
          title: 'CSS Variables: The Key to Reusable Styles',
          name: 'Olivia Scott',
          date: 'February 2, 2025',
          description: 'CSS Variables make it easier to manage your styles and maintain consistency across your site. Learn how to use them to create flexible and reusable CSS...',
        },
        { 
          id: 20, 
          images: ['/blog15.jpg'],
          title: 'An Introduction to Docker for Web Developers',
          name: 'Daniel King',
          date: 'February 20, 2025',
          description: 'Docker allows developers to package applications and their dependencies into containers, ensuring they run consistently across environments. Learn how to use Docker to improve your development workflow...',
        },
        { 
          id: 21, 
          images: ['/blog3.jpg', '/blog4.jpg', '/blog5.jpg'],
          title: 'The Future of Web Development with WebAssembly',
          name: 'Sophia Wilson',
          date: 'March 1, 2025',
          description: 'WebAssembly is changing the landscape of web development by allowing developers to run low-level code in the browser. Learn about the potential of WebAssembly and how to get started...',
        },
        { 
          id: 22, 
          images: ['/blog5.jpg'],
          title: 'Exploring the Vue.js Ecosystem',
          name: 'Matthew Taylor',
          date: 'March 15, 2025',
          description: 'Vue.js is a progressive framework that is gaining popularity for building modern web applications. Learn about the Vue ecosystem, including Vuex, Vue Router, and Vue CLI...',
        }
      ];
      

  const blogsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogData.length / blogsPerPage);
  const currentBlogs = blogData.slice((currentPage - 1) * blogsPerPage, currentPage * blogsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 z-10"
    >
      <FaArrowRight className="text-white text-lg" />
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 z-10"
    >
      <FaArrowLeft className="text-white text-lg" />
    </button>
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-6">
        {currentBlogs.map((blog) => (
          <div key={blog.id} className="bg-white shadow-md rounded overflow-hidden p-3">
            {blog.images.length > 1 ? (
              <Slider {...sliderSettings} className="overflow-hidden rounded-md mb-4">
                {blog.images.map((img, idx) => (
                  <div key={idx}>
                    <img src={img} alt={`Carousel ${idx}`} className="w-full h-[25rem] object-fill transition-transform duration-300 hover:scale-105" />
                  </div>
                ))}
              </Slider>
            ) : blog.images.length === 1 ? (
              <div className="overflow-hidden rounded-md mb-4">
                <img src={blog.images[0]} alt={blog.title} className="w-full h-[25rem] object-fill transition-transform duration-300 hover:scale-105" />
              </div>
            ) : (
              <div className="p-12 mb-4 bg-green-500 text-center">
                <div className='flex flex-col justify-center items-center'>
                    <img src="/quote.png" className='w-20 h-20' alt="" />
                    <p className="text-2xl font-semibold text-white mt-6">Quickly morph empowered ideas through viral systems niquely opensource metricss whereas premium human capital creater bjectively underwhelm world-class total.</p>
                </div>
              </div>
            )}

            <div className="py-4 px-2">
              <h2 className="text-2xl font-semibold mb-2 hover:text-primary">{blog.title}</h2>
              <div className="flex justify-start items-center gap-6">
                <p className="text-gray-500 text-md flex items-center gap-2">
                  <FaUser className="text-orange-600" /> {blog.name}
                </p>
                <p className="text-gray-500 text-md flex items-center gap-2">
                  <LuCalendarDays className="text-orange-600" /> {blog.date}
                </p>
              </div>
              <p className="text-gray-700 text-lg my-4">
                {blog.description}...
              </p>
              <div className="flex items-center justify-between">
                <button className="text-black font-semibold hover:text-primary flex items-center gap-2">
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
      <div className="flex justify-center items-center mt-14">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-orange-600 text-lg rounded-md mx-2 text-white hover:bg-orange-600 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2 text-lg flex items-center gap-4">
          <p className="text-white bg-orange-700 rounded-full py-2 px-4">{currentPage}</p>
          <p className="text-white bg-orange-600 rounded-full py-2 px-4">{totalPages}</p>
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-orange-600 text-lg rounded-md mx-2 text-white hover:bg-orange-600 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogDetailLeft;
