import React, { useState, useEffect, useRef } from "react";
import { FaCartPlus, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const MobNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); 

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="bg-[#141414] py-3 px-2 lg:hidden sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link to='/'><img src="/logo2.png" className="w-10" alt="Electro Hub Logo" /></Link>
          <p className="text-sm text-white font-bold ml-2">
            Gyan <span className="text-xl text-red-600">Sansar</span>
          </p>
        </div>

        <div className="flex justify-between items-center gap-8 pr-1">
          <Link to='/cart'><FaCartPlus className="text-white text-2xl" /></Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />} 
          </button>
        </div>
      </div>

      {menuOpen && (
        <div ref={menuRef} className="mt-2 w-full"> 
          <div className="w-1/2 relative">
            <div className="w-full absolute z-50 bg-[#141414] mt-3 -left-2">
            <ul className="w-full bg-[#141414] mt-3 z-50">
            {['about', 'activity', 'membership', 'comingsoon', 'allgroup', 'allmember', 'blog', 'blogdetail', 'blogstyletwo', 'cart', 'community', 'contact', 'errorpage', 'login', 'register', 'product', 'productdetail', 'profile', 'setting'].map((link) => (
                  <li key={link}>
                    <Link
                      className="rounded-t text-white hover:bg-red-600 hover:py-2 hover:mb-2 hover:text-white px-6 text-sm pb-4 font-medium block whitespace-no-wrap"
                      to={`/${link}`}
                      onClick={handleLinkClick} 
                    >
                      {link.charAt(0).toUpperCase() + link.slice(1)} 
                    </Link>
                  </li>
                ))}
            </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobNavbar;
