import Card from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import Js from "@/assets/icons/square-js.svg";
import Html from "@/assets/icons/html5.svg";
import Css from "@/assets/icons/css3.svg";
import React from "@/assets/icons/react.svg";
import Github from "@/assets/icons/github.svg";
import { CardHeader } from "@/components/CardHeader";
import ToolBoxItems from "@/components/ToolBoxItems";

const toolBoxItems = [
  {
    title: "JavaScript",
    iconType: Js,
  },
  {
    title: "HTML5",
    iconType: Html,
  },
  {
    title: "CSS3",
    iconType: Css,
  },
  {
    title: "React",
    iconType: React,
  },
  {
    title: "Github",
    iconType: Github,
  },
];

const hobbies = [
  {
    hobby: "Programming",
    emoji: "💻",
  },
  {
    hobby: "Gardening",
    emoji: "🪴",
  },
  {
    hobby: "Volunteering",
    emoji: "🤝",
  },
  {
    hobby: "Learning",
    emoji: "🧠",
  },
  {
    hobby: "Exploring",
    emoji: "🗺️",
  },
  {
    hobby: "Cooking",
    emoji: "🧑‍🍳",
  },
  {
    hobby: "Hiking",
    emoji: "🥾",
  },
  {
    hobby: "Creating",
    emoji: "💡",
  },
  {
    hobby: "Relaxing",
    emoji: "🧘‍♀️",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-16">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me"
        />
        <div className="mt-16">
          <Card className="mb-10">
            <div>
              <div className="inline-flex gap-2  items-center">
                <StarIcon className="size-9 text-emerald-300" />
                <h3 className="font-serif text-3xl f">My Instance</h3>
              </div>
              <div className=" text-justify lg:text-start lg:w-full flex flex-col gap-4 text-white/60 mt-4 md:text-lg  mx-auto lg:text-xl">
                <p className="text-semibold text-white/90">
                  {" "}
                  I&apos;m a passionate and dedicated full-stack web developer
                  with a strong foundation in both frontend and backend
                  technologies.{" "}
                </p>
                <p>
                  As a self-learner, I&apos;ve honed my skills through countless
                  hours of online tutorials, courses, and hands-on projects.
                  Currently pursuing a BSc in Computer Science at BRAC
                  University, I&apos;ve successfully completed core courses like
                  Object-Oriented Programming, Data Structures and Algorithms,
                  and Database Management.
                </p>

                <span className="text-bold text-lg text-white mt-4">
                  My technical proficiency includes:
                </span>

                <p className="-mt-2">
                  <span className="text-white text-semibold">Frontend:</span>{" "}
                  JavaScript, HTML, CSS, Tailwind CSS, React, React Router Dom,
                  Authorization, Authentication, Data Fetching, State Management
                  (Context API), Framer Motion, Next.js, TypeScript,
                </p>

                <p>
                  <span className="text-white text-semibold">Backend:</span>{" "}
                  Node.js, Express.js, MySQL, MongoDB, Mongoose
                </p>

                <p>
                  <span className="text-white text-semibold">
                    I&apos;m committed to continuous learning and growth.
                  </span>{" "}
                  To sharpen my problem-solving abilities, I&apos;ve tackled
                  over 60 coding challenges on LeetCode and am actively
                  participating in coding contests on Codeforces.
                </p>
                <p>
                  <span className="text-white text-semibold">
                    I&apos;m eager to apply my skills to real-world projects and
                    collaborate with talented teams.
                  </span>{" "}
                  If you&apos;re seeking a dedicated and versatile web
                  developer, I&apos;m ready to contribute my expertise to your
                  projects.
                </p>
              </div>
            </div>
          </Card>
          <Card className="mb-10 h-[320px] p-0">
            <CardHeader
              title="My ToolBox"
              description="Explore the technologies and tools I use to craft exceptional
                digital experiences."
              className="px-6 pt-6"
            />
            <ToolBoxItems toolboxItems={toolBoxItems} />
            <ToolBoxItems toolboxItems={toolBoxItems} />
          </Card>
          <Card className="mb-10">
            <CardHeader
              title="Beyond the Code"
              description="Explore my interest and hobbies beyond the digital realm"
            />
            <div>
              {hobbies.map((hobby) => (
                <div key={hobby.hobby}>
                  <span>{hobby.hobby}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
