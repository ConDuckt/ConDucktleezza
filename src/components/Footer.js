import React from "react";

function Footer() {
    return (
      <footer className="bg-neutral-900 py-10">
        <div className="container mx-auto flex items-center justify-center">
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/ConDuckt" target="_blank">
              <img
                className="object-cover object-center rounded"
                alt="GitHub"
                src="./github.svg"
                style={{ width: '50px', height: '50px' }}
              />
            </a>
            <a href="https://www.linkedin.com/in/andr%C3%A9s-mir%C3%B3-10b67565/" target="_blank">
              <img
                className="object-cover object-center rounded"
                alt="LinkedIn"
                src="./linkedin.svg"
                style={{ width: '50px', height: '50px' }}
              />
            </a>
            <a href="https://twitter.com/Con_Duckt" target="_blank">
              <img
                className="object-cover object-center rounded"
                alt="Twitter"
                src="./twitter.svg"
                style={{ width: '50px', height: '50px' }}
              />
            </a>
          </div>
        </div>
      </footer>
    );
  }

  export default Footer;