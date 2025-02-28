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
import tailwind from "@/assets/icons/tailwindcss.svg";
import BootStrap from "@/assets/icons/bootstrap-svgrepo-com.svg";

import next from "@/assets/icons/nextjs-icon-svgrepo-com.svg";
import typejs from "@/assets/icons/typescript-svgrepo-com.svg";
import node from "@/assets/icons/node-dot-js-svgrepo-com.svg";
import mongo from "@/assets/icons/mongodb-svgrepo-com (2).svg";
import mysql from "@/assets/icons/mysql-svgrepo-com.svg";
import rrd from "@/assets/icons/react-router-svgrepo-com.svg";
import express from "@/assets/icons/express-svgrepo-com.svg";
import Reveal from "@/components/Reveal";
import tars from "@/assets/images/tars.jpeg";
import Image from "next/image";
import Link from "next/link";
import webpack from "@/assets/icons/webpack.svg";
import redux from "@/assets/icons/redux-store.svg";

const toolBoxFrontEndItems = [
  {
    title: "JavaScript",
    iconType: Js,
  },
  {
    title: "React",
    iconType: React,
  },
  {
    title: "Redux",
    iconType: redux,
  },
  {
    title: "Nextjs",
    iconType: next,
  },
  {
    title: "TypeScript",
    iconType: typejs,
  },
  {
    title: "Webpack",
    iconType: webpack,
  },
  {
    title: "React-router",
    iconType: rrd,
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
    title: "TailwindCSS",
    iconType: tailwind,
  },
  {
    title: "BootStrap",
    iconType: BootStrap,
  },
];

const toolBoxBackEndItems = [
  {
    title: "Nodejs",
    iconType: node,
  },
  {
    title: "Expressjs",
    iconType: express,
  },
  {
    title: "MongoDB",
    iconType: mongo,
  },
  {
    title: "MySQL",
    iconType: mysql,
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
    <div
      className="py-16 pt-12 lg:py-24 lg:pt-20 flex justify-center"
      id="about"
    >
      <div className=" w-[85vw] lg:max-w-[1024px] px-4 ">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me"
        />
        <div className="mt-16 flex flex-col gap-6">
          <Reveal>
            <Card className="px-2 sm:p-6 md:p-16 lg:p-12 lg:pr-10 lg:text-justify overflow-hidden ">
              <div>
                <div className="inline-flex gap-2  items-center bg-gradient-to-r from-emerald-300 to-sky-400  font-bold  uppercase tracking-widest text-sm text-transparent bg-clip-text  ">
                  <StarIcon className="size-9 text-emerald-300" />
                  <h3 className="font-serif text-3xl f">Who Am I?</h3>
                </div>
                <div className=" text-justify lg:text-start lg:w-full flex flex-col gap-4 text-white/60 mt-4 md:text-lg  mx-auto lg:text-xl">
                  <p className="text-semibold  text-white">
                    {" "}
                    I&apos;m a self-taught Frontend Developer with a strong
                    foundation in React, TypeScript, Redux, and modern web
                    technologies. Currently, I am the sole developer behind the
                    TARS Universe Project, a cutting-edge social networking
                    platform built on a monorepo architecture.
                  </p>
                  <p>
                    As a self-learner, I&apos;ve honed my skills through
                    official documentations, online tutorials, and hands-on
                    projects. I was pursuing a BSc in Computer Science at BRAC
                    University, where I maintained a 3.9 CGPA out of 4 before
                    deciding to drop out and fully commit to my passion for web
                    development. I&apos;ve successfully completed core courses
                    with highest marks in Object-Oriented Programming, Data
                    Structures and Algorithms, and Database Management.
                  </p>
                </div>
              </div>
            </Card>
          </Reveal>

          <Reveal width="100%">
            <Card className="p-6 md:p-16 lg:p-12 lg:pr-10 lg:text-justify overflow-hidden w-full">
              <div
                className="absolute inset-0 opacity-5 -z-10"
                style={{
                  backgroundImage: `url(${grainImage})`,
                }}
              ></div>

              <div className="inline-flex gap-2  items-center bg-gradient-to-r from-emerald-300 to-sky-400  font-bold  uppercase tracking-widest text-sm text-transparent bg-clip-text ">
                <StarIcon className="size-9 text-emerald-300" />
                <h3 className="font-serif text-3xl f">Experience</h3>
              </div>
              <div className=" text-justify lg:text-start lg:w-full flex flex-col gap-4 text-white/60 mt-4 md:text-lg  mx-auto lg:text-xl">
                <div className="flex md:flex-row flex-col justify-start items-center mt-2 gap-6">
                  <Image
                    src={tars}
                    alt="tars"
                    className="w-24 h-24 object-top rounded-full"
                  />
                  <div className="flex flex-col justify-start item-center gap-1 md:gap-3 ">
                    <p className="text-white text-[18px] md:text-[24px]">
                      Frontend Developer
                    </p>
                    <p className="text-[14px] md:text-[20px]">
                      January 10, 2025 - Present
                    </p>
                  </div>
                </div>
                <div className="w-full mt-2 md:mt-4 ml-3">
                  <p className="text-white">
                    As the sole developer of the TARS Universe Project, I am
                    responsible for architecting and maintaining a scalable,
                    high-performance social networking platform. I have:
                  </p>
                  <ul className="list-disc w-full text-left md:pl-8 sm:pl-6 pl-4 mt-4">
                    <li className="w-full">
                      Developing a full-featured social media platform{" "}
                      <Link
                        target="_blank"
                        href="https://tarsuniverse.com"
                        className="text-blue-300"
                      >
                        Tars Universe
                      </Link>{" "}
                      with messaging and e-commerce features.
                    </li>
                    <li className="w-full">
                      Engineered real-time messaging using WebSockets for
                      instant communication.
                    </li>
                    <li className="w-full">
                      Developed dynamic content interactions, including posts,
                      connections, infinite scrolling, and profile management.
                    </li>
                    <li className="w-full">
                      Designed and optimized a seamless user experience with
                      React, Redux, TypeScript, and TailwindCSS.
                    </li>
                    <li className="w-full">
                      Built the entire{" "}
                      <span className="text-white">monorepo </span> structure
                      using <span className="text-white"> Turborepo</span>,{" "}
                      <span className="text-white">Vite</span>,{" "}
                      <span className="text-white">pnpm</span>,{" "}
                      <span className="text-white">Webpack</span>, and for
                      efficient development and scalability.
                    </li>
                  </ul>
                </div>
              </div>
              <div className=" text-justify lg:text-start lg:w-full flex flex-col gap-4 text-white/60 mt-12 md:text-lg  mx-auto lg:text-xl">
                <div className="flex md:flex-row flex-col justify-start items-center mt-2 gap-6">
                  <Image
                    src={tars}
                    alt="tars"
                    className="w-24 h-24 object-top rounded-full"
                  />
                  <div className="flex flex-col justify-start item-center gap-1 md:gap-3  ">
                    <p className="text-white text-[18px] md:text-[24px]">
                      Frontend Developer Intern
                    </p>
                    <p className="text-[14px] md:text-[20px]">
                      October 10, 2024 - January 9, 2025
                    </p>
                  </div>
                </div>
                <div className="w-full mt-2 md:mt-4 ml-3">
                  <p className="text-white">
                    During my internship, I played a key role in shaping TARS
                    Universe, focusing on:
                  </p>
                  <ul className="list-disc w-full text-left md:pl-8 sm:pl-6 pl-4 mt-4">
                    {/* <li className="w-full">
                      Developing a full-featured social media platform{" "}
                      <Link
                        target="_blank"
                        href="https://tarsuniverse.com"
                        className="text-blue-300"
                      >
                        Tars Universe
                      </Link>{" "}
                      with messaging and e-commerce features.
                    </li> */}
                    <li className="w-full">
                      Implementing interactive content creation, user engagement
                      features, and real-time chat functionality.
                    </li>
                    <li className="w-full">
                      Developing infinite scroll, categorized content filtering,
                      and responsive UI components.
                    </li>
                    <li className="w-full">
                      Utilizing <span className="text-white">React</span>,{" "}
                      <span className="text-white">Redux</span>,{" "}
                      <span className="text-white">TypeScript</span>, and{" "}
                      <span className="text-white">TailwindCSS</span> to build a
                      modern, fast, and intuitive frontend.
                    </li>
                  </ul>
                  <p className="text-white mt-4">
                    My contributions as an intern led to my promotion to a
                    full-time role, where I took full ownership of the
                    platform’s frontend architecture and development.
                  </p>
                </div>
              </div>
            </Card>
          </Reveal>
          <Reveal>
            <Card className="p-6 md:p-16 lg:p-12 lg:pr-10 lg:text-justify overflow-hidden outline-none">
              <div>
                <div className="inline-flex gap-2  items-center bg-gradient-to-r from-emerald-300 to-sky-400  font-bold  uppercase tracking-widest text-sm text-transparent bg-clip-text  ">
                  <StarIcon className="size-9 text-emerald-300" />
                  <h3 className="font-serif text-3xl f">What Inspires Me?</h3>
                </div>
                <div className=" text-justify lg:text-start lg:w-full flex flex-col gap-4 text-white/60 mt-4 md:text-lg  mx-auto lg:text-xl">
                  <p className="text-semibold  text-white">
                    {" "}
                    I’m driven by innovation, problem-solving, and pushing the
                    boundaries of frontend engineering. I love architecting
                    scalable, high-performance applications, working with
                    cutting-edge technologies, and delivering seamless user
                    experiences. My goal is to continuously learn, improve, and
                    create impactful digital products that enhance the way
                    people interact online. Would you like to add any personal
                    achievements or side projects to strengthen your profile
                    further? 🚀
                  </p>
                </div>
              </div>
            </Card>
          </Reveal>
          <div className=" flex flex-col gap-6 md:grid md:grid-cols-2 ">
            <Card className=" h-[320px] p-0 w-full">
              <CardHeader
                title="My ToolBox"
                description="Explore the technologies and tools I use to craft exceptional
                digital experiences."
                className="px-6 pt-6"
              />
              <ToolBoxItems
                toolboxItems={toolBoxFrontEndItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:300s]"
              />
              <ToolBoxItems
                toolboxItems={toolBoxBackEndItems}
                className="mt-6 "
                itemsWrapperClassName="animate-move-right [animation-duration:300s]"
              />
            </Card>

            <Card className="h-[320px] p-0 flex flex-col w-full">
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
