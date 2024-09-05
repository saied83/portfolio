"use client";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import HeroOrbit from "@/components/HeroOrbit";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import Image from "next/image";
import logo from "@/assets/images/memoji-computer.png";
import { scrollToById } from "./Header";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:liner-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="hero-ring size-[620px]" />
        <div className="hero-ring size-[820px]" />
        <div className="hero-ring size-[1020px]" />
        <div className="hero-ring size-[1220px]" />
        <HeroOrbit
          shouldOrbit
          orbitDuration={"30s"}
          spinDuration={"6s"}
          size={430}
          rotation={-14}
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          shouldOrbit
          orbitDuration={"32s"}
          spinDuration={"6s"}
          size={440}
          rotation={79}
        >
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          shouldOrbit
          orbitDuration={"34s"}
          spinDuration={"6s"}
          size={520}
          rotation={-41}
        >
          <div className="size-2  rounded-full text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          shouldOrbit
          orbitDuration={"36s"}
          spinDuration={"6s"}
          size={530}
          rotation={178}
        >
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          shouldOrbit
          orbitDuration={"38s"}
          spinDuration={"6s"}
          size={550}
          rotation={20}
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          shouldOrbit
          orbitDuration={"40s"}
          spinDuration={"6s"}
          size={590}
          rotation={98}
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          shouldOrbit
          orbitDuration={"42s"}
          spinDuration={"6s"}
          size={650}
          rotation={-5}
        >
          <div className="size-2  rounded-full text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          shouldOrbit
          orbitDuration={"44s"}
          spinDuration={"6s"}
          size={710}
          rotation={144}
        >
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          shouldOrbit
          orbitDuration={"46s"}
          spinDuration={"6s"}
          size={720}
          rotation={85}
        >
          <div className="size-3  rounded-full text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          shouldOrbit
          orbitDuration={"48s"}
          spinDuration={"6s"}
          size={800}
          rotation={-72}
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={logo} className="size-[100px]" alt="saied" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects.
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 md:text-lg text-center text-white/60">
            Passionate and Self-driven Full Stack Web Developer specializing in
            turning design concepts into dynamic, user-friendly web
            applications. Explore my projects and technical skills.
          </p>
        </div>
        <div className="flex md:flex-row justify-center flex-col items-center mt-8 gap-4">
          <button
            onClick={() => scrollToById("project")}
            className="inline-flex items-center gap-2 border-white/15 border px-6 h-12 rounded-xl cursor-pointer z-[100]"
          >
            <span className="font-semibold ">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <Link
            href={"https://linkedin.com/in/saied83"}
            target="_blank"
            className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl cursor-pointer z-[100]"
          >
            <span>👋🏻</span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
