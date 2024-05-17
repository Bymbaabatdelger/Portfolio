"use client";
import React from "react";
import { WavyBackground } from "./components/ui/wavy-background";
import profile from "../public/profile.jpg";
import { TypewriterEffect } from "./components/ui/typewriter-effect";
import Link from "next/link";

export default function Portfolio() {
  const words = [
    {
      text: "Hi ",
      className: "text-blue-200 dark:text-blue-200",
    },
    {
      text: " There!",
      className: "text-blue-200 dark:text-blue-200",
    },
    {
      text: "My",
      className: "text-blue-200 dark:text-blue-200",
    },
    {
      text: "name",
      className: "text-blue-200 dark:text-blue-200",
    },
    {
      text: "is",
      className: "text-blue-200 dark:text-blue-200",
    },
    {
      text: "Byambajargal",
      className: "text-blue-200 dark:text-blue-200",
    },
    {
      text: "I'am",
      className: "text-blue-200 dark:text-blue-200",
    },
    {
      text: "Full-Stack",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "developer",
      className: "text-blue-200 dark:text-blue-200",
    },
  ];

  return (
    <WavyBackground className="max-w-4xl mx-auto p-20">
      <div className="flex flex-col justify-center items-center gap-[40px]">
        <div className=" flex flex-col lg:flex lg:flex-row ">
            <img className="rounded-xl" src={profile.src} alt="profile" />
          <TypewriterEffect words={words} />
        </div>
        <Link href={"/tabs"}>
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              Get Started
            </div>
          </button>
        </Link>
      </div>
    </WavyBackground>
  );
}
