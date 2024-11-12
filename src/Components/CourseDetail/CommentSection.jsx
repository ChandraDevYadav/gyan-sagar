import React from 'react';
import { FaStar } from 'react-icons/fa';
import { IoStar } from 'react-icons/io5';

const comments = [
  {
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "John Doe",
    date: "Nov 10, 2024",
    time: "14:30",
    text: "Great product! I found it very useful and highly recommend it to others.",
    stars: 5
  },
  {
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Jane Smith",
    date: "Nov 9, 2024",
    time: "11:15",
    text: "Good quality but could be improved in some aspects.",
    stars: 3
  },
//   {
//     image: "https://randomuser.me/api/portraits/men/3.jpg",
//     name: "Alex Brown",
//     date: "Nov 8, 2024",
//     time: "09:45",
//     text: "Not satisfied with the product, it didn't meet my expectations.",
//     stars: 2
//   }
];

const CommentSection = () => {
  return (
    <div className="w-full mx-auto px-6 pt-6 pb-3 bg-white shadow-md">
      <h2 className="text-xl font-bold mb-6">Comments</h2>
      {comments.map((comment, index) => (
        <div key={index} className="flex items-start mb-6">
          <img
            src={comment.image}
            alt={comment.name}
            className="w-20 h-20 rounded-full mr-4"
          />
          <div className="flex-1">
            <div className="flex justify-between items-center mb-1">
              <h3 className="font-bold text-gray-800 text-xl">{comment.name}</h3>
              <div className="flex items-center gap-1 text-lg">
              {[...Array(5)].map((_, starIndex) => (
                <IoStar
                  key={starIndex}
                  className={`${
                    starIndex < comment.stars ? "text-yellow-500" : "text-gray-300"
                  } text-md`}
                />
              ))}
            </div>
            </div>
            <span className="text-sm text-gray-500">{`${comment.date} ${comment.time}`}</span>
            <p className="text-gray-700 mb-2 text-lg mt-3">{comment.text}</p>
            
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentSection;
