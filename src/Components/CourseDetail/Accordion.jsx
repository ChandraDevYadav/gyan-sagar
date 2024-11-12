import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoPlayCircleOutline } from "react-icons/io5";
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Accordion = ({ items }) => {
  const [activeIndices, setActiveIndices] = useState(items.map((_, index) => index));

  const handleToggle = (index) => {
    if (activeIndices.includes(index)) {
      setActiveIndices(activeIndices.filter((i) => i !== index));
    } else {
      setActiveIndices([...activeIndices, index]);
    }
  };

  const renderSocialIcon = (platform) => {
    switch (platform) {
      case "Twitter":
        return <FaTwitter className="text-blue-500" />;
      case "LinkedIn":
        return <FaLinkedin className="text-blue-700" />;
      case "Facebook":
        return <FaFacebook className="text-blue-600" />;
      case "Instagram":
        return <FaInstagram className="text-pink-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full mx-auto">
      {items.map((item, index) => (
        <div key={index} className="mb-2">
          <button
            onClick={() => handleToggle(index)}
            className="flex justify-between items-center w-full p-4 bg-[#26c976] text-white text-left font-medium focus:outline-none"
          >
            <span>{item.title}</span>
            <span>
              {item.lessons > 0 ? `${item.lessons} lessons, ${item.duration}` : ""}
            </span>
          </button>
          {activeIndices.includes(index) && (
            <div className="p-4 bg-gray-100 border border-gray-200">
              {item.type === "list" && (
                <ul className="list-disc pl-4 space-y-5">
                  {item.content.map((module, idx) => (
                    <li key={idx} className="flex justify-between items-center">
                      <div className="flex justify-start">
                        <span>{module.title}</span>
                        <span>&nbsp;{module.duration}</span>
                      </div>
                      <Link to={module.link} target="_blank">
                        <IoPlayCircleOutline className="text-xl" />
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              {item.type === "profile" && (
                <div className="flex items-center space-x-4">
                  <img src={item.content.image} alt={item.content.name} className="w-40 h-4w-40 rounded-full" />
                  <div>
                    <h3 className="text-xl font-bold">{item.content.name}</h3>
                    <p className="text-lg text-gray-600 mt-2">{item.content.profession}</p>
                    <p className="mt-2 text-lg text-gray-500">{item.content.description}</p>
                    <div className="flex space-x-3 mt-3">
                      {item.content.social.map((social, idx) => (
                        <a
                          key={idx}
                          href={social.link}
                          className="text-blue-500 hover:underline text-2xl"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {renderSocialIcon(social.platform)}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {item.type === "text" && (
                <p>{item.content}</p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
