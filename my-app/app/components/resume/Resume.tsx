import Link from "next/link";

const Resume = () => {

    const cv = "https://www.figma.com/design/yVQW7T0b3ffTCEFwf1QkdE/CV-updated?node-id=0-1&t=bM6NVBvZl4jPCM65-1"

  return (
    <Link href={cv} passHref className="flex justify-center items-ceter">
      <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2 text-[16px] bg-[#1A033A] rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
          click to visit resume
        </div>
      </button>
    </Link>
  );
};

export default Resume
