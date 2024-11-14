import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const Accordion = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const items = [
    {
      title: 'Code Optimization',
      content: [
        'Seo',
        'Marketing',
        'Email Marketing',
        'Seo Support',
      ],
    },
    {
      title: 'Monitoring Ranking',
      content: [
        'Seo',
        'Marketing',
        'Email Marketing',
        'Seo Support',
      ],
    },
    {
      title: 'Target Strategy',
      content: [
        'Seo',
        'Marketing',
        'Email Marketing',
        'Seo Support',
      ],
    },
    {
      title: 'Nap Syndication',
      content: [
        'Seo',
        'Marketing',
        'Email Marketing',
        'Seo Support',
      ],
    },
    {
      title: 'SEO Support',
      content: [
        'Seo',
        'Marketing',
        'Email Marketing',
        'Seo Support',
      ],
    },
    {
      title: 'Email Marketing',
      content: [
        'Seo',
        'Marketing',
        'Email Marketing',
        'Seo Support',
      ],
    },
    {
      title: 'Engine Marketing',
      content: [
        'Seo',
        'Marketing',
        'Email Marketing',
        'Seo Support',
      ],
    },
  ];

  return (
    <div className="space-y-4 w-full">
      {items.map((item, index) => (
        <div 
          key={index} 
          onMouseEnter={() => setExpandedIndex(index)}
          onMouseLeave={() => setExpandedIndex(null)}
          className=""
        >
          {/* Accordion Header */}
          <div className="flex items-center justify-between py-4 cursor-pointer border-b">
            <h3 className="font-medium text-gray-800 text-lg">{item.title}</h3>
            <span className="text-lg text-gray-800">
              {expandedIndex === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </span>
          </div>
          
          {/* Accordion Content */}
          {expandedIndex === index && (
            <div className="p-4 text-gray-600 bg-white">
              <ul className="">
                {item.content.map((subItem, subIndex) => (
                  <li key={subIndex} className='pb-2'>{subItem}</li>
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
