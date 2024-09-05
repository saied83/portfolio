"use client";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import Link from "next/link";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-0 z-[100]" id="contact">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 rounded-3xl text-center px-10 relative md:text-left overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row md:gap-16 gap-8 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-small mt-2">
                Ready to bring your next project to life? Let&apos;s connect and
                discuss how I can help you achieve your goals.
              </p>
            </div>

            <div className="">
              <Link
                href={"https://linkedin.com/in/saied83"}
                target="_blank"
                className="text-white gap-2 mt-4 md:mt-0 bg-gray-900 inline-flex items-center px-6 border  border-gray-900 h-12 rounded-xl "
              >
                <span className="font-semibold w-max ">Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
