"use client";
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
import grainImage from "@/assets/images/grain.jpg";
import { motion } from "framer-motion";
import { useRef } from "react";

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
    hobby: "Relaxing",
    emoji: "🧘‍♀️",
    top: "5%",
    left: "5%",
  },
  {
    hobby: "Gardening",
    emoji: "🪴",
    left: "50%",
    top: "5%",
  },
  {
    hobby: "Volunteering",
    emoji: "🤝",
    left: "10%",
    top: "35%",
  },
  {
    hobby: "Learning",
    emoji: "🧠",
    left: "35%",
    top: "40%",
  },
  {
    hobby: "Exploring",
    emoji: "🗺️",
    left: "70%",
    top: "45%",
  },
  {
    hobby: "Cooking",
    emoji: "🧑‍🍳",
    left: "5%",
    top: "65%",
  },
  {
    hobby: "Hiking",
    emoji: "🥾",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constrainref = useRef(null);
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20 " id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me"
        />
        <div className="mt-16 flex flex-col gap-6">
          <Card className="p-6 md:p-16 lg:p-12 lg:pr-10 lg:text-justify overflow-hidden">
            <div
              className="absolute inset-0 opacity-5 -z-10"
              style={{
                backgroundImage: `url(${grainImage})`,
              }}
            ></div>
            <div>
              <div className="inline-flex gap-2  items-center bg-gradient-to-r from-emerald-300 to-sky-400  font-bold  uppercase tracking-widest text-sm text-transparent bg-clip-text  ">
                <StarIcon className="size-9 text-emerald-300" />
                <h3 className="font-serif text-3xl f">My Instance</h3>
              </div>
              <div className=" text-justify lg:text-start lg:w-full flex flex-col gap-4 text-white/60 mt-4 md:text-lg  mx-auto lg:text-xl">
                <p className="text-semibold text-white">
                  {" "}
                  I&apos;m a passionate and dedicated full-stack web developer
                  with a strong foundation in both frontend and backend
                  technologies.{" "}
                </p>
                <p>
                  As a self-learner, I&apos;ve honed my skills through official
                  documentations, online tutorials, and hands-on projects.
                  Currently pursuing a BSc in Computer Science at BRAC
                  University and my current CGPA is 3.9. I&apos;ve successfully
                  completed core courses like Object-Oriented Programming, Data
                  Structures and Algorithms, and Database Management.
                </p>

                <span className="text-extrabold text-2xl font-serif text-white mt-4">
                  My technical proficiency includes:
                </span>

                <p className="-mt-2">
                  <span className="text-white text-xl  text-semibold">
                    Frontend:
                  </span>{" "}
                  JavaScript, HTML, CSS, Tailwind CSS, React, React Router Dom,
                  Authorization, Authentication, Data Fetching, State Management
                  (Context API), Framer Motion, Next.js, TypeScript,
                </p>

                <p>
                  <span className="text-white text-xl text-semibold">
                    Backend:
                  </span>{" "}
                  Node.js, Express.js, MySQL, MongoDB, Mongoose
                </p>
              </div>
            </div>
          </Card>
          <div className="md:grid md:grid-cols-2 flex flex-col gap-6 ">
            <Card className=" h-[320px] p-0 ">
              <CardHeader
                title="My ToolBox"
                description="Explore the technologies and tools I use to craft exceptional
                digital experiences."
                className="px-6 pt-6"
              />
              <ToolBoxItems
                toolboxItems={toolBoxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolBoxItems
                toolboxItems={toolBoxItems}
                className="mt-6 "
                itemsWrapperClassName="animate-move-right [animation-duration:30s]"
              />
            </Card>
            <Card className="h-[320px] p-0 flex flex-col">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interest and hobbies beyond the digital realm"
                className="px-6 py-6"
              />
              <div className="relative flex-1 mb-10 " ref={constrainref}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.hobby}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r rounded-full py-1.5 from-emerald-300 to-sky-400 absolute cursor-pointer"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constrainref}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.hobby}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
