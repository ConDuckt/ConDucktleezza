// import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-amber-200 bg-neutral-900 body-font">
        <div className="text-center  bg-neutral-950 rounded container px-5 py-10 mx-auto">
            {/* <ChipIcon className="w-10 inline-block mb-4" /> */}
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                Here It Is
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                My stuff, that is. These are some projects I worked on during my coding bootcamp. 
            </p>
        </div>
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20 bg-neutral-900 rounded">
        </div>

        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-neutral-900 bg-neutral-950 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-rose-500 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}