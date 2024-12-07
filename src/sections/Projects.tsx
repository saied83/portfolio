// @ts-nocheck
"use client";
import Js from "@/assets/icons/square-js.svg";
import Html from "@/assets/icons/html5.svg";
import Css from "@/assets/icons/css3.svg";
import Github from "@/assets/icons/github.svg";
import React from "@/assets/icons/react.svg";
import fashionFizz from "@/assets/images/fashion-fizz.png";
import ChatWebApp from "@/assets/images/chat-web-app.png";
import InstaFood from "@/assets/images/instafood.png";
import Tailwind from "@/assets/icons/tailwindcss.svg";
import BootStrap from "@/assets/icons/bootstrap-svgrepo-com.svg";
import StudentInfo from "@/assets/images/student.png";
import Weather from "@/assets/images/weather.png";
import LoginSignup from "@/assets/images/login.png";
import Slider from "@/assets/images/slider.png";
import NewYear from "@/assets/images/slider.png";
import Portfolio from "@/assets/images/portfolio.png";

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
import Redux from "@/assets/icons/redux-store.svg";
import tarsUniverse from "@/assets/images/tarsuniverse.png";

const portfolioProjects = [
  {
    title: "Tars Universe",
    results: [
      { title: "Create content, Explore & interact" },
      {
        title: "Real-time notifications,Manage connections",
      },
      { title: "Web Socket for messaging." },
      { title: "Implement Redux for state management." },
    ],
    tech: ["react", "redux", "tailwind", "rrd", "js", "frontend"],
    techIcon: [React, Redux, Tailwind, Rrd, Js, Css, Html],
    link: "https://tarsuniverse.com",
    image: tarsUniverse,
    // github: "https://github.com/saied83/fashion-fizz",
    featured: true,
  },
  {
    title: "Fashion fizz",
    results: [
      { title: "A modern e-commerce clothing website." },
      { title: "User authentication  using Context API." },
      { title: "Client-side routing using React Router." },
    ],
    tech: ["react", "tailwind", "rrd", "js", "frontend"],
    techIcon: [React, Tailwind, Rrd, Js, Css, Html],
    link: "https://fashion-fizz.vercel.app",
    image: fashionFizz,
    github: "https://github.com/saied83/fashion-fizz",
    featured: true,
  },
  {
    title: "My Portfolio",
    results: [
      { title: "A modern portfolio website build with Next.js." },
      { title: "Solar system animation with tailwindCSS" },
      { title: "Client and server-side generation page" },
    ],
    tech: ["next", "react", "tailwind", "ts", "frontend"],
    techIcon: [Next, React, Tailwind, Ts, Css, Html],
    link: "https://portfolio-saied83.vercel.app/",
    image: Portfolio,
    github: "https://github.com/saied83/portfolio",
    featured: true,
  },
  {
    title: "Chat Web App",
    results: [
      { title: "Real-time messaging web app." },
      { title: "Build with socket.io with notification sound." },
      { title: "Store and Manage data with mongoDB" },
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
    github: "https://github.com/saied83/chat-web-app",
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
    github: "https://github.com/saied83/instafood",
    featured: true,
  },
  {
    title: "Job Finder",
    results: [
      {
        title: "User can create, add delete jobs ",
      },
      { title: "Use MySQL database to store data" },
      { title: "Routing with react-router-dom" },
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
    github: "https://github.com/saied83/find-your-dream-job-backend",
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
    github: "https://github.com/saied83/recipe-finder",
    featured: false,
  },
  {
    title: "Student Info Server",
    results: [
      {
        title: "Get Student Information with Rest API",
      },
      { title: "CRUD operation managed with MySQL" },
      { title: "Used Express.js for the backend" },
    ],
    tech: ["express", "Mysql", "node", "backend"],
    techIcon: [Mysql, Express, Node, Tailwind, Rrd, Js, Html, Css],
    link: "https://github.com/saied83/student-info-server",
    image: StudentInfo,
    github: "https://github.com/saied83/student-info-server",
    featured: false,
  },
  {
    title: "Weather App",
    results: [
      {
        title: "Get weather information by city name.",
      },
      { title: "Used weather api with fetch" },
      { title: "Deploy on netlify" },
    ],
    tech: ["html", "css", "js"],
    techIcon: [Js, Html, Css],
    link: "https://weater-app-saied83.netlify.app/",
    image: Weather,
    github: "https://github.com/saied83/weather-app",
    featured: false,
  },
  {
    title: "Login Signup Page",
    results: [
      {
        title: "Build Login and Signup page with HTML and CSS",
      },
      { title: "Add vanilla JavaScript to add Functionality" },
      { title: "Deploy on Github" },
    ],
    tech: ["html", "css", "js"],
    techIcon: [Js, Html, Css],
    link: "https://saied83.github.io/login-signup-page/",
    image: LoginSignup,
    github: "https://github.com/saied83/login-signup-page",
    featured: false,
  },
  {
    title: "Slider",
    results: [
      {
        title: "Build Slider with HTML and CSS",
      },
      { title: "Add vanilla JavaScript to add Functionality" },
      { title: "Animate through vanilla CSS" },
    ],
    tech: ["html", "css", "js"],
    techIcon: [Js, Html, Css],
    link: "https://saied83.github.io/slider-js/",
    github: "https://github.com/saied83/slider-js",
    image: Slider,
    featured: true,
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
  const [value, setValue] = useState("react");
  const [filterProjects, setFilterProjects] = useState([]);

  useEffect(() => {
    let updateProject = portfolioProjects.slice();
    updateProject = updateProject.filter((item) => item.tech.includes(value));

    setFilterProjects(updateProject);
  }, [value]);

  return (
    <section className="py-16 pt-12 lg:py-24 lg:pt-20" id="project">
      <div className="container mx-auto">
        <SectionHeader
          title="My Projects"
          eyebrow="Real-world Results"
          description="See how I transformed concepts into engaging digital experiences."
        />
        <hr className="w-auto mx-16 h-[1px] border-none bg-gray-300/40 mt-6 md:mt-6 lg:mt-12" />

        <div className="flex flex-col  mt-10 md:mt-20  gap-16">
          {/* Filter  */}
          <div className=" sticky top-16 mt-4 -mb-10 inline-flex justify-between md:mx-8 md:-mt-16">
            <div className="flex gap-2 p-0.5 border-white/15 ">
              <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                All Projects
              </p>
            </div>
            <select
              onChange={(e) => setValue(e.target.value)}
              name=""
              id=""
              className="text-black rounded-md px-2 md:px-[10px] py-1 text-sm"
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
                    <div className="inline-flex mt-8 gap-8 items-center">
                      <a href={project.link} target="_blank">
                        <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 md:w-auto px-8">
                          <span>Live Site</span>
                          <ArrowUpRightIcon className="size-4" />
                        </button>
                      </a>
                      {project.github && (
                        <a href={project.github} target="_blank">
                          <button className="bg-white text-gray-950 size-12 flex items-center justify-center  rounded-lg ">
                            <Github className="size-8" />
                          </button>
                        </a>
                      )}
                    </div>
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
