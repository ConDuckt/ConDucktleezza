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
            className="ml-3 text-xl hover:text-gray-500"
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
            className="mr-5 text-white hover:text-gray-500"
            onClick={() => handleClick("Skills")}
          >
            Skills
          </a>
        </nav>
        <a
          href="#contact"
          className="text-lime-500 inline-flex items-center bg-neutral-800 border-0 py-1 px-3 focus:outline-none hover:bg-lime-900 rounded text-base mt-4 md:mt-0"
          onClick={() => handleClick("Contact")}
        >
          Contact
        </a>
      </div>
    </header>
  );
}


