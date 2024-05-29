"use client";
import React from "react";
import profile from "../public/profile.jpg";
import { TypewriterEffect } from "./components/ui/typewriter-effect";
import Link from "next/link";
import { Vortex } from "./components/ui/vortex";

export default function Portfolio() {
  const words = [
    {
      text: "Hi ",
      className: "text-[#A5D7E8] font-mono dark:text-blue-200",
    },
    {
      text: " There!",
      className: "text-[#A5D7E8] font-mono dark:text-blue-200",
    },
    {
      text: "My",
      className: "text-[#A5D7E8] font-mono dark:text-blue-200",
    },
    {
      text: "name",
      className: "text-[#A5D7E8] font-mono dark:text-blue-200",
    },
    {
      text: "is",
      className: "text-[#A5D7E8] font-mono dark:text-blue-200",
    },
    {
      text: "Byambajargal",
      className: "text-[#A5D7E8] font-mono dark:text-blue-200",
    },
    {
      text: "I'am",
      className: "text-[#A5D7E8] font-mono dark:text-blue-200",
    },
    {
      text: "Mern-Stack",
      className: "text-[#edadee] font-mono dark:text-blue-500",
    },
    {
      text: "developer",
      className: "text-[#A5D7E8] font-mono dark:text-blue-200",
    },
  ];

  return (
    <Vortex className="max-w-4xl h-screen mx-auto p-20">
      <div className="flex flex-col justify-center items-center gap-[40px]">
        <div className=" flex flex-col lg:flex lg:flex-row ">
            <img className="rounded-xl h-[300px] w-[180px]" src='../profile.jpg' alt="profile" />
          <TypewriterEffect words={words} />
        </div>
        <Link href={"/tabs"}>
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2 font-mono bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              Get Started
            </div>
          </button>
        </Link>
      </div>
    </Vortex>
  );
}
