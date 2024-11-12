import React, { useState } from 'react';

const LeaveComment = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    comment: ''
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Comment:', formData);
    // Optionally reset form fields
    setFormData({
      name: '',
      email: '',
      subject: '',
      comment: ''
    });
  };

  return (
    <div className="w-full mx-auto p-6 mt-4 bg-white shadow-md">
      <h2 className="text-xl font-bold mb-4">Leave a Comment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className='flex justify-start items-center gap-3 w-full'>
            {/* Name Field */}
        <div className=' w-full'>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder='Your Name*'
            className="w-full p-3 focus:outline-none focus:ring focus:ring-green-500 bg-[#ecf0f3]"
            required
          />
        </div>

        {/* Email Field */}
        <div className=' w-full'>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='Your Email*'
            className="w-full p-3 focus:outline-none focus:ring focus:ring-green-500 bg-[#ecf0f3]"
            required
          />
        </div>
        </div>

        {/* Subject Field */}
        <div>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder='Your Subject*'
            className="w-full p-3 focus:outline-none focus:ring focus:ring-green-500 bg-[#ecf0f3]"
          />
        </div>

        {/* Comment Field */}
        <div>
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            rows="6"
            placeholder='Your Comment*'
            className="w-full p-3 focus:outline-none focus:ring focus:ring-green-500 bg-[#ecf0f3]"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="py-3 px-6 bg-green-500 text-white font-semibold hover:bg-green-600 transition duration-200"
        >
          Send Comment
        </button>
      </form>
    </div>
  );
};

export default LeaveComment;
