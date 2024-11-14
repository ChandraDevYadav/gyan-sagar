import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const AddReview = () => {
  const initialFormData = {
    fullName: "",
    email: "",
    rating: 0,
    reviewText: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRating = (rate) => {
    setFormData((prev) => ({
      ...prev,
      rating: rate,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Review submitted:", formData);

    // Show confirmation message
    setIsSubmitted(true);

    // Clear the form fields
    setFormData(initialFormData);

    // Optional: Hide confirmation message after a delay
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  const isFormValid = formData.fullName && formData.email && formData.rating && formData.reviewText;

  return (
    <div className="w-full bg-white mt-14">
      <h2 className="text-2xl font-bold text-primary mb-10">Add a Review</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Full Name */}
        <div className="w-full">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-pink-600"
            required
          />
        </div>

        {/* Email */}
        <div className="w-full">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-pink-600"
            required
          />
        </div>

        {/* Rating */}
        <div className="flex w-full gap-2">
          <label className="block text-gray-700 font-medium mb-1">Your Rating : </label>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                onClick={() => handleRating(star)}
                className={`cursor-pointer text-xl ${
                  formData.rating >= star ? "text-pink-600" : "text-pink-200"
                }`}
              />
            ))}
          </div>
        </div>
        </div>

        {/* Review Text */}
        <div className="pt-4">
          <textarea
            name="reviewText"
            value={formData.reviewText}
            onChange={handleChange}
            rows="8"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-600"
            required
            placeholder="Type Here Message"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isFormValid}
          className={`py-3 px-6 rounded text-white font-bold ${
            isFormValid ? "bg-pink-600 hover:bg-pink-700 px-8 text-lg py-3 hover:rounded-full" : "bg-gray-400 cursor-not-allowed px-8 text-lg py-3"
          }`}
        >
          Submit Review
        </button>
      </form>

      {/* Confirmation Message */}
      {isSubmitted && (
        <p className="mt-4 text-green-600 font-medium text-center">Review added successfully!</p>
      )}
    </div>
  );
};

export default AddReview;
