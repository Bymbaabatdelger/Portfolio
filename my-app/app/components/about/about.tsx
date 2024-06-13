const About = () => {
  return (
    <div className="flex flex-col lg:flex lg:flex-row gap-4 text-slate-200">
      <img className=" lg:h-[300px] lg:w-[240px] rounded-xl" src="/zurag.jpg" alt="picture" />
      <div className="flex w-full flex-col">
      <div>
        <p className="text-[8px] font-medium lg:text-[12px]">As a passionate and dedicated developer with a focus on the MERN stack. I had the opportunity to apply theoretical knowledge in real-world scenarios,
         collaborating with a talented cohort of developers on innovative projects. This hands-on experience not only solidified my technical expertise but also enhanced my ability to work effectively within a team, communicate complex ideas, and troubleshoot challenging problems.
         My goal is to be an integral part of a forward-thinking team, where I can bring my passion for development and my commitment to excellence to every project I undertake. 
         </p>
      </div>
      </div>
    </div>
  );
};
export default About;
