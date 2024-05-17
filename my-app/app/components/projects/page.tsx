import Link from "next/link";

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
      {project &&
        project.map((el, index) => (
          <Link href={el.url} key={index} passHref>
              <div className="flex flex-col items-center w-[200px] h-[200px] hover:border-green-200 rounded-[16px] border-2">
                <img className="rounded-[16px] w-[196px] h-[123px]" src={el.image}  alt={el.image}/>
                <p className="text-[16px] hover:text-[#1A033A]  pb-2 ">{el.name}</p>
              </div>
          </Link>
        ))}
    </div>
  );
};
export default Projects;
