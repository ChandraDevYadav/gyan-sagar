import React from 'react';

const AboutSection = () => {
  return (
    <div className="relative w-full h-64 bg-gray-100">
      {/* Triangle using a div */}
      <div className="absolute rotate-90 top-0 left-0 w-0 h-0 border-l-[554px] border-b-[353px] border-l-transparent border-b-[#26c976]"></div>

      {/* Content of the section */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h2 className="text-2xl font-bold text-gray-800">About Us</h2>
        <p className="text-gray-600 mt-2">We are a team dedicated to providing high-quality service.</p>
      </div>
    </div>
  );
};

export default AboutSection;
