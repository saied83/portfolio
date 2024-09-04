import darkSaasLandingPage from "@/assets/images/fashion-fizz.png";
import lightSaasLandingPage from "@/assets/images/chat-web-app.png";
import aiStartupLandingPage from "@/assets/images/instafood.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";

const portfolioProjects = [
  {
    title: "Fashion fizz",
    results: [
      { title: "A modern e-commerce clothing website." },
      { title: "User authentication and authorization using Context API." },
      { title: "Client-side routing using React Router." },
    ],
    link: "https://fashion-fizz.vercel.app",
    image: darkSaasLandingPage,
  },
  {
    title: "Chat App",
    results: [
      { title: "A real-time messaging web app built with the MERN Stack." },
      { title: "Expanded customer reach by 35%." },
      { title: "Increased brand awareness by 15%." },
    ],
    link: "https://chat-web-app-guai.onrender.com/",
    image: lightSaasLandingPage,
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
    link: "https://instafood-saied83.vercel.app/",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container ">
        <SectionHeader
          title="Featured Projects"
          eyebrow="Real-world Results"
          description="See how I transformed concepts into engaging digital experiences."
        />

        <div className="flex flex-col  mt-10 md:mt-20  gap-16">
          {portfolioProjects.map((project) => {
            return (
              <div
                key={project.title}
                className="bg-gray-800 rounded-3xl relative after:content-[''] after:absolute after:inset-0  z-0 after:z-10 overflow-hidden after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8  md:pt-12 md:px-10 after:pointer-events-none lg:pt-16 lg:px-20"
              >
                <div
                  className="absolute inset-0 -z-10 opacity-5"
                  style={{
                    backgroundImage: `url(${grainImage.src})`,
                  }}
                ></div>
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold gap-2 uppercase tracking-widest text-sm text-transparent bg-clip-text">
                      <h3 className="font-serif text-2xl md:text-4xl md:mb-2  ">
                        {project.title}
                      </h3>
                    </div>

                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
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
                    <a href={project.link}>
                      <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-8">
                        <span>Visit Live Site</span>
                        <ArrowUpRightIcon className="size-4" />
                      </button>
                    </a>
                  </div>
                  <div>
                    <Image
                      className="rounded-2xl mt-8 -mb-4 aspect-auto md:-mb-0 lg:mt-0
                      lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                      src={project.image}
                      alt={project.title}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
