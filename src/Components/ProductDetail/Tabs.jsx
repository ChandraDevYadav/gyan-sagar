import React, { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import AddReview from "./AddReview";

const Tabs = () => {
  // Tab data array with nested content
  const tabs = [
    {
      id: 1,
      label: "Description",
      content: {
        paragraphs: [
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
        listItems: [
          "Donec non est at libero vulputate rutrum.",
          "Morbi ornare lectus quis justo gravida semper.",
          "Pellentesque aliquet, sem eget laoreet ultrices.",
          "Nulla tellus mi, vulputate adipiscing cursus eu.",
          "Donec a neque libero.",
          "Morbi ornare lectus quis justo gravida semper.",
          "Pellentesque aliquet, sem eget laoreet ultrices.",
        ],
        image: "/pro1.jpg",
      },
    },
    {
      id: 2,
      label: "Reviews",
      content: [
        {
          id: 1,
          reviewerImage: "/pp2.jpg",
          reviewerName: "John Doe",
          reviewDate: "May 25, 2022 at 6:57 am",
          reviewText: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
          stars: 5,
        },
        {
          id: 2,
          reviewerImage: "/pp1.jpg",
          reviewerName: "Jane Smith",
          reviewDate: "May 25, 2022 at 6:57 am",
          reviewText: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
          stars: 4,
        },
        {
          id: 3,
          reviewerImage: "/pp3.jpg",
          reviewerName: "Chan Dra Dev",
          reviewDate: "May 25, 2022 at 6:57 am",
          reviewText: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
          stars: 5,
        },
        {
          id: 4,
          reviewerImage: "/pp4.jpg",
          reviewerName: "Indra Dev",
          reviewDate: "May 25, 2022 at 6:57 am",
          reviewText: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
          stars: 4,
        },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id); // Set initial active tab to the first tab

  return (
    <div className="w-full mt-8 bg-white">
      {/* Tab Headers */}
      <div className="flex gap-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex py-4 text-lg px-10 text-center font-bold ${activeTab === tab.id
                ? "bg-pink-600 text-white"
                : "bg-primary text-white"
              } ${tab.id === 1 ? "rounded-tl-md" : ""}`}  // Add the rounded-tl-md class only to the first tab
          >
            {tab.label}
          </button>
        ))}
      </div>


      {/* Tab Content */}
      <div className="px-8">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={tab.id}>
                {tab.id === 1 ? (
                  <div>
                    {tab.content.paragraphs.map((para, index) => (
                      <p key={index} className="text-gray-700 py-8 text-lg font-medium">{para}</p>
                    ))}
                    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4">
                      <ul className="my-6 gap-y-4 font-medium order-2 md:order-1">
                        {tab.content.listItems.map((item, index) => (
                          <li key={index} className="text-lg mb-4 text-gray-700 flex justify-start items-center gap-4"><FaRegStar className="text-pink-600" />{item}</li>
                        ))}
                      </ul>
                      <img
                        src={tab.content.image}
                        alt="Product"
                        className="w-full order-1 md:order-2"
                      />
                    </div>
                    {tab.content.paragraphs.map((para, index) => (
                      <p key={index} className="text-gray-700 pt-8 pb-12 text-lg font-medium">{para}</p>
                    ))}
                  </div>
                ) : (
                  <div className="pb-14">
                    {tab.content.map((review) => (
                      <div key={review.id} className="pt-10">
                        <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center">
                          <img
                            src={review.reviewerImage}
                            alt="Reviewer"
                            className="w-24 h-24 rounded-full mr-4"
                          />
                          <div className="pr-1 md:pr-6">
                            <div className="flex justify-between items-center">
                              <div className="flex justify-start items-center gap-2 md:gap-6">
                                <h4 className="font-bold text-primary text-xl">{review.reviewerName}</h4>
                                <p className="text-lg text-gray-700 font-medium">Posted on {review.reviewDate}</p>
                              </div>
                              <div className="flex items-center gap-1 pr-1 md:pr-4">
                                {[...Array(review.stars)].map((_, i) => (
                                  <FaStar key={i} className="text-pink-600 text-lg"/>
                                ))}
                              </div>
                            </div>
                            <p className="text-gray-700 mb-2 text-lg font-medium mt-3">{review.reviewText}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div>
                      <AddReview/>
                    </div>
                  </div>
                )}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Tabs;
