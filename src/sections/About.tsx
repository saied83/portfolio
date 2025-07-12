"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import Card from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { CardHeader } from "@/components/CardHeader";
import ToolBoxItems from "@/components/ToolBoxItems";
import Reveal from "@/components/Reveal";

import StarIcon from "@/assets/icons/star.svg";
import Js from "@/assets/icons/square-js.svg";
import Html from "@/assets/icons/html5.svg";
import Css from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import Github from "@/assets/icons/github.svg";
import tailwind from "@/assets/icons/tailwindcss.svg";
import BootStrap from "@/assets/icons/bootstrap-svgrepo-com.svg";
import next from "@/assets/icons/nextjs-icon-svgrepo-com.svg";
import node from "@/assets/icons/node-dot-js-svgrepo-com.svg";
import rrd from "@/assets/icons/react-router-svgrepo-com.svg";
import webpack from "@/assets/icons/webpack.svg";
import redux from "@/assets/icons/redux-store.svg";
import Ts from "@/assets/icons/typescript-svgrepo-com.svg";
import vite from "@/assets/icons/vite-svgrepo-com.svg";
import turborepo from "@/assets/icons/turborepo.svg";
import pnpm from "@/assets/icons/pnpm.svg";
import npm from "@/assets/icons/npm.svg";
import netlify from "@/assets/icons/netlify.svg";
import tars from "@/assets/images/tars.jpeg";
import grainImage from "@/assets/images/grain.jpg";

const toolBoxFrontEndItems = [
  { title: "TypeScript", iconType: Ts },
  { title: "JavaScript", iconType: Js },
  { title: "React", iconType: ReactIcon },
  { title: "Redux", iconType: redux },
  { title: "Nextjs", iconType: next },
  { title: "Webpack", iconType: webpack },
  { title: "React-router", iconType: rrd },
  { title: "HTML5", iconType: Html },
  { title: "CSS3", iconType: Css },
  { title: "TailwindCSS", iconType: tailwind },
  { title: "BootStrap", iconType: BootStrap },
];

const toolBoxBackEndItems = [
  { title: "Nodejs", iconType: node },
  { title: "PNPM", iconType: pnpm },
  { title: "Vite", iconType: vite },
  { title: "Turborepo", iconType: turborepo },
  { title: "NPM", iconType: npm },
  { title: "Netlify", iconType: netlify },
  { title: "Git", iconType: Github },
];

const hobbies = [
  { hobby: "Relaxing", emoji: "🧘‍♀️", top: "5%", left: "5%" },
  { hobby: "Volunteering", emoji: "🤝", left: "20%", top: "35%" },
  { hobby: "Learning", emoji: "🧠", left: "60%", top: "5%" },
  { hobby: "Exploring", emoji: "🗺️", left: "70%", top: "45%" },
  { hobby: "Cooking", emoji: "🧑‍🍳", left: "5%", top: "65%" },
  { hobby: "Hiking", emoji: "🥾", left: "45%", top: "70%" },
];

export const AboutSection = () => {
  const constrainref = useRef(null);

  return (
    <div
      className="py-16 pt-12 lg:py-24 lg:pt-20 flex justify-center"
      id="about"
    >
      <div className="w-[90vw] md:w-[85vw] lg:max-w-[1024px]">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me"
        />

        <div className="mt-16 flex flex-col gap-6">
          {/* Who Am I Section */}
          <Reveal>
            <Card className="px-2 sm:p-6 md:p-16 lg:p-12 lg:pr-10 overflow-hidden">
              <div>
                <div className="inline-flex gap-2 items-center bg-gradient-to-r from-emerald-300 to-sky-400 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                  <StarIcon className="size-9 text-emerald-300" />
                  <h3 className="font-serif text-2xl md:text-3xl">Who Am I?</h3>
                </div>
                <div className="text-white/60 mt-4 text-justify flex flex-col gap-4 md:text-lg lg:text-xl">
                  <p className="text-white">
                    I'm a self-taught Frontend Developer currently working
                    full-time at TARS INDUSTRIES, where I lead the frontend
                    development of the TARS Universe Project — a large-scale
                    social networking platform built with a modular, monorepo
                    architecture.
                  </p>
                  <p>
                    I previously pursued a BSc in Computer Science at BRAC
                    University (CGPA 3.9) before transitioning into the industry
                    full-time. My academic background includes high performance
                    in courses like OOP, Data Structures, and DBMS, which
                    continue to influence my engineering mindset today.
                  </p>
                </div>
              </div>
            </Card>
          </Reveal>

          {/* Experience Section */}
          <Reveal width="100%">
            <Card className="p-6 md:p-16 lg:p-12 lg:pr-10 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-5 -z-10"
                style={{ backgroundImage: `url(${grainImage})` }}
              />
              <div className="inline-flex gap-2 items-center bg-gradient-to-r from-emerald-300 to-sky-400 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text pl-4">
                <StarIcon className="size-9 text-emerald-300" />
                <h3 className="font-serif text-2xl md:text-3xl">Experience</h3>
              </div>

              <div className="text-white/60 mt-4 text-justify flex flex-col gap-4 md:text-lg lg:text-xl">
                <div className="flex md:flex-row flex-col items-center gap-6 mt-2">
                  <Image
                    src={tars}
                    alt="tars"
                    className="w-24 h-24 object-top rounded-full"
                  />
                  <div className="flex flex-col gap-1 md:gap-3">
                    <p className="text-white text-[18px] md:text-[24px]">
                      Frontend Developer
                    </p>
                    <p className="text-[14px] md:text-[20px]">
                      October 10, 2024 – Present
                    </p>
                  </div>
                </div>

                <div className="w-full mt-2 md:mt-4 ml-3">
                  <p className="text-white">
                    I began my journey as an intern and quickly progressed to a
                    full-time position. At TARS INDUSTRIES, I’ve led the entire
                    frontend of the TARS Universe platform, responsible for:
                  </p>
                  <ul className="list-disc mt-4 md:pl-8 sm:pl-6 pl-4">
                    <li>
                      Building a social networking and e-commerce platform with
                      real-time messaging, user feeds, profiles, and
                      marketplace.
                    </li>
                    <li>
                      Architecting and maintaining a scalable monorepo using{" "}
                      <span className="text-white">Turborepo</span>,{" "}
                      <span className="text-white">Vite</span>,{" "}
                      <span className="text-white">Webpack</span>, and{" "}
                      <span className="text-white">pnpm</span>.
                    </li>
                    <li>
                      Developing real-time features using{" "}
                      <span className="text-white">WebSockets</span> for
                      messaging and notifications.
                    </li>
                    <li>
                      Creating performant and reusable UI components with{" "}
                      <span className="text-white">React</span>,{" "}
                      <span className="text-white">Redux Thunk</span>,{" "}
                      <span className="text-white">TypeScript</span>, and{" "}
                      <span className="text-white">TailwindCSS</span>.
                    </li>
                    <li>
                      Leading development with a focus on maintainability,
                      developer experience, and production-ready code.
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </Reveal>

          {/* Toolbox and Hobbies */}
          <div className="flex flex-col gap-6 md:grid md:grid-cols-2">
            <Card className="h-[320px] p-0 w-full">
              <CardHeader
                title="My ToolBox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences."
                className="px-6 pt-6 text-2xl md:text-3xl"
              />
              <ToolBoxItems
                toolboxItems={toolBoxFrontEndItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolBoxItems
                toolboxItems={toolBoxBackEndItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:30s]"
              />
            </Card>

            <Card className="h-[320px] p-0 flex flex-col w-full">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm"
                className="px-6 py-6"
              />
              <div className="relative flex-1 mb-10" ref={constrainref}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.hobby}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r rounded-full py-1.5 from-emerald-300 to-sky-400 absolute cursor-pointer"
                    style={{ left: hobby.left, top: hobby.top }}
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
