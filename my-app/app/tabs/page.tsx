"use client";
import About from "../components/about/about";
import Contact from "../components/contact/Contact";
import Projects from "../components/projects/page";
import Resume from "../components/resume/Resume";
import Render from "../components/skill/render";
import { BackgroundGradient } from "../components/ui/background-gradient";
import { SparklesCore } from "../components/ui/sparkle";
import { Tabs } from "../components/ui/tabs";

export default function TabsDemo() {
  const tabs = [
    {
      title: "About me",
      value: "About me",
      content: (
       <BackgroundGradient className="flex flex-col rounded-xl p-4 text-white text-xl md:text-4xl flex items-center space-x-1 bg-black m-2  font-bold dark:bg-zinc-900">
           <p  className="text-[#A5D7E8]">About me</p>
           <About/>
       </BackgroundGradient>
       
      ),
    },
    {
      title: "Tech Stacks",
      value: "Tech Stacks",
      content: (
        <BackgroundGradient className="flex flex-col rounded-xl p-4 text-white text-xl md:text-4xl flex items-center space-x-1 bg-black m-2  font-bold dark:bg-zinc-900">
           <p  className="text-[#A5D7E8]">Tech Stacks</p>
           <Render/>
       </BackgroundGradient>
      ),
    },
    {
      title: "Projects",
      value: "Projects",
      content: (
        <BackgroundGradient className="flex flex-col rounded-xl p-4 text-white text-xl md:text-4xl flex items-center space-x-1 bg-black m-2  font-bold dark:bg-zinc-900">
        <p  className="text-[#A5D7E8]">Projects</p>
        <Projects/>
    </BackgroundGradient>
      ),
    },
    {
      title: "Contact",
      value: "Contact",
      content: (
        <BackgroundGradient className="flex flex-col rounded-xl p-4 text-white text-xl md:text-4xl flex items-center space-x-1 bg-black m-2  font-bold dark:bg-zinc-900">
        <p  className="text-[#A5D7E8]">Contact</p>
        <Contact/>
    </BackgroundGradient>
      ),
    },
    {
      title: "Resume",
      value: "Resume",
      content: (
        <BackgroundGradient className="flex flex-col rounded-xl p-4 text-white text-xl md:text-4xl flex items-center space-x-1 bg-black m-2  font-bold dark:bg-zinc-900">
        <p  className="text-[#A5D7E8] pb-6">Resume</p>
        <Resume/>
    </BackgroundGradient>
      ),
    },
  ];
  return (
   <div>
     <div className="w-full absolute inset-0 h-screen">
    <SparklesCore
      id="tsparticlesfullpage"
      background="transparent"
      minSize={0.6}
      maxSize={1.4}
      particleDensity={100}
      className="w-full h-full"
      particleColor="#FFFFFF"
    />
  </div>
    <div className="h-[60rem] h [perspective:1000px]  relative z-20  flex flex-col w-screen py-4 px-10 items-center justify-between">
      <Tabs tabs={tabs} />
    </div>
   </div>
  );
}


