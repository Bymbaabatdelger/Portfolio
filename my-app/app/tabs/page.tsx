"use client";
import Projects from "../components/projects/page";
import Resume from "../components/resume/Resume";
import Render from "../components/skill/render";
import { Tabs } from "../components/ui/tabs";

export default function TabsDemo() {
  const tabs = [
    {
      title: "About me",
      value: "About me",
      content: (
        <div className=" rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>About me</p>
        </div>
      ),
    },
    {
      title: "Tech Skills",
      value: "Tech Skills",
      content: (
        <div className="  rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p  className="text-slate-200">Tech Skills</p>
          <Render/>
        </div>
      ),
    },
    {
      title: "Projects",
      value: "Projects",
      content: (
        <div className=" flex flex-col gap-8 rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-slate-200">Projects</p>
          <Projects/>
        </div>
      ),
    },
    {
      title: "Contact",
      value: "contact",
      content: (
        <div className=" rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Content tab</p>
        </div>
      ),
    },
    {
      title: "Resume",
      value: "Resume",
      content: (
        <div className=" rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Resume</p>
          <Resume/>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[50rem] [perspective:1000px] bg-[#1A033A] relative b flex flex-col w-screen py-4 px-10 items-center justify-between">
      <Tabs tabs={tabs} />
    </div>
  );
}


