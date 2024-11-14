import React from 'react';

const InstructorCate = () => {
  const categories = [
    {
      id: 1,
      title: "Build Your Brand",
      description: "Like graphic design, business analytics coding, and much more",
      image: "/inc1.jpg",
    },
    {
      id: 2,
      title: "Plan Your Course",
      description: "Like graphic design, business analytics coding, and much more",
      image: "/inc2.jpg",
    },
    {
      id: 3,
      title: "Help Shape Future",
      description: "Like graphic design, business analytics coding, and much more",
      image: "/inc3.jpg",
    },
    // Add more categories if needed
  ];

  return (
    <div className='px-4 md:px-28 py-20'>
      <div className=''>
        <h1 className='text-2xl text-primary text-center'>Teach on edulon</h1>
        <p className='text-4xl font-bold text-center mt-2'>Discover Your Potential. Make A <br /> Global Impact.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-12'>
        {categories.map((category) => (
          <div
            key={category.id}
            className='bg-white px-12 pb-12 pt-10 rounded shadow-sm transition-transform transform hover:-translate-y-2'
          >
            <div className='flex flex-col justify-center items-center'>
              <img src={category.image} className='w-20 h-20 rounded-full' alt={category.title} />
              <h1 className='text-2xl font-bold mt-4 hover:text-primary'>{category.title}</h1>
              <p className='text-lg text-gray-600 text-center mt-2'>{category.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center items-center mt-12'>
        <button className='px-6 py-2 bg-primary rounded font-bold text-white'>Browse All Categories</button>
      </div>
    </div>
  );
}

export default InstructorCate;
