import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterest, FaTwitter } from 'react-icons/fa6';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ username, password, rememberMe });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        
        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">User Name *</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter your username"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password *</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="text-blue-600 mr-2"
              />
              <span className="text-gray-700">Remember Me</span>
            </label>
            <a href="/forgetpassword" className="text-blue-500 hover:underline">Forget Password?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Submit Now
          </button>
        </form>

        {/* Sign Up and Social Media Login */}
        <div className="text-center mt-6">
          <p className="text-gray-700">
            Don’t Have any Account?{' '}
            <a href="/signup" className="text-blue-500 font-semibold hover:underline">Sign Up</a>
          </p>
          <p className="mt-4 text-gray-500">or</p>
          <p className="mt-4 text-gray-700 font-semibold">Login With Social Media</p>
          <div className="flex justify-center gap-2 mt-4">
            {/* Replace these placeholders with icons if needed */}
            <button className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600"><FaFacebookF/></button>
            <button className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600"><FaLinkedinIn/></button>
            <button className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500"><FaTwitter/></button>
            <button className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500"><FaInstagram/></button>
            <button className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500"><FaPinterest/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
