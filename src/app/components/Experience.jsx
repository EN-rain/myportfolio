import React from "react";
import Image from "next/image";
import { Button } from "./Ui/MovingBorders";

const workExperience = [
  {
    id: 1,
    title: "User Research & Usability Testing",
    desc: "Conducted research and usability tests to improve user experience and product design.",
    className: "md:col-span-2",
    thumbnail: "/images/uresearch.png",
  },
  {
    id: 2,
    title: "Wireframing & Prototyping",
    desc: "Created wireframes and prototypes to streamline the design-to-development process.",
    className: "md:col-span-2",
    thumbnail: "/images/prototyping.png",
  },
  {
    id: 3,
    title: "Responsive Web Design",
    desc: "Designed responsive websites to ensure optimal performance across all devices.",
    className: "md:col-span-2",
    thumbnail: "/images/responsive.png",
  },
  {
    id: 4,
    title: "Interactive Graphics Design",
    desc: "Developed interactive designs and motion graphics to enhance user engagement.",
    className: "md:col-span-2",
    thumbnail: "/images/interaction.png",
  },
];

const Experience = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="text-4xl font-bold text-center">
        My <span className="text-purple-500">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            disabled
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            className="flex-1 text-white dark:text-white border-purple-500 dark:border-slate-800"
          >
              <div
                className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-8 gap-2 h-full "
                style={{ backgroundColor: "#161935", borderRadius: "2rem", }} 
              >
              <Image
                src={card.thumbnail}
                alt={card.title}
                className="lg:w-28 md:w-20 w-16"
                width={128}
                height={129}
                style={{ objectFit: "cover" }}
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
