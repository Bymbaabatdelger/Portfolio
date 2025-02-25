
import { url } from "inspector";
import React from "react";

const Render = () => {
  const data = [
    {
      url: "https://th.bing.com/th/id/OIP.8qrG7nVlgZSRCu2obyNsCQAAAA?rs=1&pid=ImgDetMain",
      content: "HTML",
    },
    {
      url: "https://th.bing.com/th/id/OIP.aiII04uB8m611vQPSw7HfgHaHa?rs=1&pid=ImgDetMain",
      content: "CSS",
    },
    {
      url: "https://th.bing.com/th/id/OIP.DN7ToydkJZEdVaJVK_NhvwAAAA?rs=1&pid=ImgDetMain",
      content: "JavaScript",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      content: "React",
    },
    {
      url: "https://www.drupal.org/files/project-images/nextjs-drupal.jpg",
      content: "NextJs",
    },
    {
      url: "https://th.bing.com/th/id/R.093bd57c711ea2f031fb4579f9da9547?rik=BkDQC6mdRxAxOA&pid=ImgRaw&r=0",
      content: "NodeJs",
    },
    {
      url: "https://seeklogo.com/images/E/express-logo-E9DA5D0AF7-seeklogo.com.png",
      content: "Express",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
      content: "Typescript",
    },
    {
      url: "https://th.bing.com/th/id/OIP.z6OjJhNIOh7kj6wWmutjWQHaIM?rs=1&pid=ImgDetMain",
      content: "Jest",
    },
    {
      url: "https://th.bing.com/th/id/R.20f0338da83ccc07372d989bbb4ce5f8?rik=vlpqNrERosmB0w&pid=ImgRaw&r=0",
      content: "Cypress",
    },
    {
      url : "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
      content : "Vue.Js"
    },
    {
      url : "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
      content : "PHP"
    },
    {
      url : "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
      content : "Laravel"
    }
  ];

  const db = [
    {
        url :"https://th.bing.com/th/id/R.8890ca8c424158412b19d61ea39cec7c?rik=MR4g1BLsyzDFcA&pid=ImgRaw&r=0",
        content : "MongoDB"
    },
    {
        url :"https://brandlogos.net/wp-content/uploads/2021/11/postgresql-logo.png",
        content : "PostgreSQL"
    },
    {
        url :"https://th.bing.com/th/id/R.9cfd82e7418ae3ffa5cbf47f9aade3b9?rik=1Gdmqt%2fe7zFIYw&pid=ImgRaw&r=0",
        content : "Graphql"
    },
    {
      url : "https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png",
      content : "MYSQL"
    }
  ]
  const tools = [
    {
        url : "https://cdn0.iconfinder.com/data/icons/social-network-9/50/29-512.png",
        content : "GITHUB"
    },
    {
        url : "https://miro.medium.com/max/1400/1*FwbJ8WvQjrXgPx3z4KlKHA.png",
        content : "Figma"
    },
    {
        url : "https://img.daisyui.com/images/daisyui-logo/daisyui-logomark.svg",
        content : "Daisy UI"
    },
    {
        url : "https://th.bing.com/th/id/OIP.AvpmhSP2e8GguzR4CUT5dQHaEy?rs=1&pid=ImgDetMain",
        content : "Tailwind"
    },
    {
        url : "https://th.bing.com/th/id/OIP.rpiHSO8j5Ng9dzobkcvAkQAAAA?rs=1&pid=ImgDetMain",
        content : "Material UI"
    },
    {
        url : "https://th.bing.com/th/id/OIP.t5pnr1UiuXkrcS-rP2bJSgHaHa?rs=1&pid=ImgDetMain",
        content : "Cloudinary"
    },
    {
        url : "https://th.bing.com/th/id/R.b849286f7caa0bfc947c4d69b405ff89?rik=ca%2fskFa8NEu0Qw&pid=ImgRaw&r=0",
        content : "AWS.S3"
    }
  ]

  return (
    <div className="flex flex-col gap-2" >
      <p className=" text-[10px] lg:text-[20px] text-[#A5D7E8]">Languages and Frameworks</p>
      <div  className="flex flex-wrap gap-2 lg:justify-between border rounded-2xl p-4 border-[#A5D7E8]">
      {data &&
        data.map((e, index) => (
          <div
            className="flex flex-col justify-center items-center"
            key={index}
          >
            <img className="h-8 w-8 rounded-xl" src={e.url} alt={e.content} />
            <p className="text-[12px] text-slate-200" >{e.content}</p>
          </div>
        ))}
      </div>
      <p className="text-[10px] lg:text-[20px] text-[#A5D7E8]">Databases</p>
      <div className="flex gap-4 lg:gap-10 border rounded-2xl p-4 border-[#A5D7E8]">
      {db &&
        db.map((e, index) => (
          <div
            className="flex flex-col justify-center items-center"
            key={index}
          >
            <img className="h-8 w-8 rounded-xl" src={e.url} alt={e.content} />
            <p className="text-[12px] text-slate-200" >{e.content}</p>
          </div>
        ))}
      </div>
      <p className="text-[10px] lg:text-[20px] text-[#A5D7E8]">Tools and Platforms</p>
      <div className=" flex flex-wrap gap-4 lg:justify-between border rounded-2xl p-4 border-[#A5D7E8]">
      {tools &&
        tools.map((e, index) => (
          <div
            className="flex flex-col justify-center items-center"
            key={index}
          >
            <img className="h-8 w-8 rounded-xl" src={e.url} alt={e.content} />
            <p className="text-[12px] text-slate-200">{e.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Render;
