// InstructorSuccess.jsx
import React from 'react';

const InstructorSuccess = () => {
  // Array for statistics data
  const statisticsData = [
    {
      id: 1,
      number: '30+',
      text: 'Years of Language Education Experience',
    },
    {
      id: 2,
      number: '3084+',
      text: 'Learners Enrolled in Edukon Courses',
    },
    {
      id: 3,
      number: '330+',
      text: 'Qualified Teachers And Language Experts',
    },
    {
      id: 4,
      number: '2300+',
      text: 'Innovative Foreign Language Courses',
    },
  ];

  // Array for featured content
  const featuredContent = [
    {
      id: 1,
      image: '/su1.png', // Replace with actual image path
      title: 'Explore Language Mastery Programs',
      description:
        'Our Language Mastery programs are designed to help you achieve fluency through immersive learning experiences.',
      buttonText: 'Become A Instructor',
      backGround: 'bg-cyan-600'
    },
    {
      id: 2,
      image: '/su2.png', // Replace with actual image path
      title: 'Join Our Community of Learners',
      description:
        'Connect with a diverse group of learners and enhance your language skills with community support.',
      buttonText: 'Register For Free',
      backGround: 'bg-orange-600'
    },
  ];

  return (
    <div className="px-4 md:px-32 py-4 md:py-20">
      <h2 className="text-center text-xl text-primary mb-4 mt-10">START TO SUCCESS</h2>
      <p className='text-4xl text-center font-bold mb-10'>Achieve Your Goals With Edukon</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {statisticsData.map((stat) => (
          <div key={stat.id} className="p-6 text-center">
            <h2 className="text-4xl font-bold text-black mb-2">{stat.number}</h2>
            <p className="text-gray-600 text-lg">{stat.text}</p>
          </div>
        ))}
      </div>

      {/* Featured Content Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {featuredContent.map((content) => (
          <div key={content.id} className="bg-white shadow-md rounded-lg overflow-hidden grid grid-cols-6 justify-start items-end pl-4 md:pl-8">
            <div className="col-span-6 md:col-span-3">
              <h3 className="text-2xl font-bold mb-2 mt-6">{content.title}</h3>
              <p className="text-gray-700 mb-4">{content.description}</p>
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-6">
                {content.buttonText}
              </button>
            </div>
            <div className='col-span-6 md:col-span-3'>
            <img src={content.image} alt={content.title} className="w-full h-48 object-fill" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorSuccess;
