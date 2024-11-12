import React from 'react';

const RotatingCircles = () => {
  return (
    <div className="flex justify-center items-center">
      {/* Outer Circle */}
      <div className="relative">
        <div className="w-[17rem] md:w-[32rem] h-[17rem] md:h-[32rem] border-4 border-dashed border-blue-500 rounded-full animate-rotate"></div>

        {/* Inner Circle */}
        <div className="absolute inset-4 w-[15rem] md:w-[30rem] h-[15rem] md:h-[30rem] border-4 border-dashed border-red-500 rounded-full animate-rotate"></div>
        <img src="/img1.png" alt="" className='w-full absolute top-0 right-6 md:right-12' />
      </div>
    </div>
  );
};

export default RotatingCircles;
