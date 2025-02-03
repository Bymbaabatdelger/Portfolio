import { HoverEffect } from "../ui/card-hover-effect";

const Projects = () => {
  const project = [
    {
      name: "E-commerce",
      url: "https://e-commerce-team-3.vercel.app/",
      image: "/ecommerce.png",
      teckstacks : ["NEXTJS" , "MONGODB", "TAILWINDCSS"]
    },
    {
      name: "Travel landing page",
      url: "https://travel-landing-page-iota.vercel.app/",
      image: "/landing-page.png",
      teckstacks : ["HTML" , "CSS"]
    },
    {
      name: "To-do-list",
      url: "https://to-do-list-theta-kohl.vercel.app/",
      image: "/todo.png",
      teckstacks : ["HTML" , "CSS" , "REACT"]
    },
    {
      name: "Educare Learning management service",
      url: "https://edu.care.mn/#/index",
      image: "/glms.png",
      teckstacks : ["PHP" , "LARAVEL" , "MYSQL" , "VUE.JS" , "SASS"]
    },
  ];

  return (
    <div className="flex flex-col  lg:flex lg:flex-row gap-8">
     <HoverEffect items={project}/>
    </div>
  );
};
export default Projects;
