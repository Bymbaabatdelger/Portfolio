"use client";
import About from "../components/about/about";
import Projects from "../components/projects/page";
import Resume from "../components/resume/Resume";
import Render from "../components/skill/render";
import { Meteors } from "../components/ui/meteors";
import { Tabs } from "../components/ui/tabs";

export default function TabsDemo() {
  const tabs = [
    {
      title: "About me",
      value: "About me",
      content: (

        <div className=" flex flex-col gap-2 items-center justify-center rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#0B2447] to-violet-900">
          <p  className="text-[#A5D7E8]">About me</p>
          <About/>
        </div>
      ),
    },
    {
      title: "Tech Stacks",
      value: "Tech Stacks",
      content: (
        <div className="  rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#0B2447] to-violet-900">
          <p   className="text-[#A5D7E8]">Tech Stacks</p>
          <Render/>
        </div>
      ),
    },
    {
      title: "Projects",
      value: "Projects",
      content: (
        <div className=" flex flex-col gap-8 rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#0B2447] to-violet-900">
          <p  className="text-[#A5D7E8]">Projects</p>
          <Projects/>
        </div>
      ),
    },
    {
      title: "Contact",
      value: "contact",
      content: (
        <div className=" rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#0B2447] to-violet-900">
          <p  className="text-[#A5D7E8]">Contact</p>
        </div>
      ),
    },
    {
      title: "Resume",
      value: "Resume",
      content: (
        <div className=" rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#0B2447] to-violet-900">
          <p  className="text-[#A5D7E8]">Resume</p>
          <Resume/>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[50rem] [perspective:1000px] bg-[#1A033A] relative b flex flex-col w-screen py-2 px-10 items-center justify-between">
      <Tabs tabs={tabs} />
      <Meteors number={50}/>
    </div>
  );
}


