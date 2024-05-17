// import Link from "next/link";
import { HoverEffect } from "../ui/card-hover-effect";

const Projects = () => {
  const project = [
    {
      name: "E-commerce",
      url: "https://e-commerce-team-3.vercel.app/",
      image: "/ecommerce.png",
    },
    {
      name: "Travel landing page",
      url: "https://travel-landing-page-iota.vercel.app/",
      image: "/landing-page.png",
    },
    {
      name: "To-do-list",
      url: "https://to-do-list-theta-kohl.vercel.app/",
      image: "/todo.png",
    },
  ];

  return (
    <div className="flex flex-col  lg:flex lg:flex-row gap-8">
     <HoverEffect items={project}/>
    </div>
  );
};
export default Projects;
