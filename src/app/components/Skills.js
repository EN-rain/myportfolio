import { HoverEffect } from "../components/Ui/Card";

export const projects = [
  {
    title: "Html/CSS",
    description: "A technology company that builds economic infrastructure for the internet.",
    image: "/images/code.png", 
  },
  {
    title: "React",
    description: "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    image: "/images/atom.png",
  },
  {
    title: "Python",
    description: "A multinational technology company that specializes in Internet-related services and products.",
    image: "/images/py.png", 
  },
];


export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
        <h1 className="text-4xl font-bold text-center">
        My <span className="text-purple-500">Skills</span>
      </h1>
      <HoverEffect items={projects} />
    </div>
  );
}
