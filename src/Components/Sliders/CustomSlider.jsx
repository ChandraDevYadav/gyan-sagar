import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // Adjust to 3 slides on screens smaller than 768px
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480, // Adjust to 2 slides on screens smaller than 480px
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-2xl md:max-w-7xl mx-auto py-6 mt-20">
      <Slider {...settings}>
        <div>
          <div className="h-32 flex items-center justify-center text-white text-2xl font-bold">
            <img src="/lo1.png" alt="" className='w-16 md:w-28 h-10 md:h-16'/>
          </div>
        </div>
        <div>
          <div className="h-32 flex items-center justify-center text-white text-2xl font-bold">
            <img src="/lo2.png" alt="" className='w-16 md:w-28 h-10 md:h-16'/>
          </div>
        </div>
        <div>
          <div className="h-32 flex items-center justify-center text-white text-2xl font-bold">
            <img src="/lo3.png" alt="" className='w-16 md:w-28 h-10 md:h-16'/>
          </div>
        </div>
        <div>
          <div className="h-32 flex items-center justify-center text-white text-2xl font-bold">
            <img src="/lo4.png" alt="" className='w-16 md:w-28 h-10 md:h-16'/>
          </div>
        </div>
        <div>
          <div className="h-32 flex items-center justify-center text-white text-2xl font-bold">
            <img src="/lo5.png" alt="" className='w-16 md:w-28 h-10 md:h-16'/>
          </div>
        </div>
        <div>
          <div className="h-32 flex items-center justify-center text-white text-2xl font-bold">
            <img src="/lo6.png" alt="" className='w-16 md:w-28 h-10 md:h-16'/>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CustomSlider;
