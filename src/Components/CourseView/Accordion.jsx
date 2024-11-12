import React, { useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { IoPlayCircleOutline } from "react-icons/io5";
import { RiShareBoxFill } from "react-icons/ri";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sectionsData = [
    {
      title: "Section 1: Introduction",
      videos: "13 Videos | 26:00 Min",
      lessons: [
        { title: "1.1 Introduction", duration: "6:00 Min" },
        { title: "1.2 What is Website Design", duration: "8:00 Min" },
        { title: "1.3 What is Website Design", duration: "6:00 Min" },
        { title: "1.4 What is Website Design", duration: "6:00 Min" },
        { title: "1.5 What is Website Design", duration: "6:00 Min" },
      ],
    },
    {
      title: "Section 2: HTML Basics",
      videos: "10 Videos | 20:00 Min",
      lessons: [
        { title: "2.1 Introduction to HTML", duration: "5:00 Min" },
        { title: "2.2 HTML Tags", duration: "4:00 Min" },
        { title: "2.3 HTML Attributes", duration: "5:00 Min" },
        { title: "2.4 Structuring HTML", duration: "6:00 Min" },
      ],
    },
    {
      title: "Section 3: CSS Fundamentals",
      videos: "12 Videos | 24:00 Min",
      lessons: [
        { title: "3.1 Introduction to CSS", duration: "6:00 Min" },
        { title: "3.2 CSS Selectors", duration: "5:00 Min" },
        { title: "3.3 CSS Properties", duration: "4:00 Min" },
        { title: "3.4 Box Model", duration: "5:00 Min" },
        { title: "3.5 Flexbox", duration: "4:00 Min" },
      ],
    },
    {
      title: "Section 4: JavaScript Basics",
      videos: "8 Videos | 16:00 Min",
      lessons: [
        { title: "4.1 Introduction to JavaScript", duration: "4:00 Min" },
        { title: "4.2 Variables and Data Types", duration: "3:00 Min" },
        { title: "4.3 Functions in JavaScript", duration: "4:00 Min" },
        { title: "4.4 Loops and Conditionals", duration: "5:00 Min" },
      ],
    },
    {
      title: "Section 5: Web Design",
      videos: "9 Videos | 18:00 Min",
      lessons: [
        { title: "5.1 Introduction to Responsive Design", duration: "4:00 Min" },
        { title: "5.2 Media Queries", duration: "5:00 Min" },
        { title: "5.3 Viewport and Units", duration: "3:00 Min" },
        { title: "5.4 Mobile-First Design", duration: "6:00 Min" },
      ],
    },
    {
      title: "Section 6: Advanced CSS",
      videos: "7 Videos | 14:00 Min",
      lessons: [
        { title: "6.1 CSS Grid", duration: "4:00 Min" },
        { title: "6.2 Animations in CSS", duration: "3:00 Min" },
        { title: "6.3 Transitions", duration: "3:00 Min" },
        { title: "6.4 CSS Variables", duration: "4:00 Min" },
      ],
    },
    {
      title: "Section 7: MERN Stack",
      videos: "7 Videos | 14:00 Min",
      lessons: [
        { title: "6.1 Express JS", duration: "4:00 Min" },
        { title: "6.2 MongooDB", duration: "3:00 Min" },
        { title: "6.3 React JS", duration: "3:00 Min" },
        { title: "6.4 Node JS", duration: "4:00 Min" },
      ],
    },
  ];

  return (
    <div className="w-full mx-auto pt-1">
      {sectionsData.map((section, index) => (
        <div key={index} className="mb-2">
          <button
            onClick={() => handleToggle(index)}
            className="flex justify-between items-center w-full px-4 py-6 bg-white text-black text-left font-medium focus:outline-none"
          >
            <div className="flex flex-col">
            <span>{section.title}</span>
            <span>{section.videos}</span>
            </div>
            <div className="flex flex-col">
            <FaAngleDown/>
            </div>
          </button>
          {activeIndex === index && (
            <div className="p-4 bg-gray-100 border border-gray-200">
              <ul className="list-disc pl-4 space-y-2">
                {section.lessons.map((lesson, idx) => (
                  <li key={idx} className="flex justify-start items-start gap-2 border-b border-b-gray-400">
                    <RiShareBoxFill className="text-primary mt-1"/>
                    <div className="flex flex-col">
                    <span className="text-black text-lg font-bold">{lesson.title}</span>
                    <span className="flex justify-start items-center text-gray-600 gap-2"><IoPlayCircleOutline /> {lesson.duration}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
