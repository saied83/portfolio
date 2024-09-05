import fashionFizz from "@/assets/images/fashion-fizz.png";
import ChatWebApp from "@/assets/images/chat-web-app.png";
import InstaFood from "@/assets/images/instafood.png";
import FindYourDreamJob from "@/assets/images/find-your-dream-job.png";
import RecipeFinder from "@/assets/images/recipe-finder.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import Card from "@/components/Card";

const getRandomColor = () => {
  const colorClass = [
    "blue-text-gradient",
    "pink-text-gradient",
    "orange-text-gradient",
    "green-text-gradient",
    "purple-text-gradient",
    "teal-text-gradient",
    "yellow-text-gradient",
  ];
  const index = Math.round(Math.random() * (colorClass.length - 1));
  return colorClass[index];
};

const portfolioProjects = [
  {
    title: "Fashion fizz",
    results: [
      { title: "A modern e-commerce clothing website." },
      { title: "User authentication  using Context API." },
      { title: "Client-side routing using React Router." },
    ],
    tech: ["reactjs", "tailwindcss", "context-api"],
    link: "https://fashion-fizz.vercel.app",
    image: fashionFizz,
  },
  {
    title: "Chat App",
    results: [
      { title: "Real-time messaging web app." },
      { title: "Expanded customer reach by 35%." },
      { title: "Increased brand awareness by 15%." },
    ],
    tech: [
      "expressjs",
      "nodejs",
      "reactjs",
      "mongodb",
      "mongoose",
      "tailwindcss",
    ],

    link: "https://chat-web-app-guai.onrender.com/",
    image: ChatWebApp,
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
    tech: ["reactjs", "tailwindcss", "context-api"],
    link: "https://instafood-saied83.vercel.app/",
    image: InstaFood,
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
      "nodejs",
      "mySQL",
      "expressjs",
      "reactjs",
      "tailwindcss",
      "mysql2",
      "authenication",
    ],
    link: "https://github.com/saied83/find-your-dream-job-frontend",
    image: FindYourDreamJob,
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
    tech: ["reactjs", "tailwindcss", "youtube-query"],
    link: "https://recipe-finder-saied83.vercel.app/",
    image: RecipeFinder,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 mx-12 lg:py-24" id="project">
      <div className="container-sm mx-auto">
        <SectionHeader
          title="Featured Projects"
          eyebrow="Real-world Results"
          description="See how I transformed concepts into engaging digital experiences."
        />

        <div className="flex flex-col  mt-10 md:mt-20  gap-16">
          {portfolioProjects.map((project, index) => {
            return (
              <Card
                key={project.title}
                className="sticky lg:px-20 lg:pt-16 md:px-10 md:pt-12 pb-0 pt-8 px-8 "
                style={{
                  top: `calc(${64 + index * 40}px)`,
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
                    <div className="flex flex-wrap  mt-8 sm:mt-4 text-md sm:text-base ">
                      {project.tech.map((item, index) => (
                        <p key={index} className={`${getRandomColor()} ml-2`}>
                          #<span>{item}</span>
                        </p>
                      ))}
                    </div>
                    <a href={project.link}>
                      <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-8">
                        <span>Visit Live Site</span>
                        <ArrowUpRightIcon className="size-4" />
                      </button>
                    </a>
                  </div>
                  <div>
                    <Image
                      className="rounded-lg w-[200px] md:w-full -my-4 aspect-auto md:-mb-0 lg:mt-0
                      lg:absolute lg:h-full lg:w-auto lg:max-w-none"
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
