import { Meteors } from "../ui/meteors";
const About = () => {
  return (
    <div className="flex flex-col lg:flex lg:flex-row gap-4 text-slate-200">
      <img
        className=" lg:h-[300px] lg:w-[240px] rounded-xl"
        src="/zurag.jpg"
        alt="picture"
      />
      <div className="flex w-full flex-col">
        <div>
          <p className="text-[8px] font-medium lg:text-[26px]">
            As a passionate and dedicated developer with a focus on the
            Full-stack. I want to contribute to the technology industry. My goal
            is to be a part of a forward-thinking team, where I can bring my
            passion for development and my commitment to excellence to every
            project I undertake.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
