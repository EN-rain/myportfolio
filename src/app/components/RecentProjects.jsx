"use client";

import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import { PinContainer } from "./Ui/Pin";

export const projects = [
  {
    id: 1,
    title: "Awesometodos",
    des: "An intuitive to-do app to help you stay organized and boost productivity with ease.",
    img: "/images/awes.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://todo-dea6.onrender.com",
  },
];

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="text-4xl font-bold text-center mt-[100px] -mb-20" id="projects">
        A small selection of{" "}
        <span className="text-purple-500">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.title} href={item.link}>
              <div
                className="relative flex flex-col items-center justify-between sm:w-96 w-[80vw] p-4 h-full rounded-3xl"
                style={{ backgroundColor: "#161935" }}
              >
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl">
                    <Image
                      src="/bg.png"
                      alt="Background Image"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-3xl"
                    />
                  </div>
                  <Image
                    src={item.img}
                    alt="Project Cover"
                    layout="intrinsic"
                    width={500}
                    height={300}
                    className="z-10 absolute bottom-0"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3 w-full">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <Image
                          src={icon}
                          alt={`Icon ${index + 1}`}
                          width={70}
                          height={70}
                          className="p-2"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <p className="lg:text-xl md:text-xs text-sm text-purple">
                        Check Live Site
                      </p>
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                    </a>
                  </div>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
