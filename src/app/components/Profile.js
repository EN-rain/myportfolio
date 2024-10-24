import React from "react";
import Image from 'next/image';
import Pfp from '../../../public/images/model.png'; 
import { FlipWords } from "../components/Ui/Flipwords"

const Profile = () => {
  const words = ["UI", "UX", "Modern"];

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between lg:gap-10"> 

      <div className="relative w-[250px] h-[250px] rounded-full overflow-hidden mb-4 lg:mb-0 lg:mr-6"> 
        <Image 
          src={Pfp}
          alt="Profile Picture"
          placeholder="blur"
          fill
          className="object-cover"
        />
      </div>
      
      <div className="flex flex-col lg:text-left text-center max-w-xl bg-[#161935] p-6 rounded-2xl shadow-[0px_10px_15px_rgba(0,0,0,0.5)]">
        <div>
          <div className="text-5xl text-white">
            <FlipWords words={words} className="text-purple-500 -mr-2 -ml-3 font-bold" />
            <span className="text-4xl">Designer</span> 
          </div>
          <h2 className="text-2xl font-bold ">I&apos;m <span className="text-purple-500">Edrian Nieves </span></h2>
        </div>

        <div className="flex-grow mt-4">
          <p className="text-sm text-gray-300">
            Currently a 3rd Year IT Student at Western Institute Technology,
            I am a passionate and creative coder currently pursuing my third year of IT studies at Western Institute Technology. 
            My approach to programming is not just about solving problems, but doing so with elegant and style. 
            Whether it&apos;s crafting elegant code or designing user-friendly interfaces, I aim to blend logic and creativity in everything I do. 
            Driven by curiosity and a desire to push boundaries, I continuously explore new technologies to expand my skill set.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
