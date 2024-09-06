"use client";

import Js from "@/assets/icons/square-js.svg";
import Html from "@/assets/icons/html5.svg";
import Css from "@/assets/icons/css3.svg";
import React from "@/assets/icons/react.svg";
import fashionFizz from "@/assets/images/fashion-fizz.png";
import ChatWebApp from "@/assets/images/chat-web-app.png";
import InstaFood from "@/assets/images/instafood.png";
import Tailwind from "@/assets/icons/tailwindcss.svg";
import BootStrap from "@/assets/icons/bootstrap-svgrepo-com.svg";

import Next from "@/assets/icons/nextjs-icon-svgrepo-com.svg";
import Ts from "@/assets/icons/typescript-svgrepo-com.svg";
import Mongoose from "@/assets/icons/mammal-animal-shape-of-mongoose-svgrepo-com.svg";
import Node from "@/assets/icons/node-dot-js-svgrepo-com.svg";
import Mongo from "@/assets/icons/mongodb-svgrepo-com (2).svg";
import Mysql from "@/assets/icons/mysql-svgrepo-com.svg";
import Rrd from "@/assets/icons/react-router-svgrepo-com.svg";
import Express from "@/assets/icons/express-svgrepo-com.svg";
import FindYourDreamJob from "@/assets/images/find-your-dream-job.png";
import RecipeFinder from "@/assets/images/recipe-finder.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import Card from "@/components/Card";
import TechIcon from "@/components/TechIcon";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { off } from "process";

const portfolioProjects = [
  {
    title: "Fashion fizz",
    results: [
      { title: "A modern e-commerce clothing website." },
      { title: "User authentication  using Context API." },
      { title: "Client-side routing using React Router." },
    ],
    tech: ["react", "tailwind", "rrd", "js", "css", "html", "frontend"],
    techIcon: [React, Tailwind, Rrd, Js, Css, Html],
    link: "https://fashion-fizz.vercel.app",
    image: fashionFizz,
    github: "https://github.com/saied83/fashion-fizz",
    featured: true,
  },
  {
    title: "Chat App",
    results: [
      { title: "Real-time messaging web app." },
      { title: "Expanded customer reach by 35%." },
      { title: "Increased brand awareness by 15%." },
    ],
    tech: [
      "express",
      "node",
      "react",
      "mongo",
      "mongoose",
      "tailwind",
      "rrd",
      "js",
      "mern",
    ],
    techIcon: [
      Express,
      Node,
      React,
      Mongo,
      Mongoose,
      Tailwind,
      Rrd,
      Js,
      Ts,
      Next,
      Mysql,
      BootStrap,
      Html,
      Css,
    ],

    link: "https://chat-web-app-guai.onrender.com/",
    image: ChatWebApp,
    github: "https://github.com/saied83/fashion-fizz",
    featured: true,
  },
  {
    title: "InstaFood",
    results: [
      {
        title: "InstaFood is a MERN stack project. ",
      },
      { title: "Allows users to order food from menu." },
      { title: "Menu catalog with filtering options." },
    ],
    tech: ["react", "tailwind", "rrd", "frontend"],
    techIcon: [React, Tailwind, Rrd, Js, Html, Css],
    link: "https://instafood-saied83.vercel.app/",
    image: InstaFood,
    github: "https://github.com/saied83/fashion-fizz",
    featured: true,
  },
  {
    title: "Job Finder",
    results: [
      {
        title: "User can create, add delete jobs ",
      },
      { title: "Use MySQL database to store data" },
      { title: "this is a MyERN stack project" },
    ],
    tech: [
      "node",
      "sql",
      "express",
      "react",
      "tailwind",
      "rrd",
      "frontend",
      "backend",
    ],
    techIcon: [Express, Node, React, Tailwind, Rrd, Js, Mysql, Html, Css],
    link: "https://github.com/saied83/find-your-dream-job-frontend",
    image: FindYourDreamJob,
    github: "https://github.com/saied83/fashion-fizz",
    featured: false,
  },
  {
    title: "Recipe Finder",
    results: [
      {
        title: "Search any recipe and add to favorite",
      },
      { title: "State is managed by context-api" },
      { title: "User can find recipe via youtube search query" },
    ],
    tech: ["react", "tailwind", "rrd", "frontend"],
    techIcon: [React, Tailwind, Rrd, Js, Html, Css],
    link: "https://recipe-finder-saied83.vercel.app/",
    image: RecipeFinder,
    github: "https://github.com/saied83/fashion-fizz",
    featured: false,
  },
];

interface ObjectOfArray {
  title: string;
  result: Array<{
    title: string;
  }>;
  tech: string[];
  techIcon: React.ElementType[];
  link: string;
  image: React.ElementType;
  github: string;
  featured: boolean;
}

export const ProjectsSection = () => {
  const [menu, setMenu] = useState(true);
  const [value, setValue] = useState("react");
  // @ts-ignore
  const [filterProjects, setFilterProjects] = useState([]);

  const setProjects = () => {
    let updateProject = portfolioProjects.slice();
    if (menu) {
      updateProject = updateProject.filter((item) => item.featured === true);
    } // @ts-ignore
    setFilterProjects(updateProject);
  };

  useEffect(() => {
    setProjects();
  }, [menu]);

  useEffect(() => {
    let updateProject = portfolioProjects.slice();
    updateProject = updateProject.filter((item) => item.tech.includes(value));
    // @ts-ignore
    setFilterProjects(updateProject);
  }, [value]);

  return (
    <section className="pb-16 mx-12 lg:py-24" id="project">
      <div className="container-sm mx-auto">
        <SectionHeader
          title="My Projects"
          eyebrow="Real-world Results"
          description="See how I transformed concepts into engaging digital experiences."
        />
        <hr className="w-full h-[1px] border-none bg-gray-300/40 mt-6 md:mt-6 lg:mt-12" />

        <div className="flex flex-col  mt-10 md:mt-20  gap-16">
          {/* Filter  */}
          <div className=" sticky top-16 mt-4 -mb-10 inline-flex justify-between">
            <div className="flex gap-2 p-0.5 border-white/15 ">
              <p
                onClick={() => setMenu((prev) => !menu)}
                className={`px-4 py-1   text-sm cursor-pointer   backdrop-blur rounded-lg
                  ${
                    menu === true
                      ? " bg-white text-gray-900"
                      : "border border-gray-400 bg-white/10"
                  }
                `}
              >
                Featured
              </p>

              <p
                onClick={() => setMenu((prev) => !menu)}
                className={`px-4 py-1   text-sm cursor-pointer   backdrop-blur rounded-lg
                  ${
                    menu === false
                      ? " bg-white text-gray-900"
                      : "border border-gray-400 bg-white/10"
                  }
                `}
              >
                All
              </p>
            </div>
            <select
              onChange={(e) => setValue(e.target.value)}
              name=""
              id=""
              className="text-black rounded-md px-[10px] py-1 text-sm"
            >
              <option
                className="bg-white/10 backdrop-blur text-black py-0.5 px-2 rounded-sm border-b-2 border-gray-400"
                value="react"
              >
                Reactjs
              </option>
              <option
                className="bg-white/10 backdrop-blur text-black py-0.5 px-2 rounded-sm border-b-2 border-gray-400"
                value="next"
              >
                Nextjs
              </option>
              <option
                className="bg-white/10 backdrop-blur text-black py-0.5 px-2 rounded-sm border-b-2 border-gray-400"
                value="mern"
              >
                MERN
              </option>
              <option
                className="bg-white/10 backdrop-blur text-black py-0.5 px-2 rounded-sm border-b-2 border-gray-400"
                value="frontend"
              >
                Front-end
              </option>
              <option
                className="bg-white/10 backdrop-blur text-black py-0.5 px-2 rounded-sm border-b-2 border-gray-400"
                value="backend"
              >
                Back-end
              </option>
            </select>
          </div>
          {filterProjects.map((project, index) => {
            return (
              <Card
                key={project.title}
                className="sticky lg:px-20 lg:pt-16 md:px-10 md:pt-12 pb-0 pt-8 px-8 "
                style={{
                  top: `calc(${110 + index * 30}px)`,
                }}
              >
                <div
                  className="absolute inset-0 -z-10 opacity-5"
                  style={{
                    backgroundImage: `url(${grainImage.src})`,
                  }}
                ></div>
                <div className="flex flex-col-reverse gap-10 lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16 pb-8">
                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold gap-2 uppercase tracking-widest text-sm text-transparent bg-clip-text">
                      <h3 className="font-serif text-2xl md:text-4xl md:mb-2  ">
                        {project.title}
                      </h3>
                    </div>

                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <ul className="hidden md:flex flex-col gap-2 mt-4 md:mt-5">
                      {project.results.map((result) => (
                        <li
                          key={result.title}
                          className="flex gap-2 text-sm text-white/50 md:text-base "
                        >
                          <CheckIcon className="size-5 md:size-6" />
                          <span>{result.title}</span>
                        </li>
                      ))}
                    </ul>
                    {/* Technology icons  */}
                    <div className="flex flex-wrap gap-2  mt-8 sm:mt-4 text-md sm:text-base ">
                      {project.techIcon.map((item, index) => (
                        <TechIcon
                          className="size-6 md:size-8 md:mt-6"
                          key={index}
                          component={item}
                        />
                      ))}
                    </div>
                    <a href={project.link}>
                      <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-8">
                        <span>Visit Live Site</span>
                        <ArrowUpRightIcon className="size-4" />
                      </button>
                    </a>
                  </div>
                  <div className="w-full">
                    <Image
                      className="rounded-lg   -my-4 aspect-auto md:-mb-0 lg:mt-0
                      lg:absolute lg:h-full md:w-auto lg:max-w-none"
                      src={project.image}
                      alt={project.title}
                    />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
