import React from "react";

export default function Navbar({ setActiveComponent }) {
  const handleClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <header className="bg-neutral-950 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a
            href="#about"
            className="ml-3 text-xl text-gray-200 hover:text-gray-600"
            onClick={() => handleClick("About")}
          >
            ConDuckt
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a
            href="#projects"
            className="mr-5 text-rose-500 hover:text-rose-900"
            onClick={() => handleClick("Projects")}
          >
            Projects
          </a>
          <a
            href="#skills"
            className="mr-5 text-cyan-400 hover:text-cyan-800"
            onClick={() => handleClick("Skills")}
          >
            Skills
          </a>
          <a
          href="#contact"
          className="mr-5 text-lime-500 hover:text-lime-900"
          onClick={() => handleClick("Contact")}
        >
          Contact
        </a>
        </nav>
      </div>
    </header>
  );
}


