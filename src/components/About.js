import { useState, useEffect } from 'react';

export default function About() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isObieVisible, setIsObieVisible] = useState(true);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleImageClick = () => {
    setIsObieVisible(false);
  };

  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Andres.
            <br className="hidden lg:inline-block" /> Welcome to my homepage.
          </h1>
          <p className="mb-2 leading-relaxed">
            I'm an aspiring web developer based in Chicago. 
          </p>
          <p className="mb-2 leading-relaxed">
            That's me on the far right. The dog's name is Obie.
          </p>
          <p className="mb-4 leading-relaxed">
            Don't worry, he's just here for the intro.
          </p>
          <div className="flex justify-center">
            <a
              href="#projects"
              className="inline-flex text-white bg-rose-500 border-0 py-2 px-6 focus:outline-none hover:bg-rose-900 hover:text-white rounded text-lg"
            >
              See My Stuff
            </a>
            <a
              href="#contact"
              className="ml-4 inline-flex text-white bg-lime-500 border-0 py-2 px-6 focus:outline-none hover:bg-lime-900 rounded text-lg"
            >
              Help Me Help You
            </a>
          </div>
          {isObieVisible && (
            <img
              id="obie-image"
              className="object-cover object-center rounded"
              alt="This is Obie. He's precious"
              src="./obie.png"
              style={{
                width: '200px',
                height: '150px',
                position: 'absolute',
                top: `${cursorPosition.y}px`,
                left: `${cursorPosition.x}px`,
              }}
              onClick={handleImageClick}
            />
          )}
        </div>
        <div className="order-first md:order-last">
          <img
            className="object-cover object-center rounded"
            alt="A perfectly acceptable Illinois DMV mugshot."
            src="./andres.svg"
            style={{ width: '200px', height: '300px' }}
          />
        </div>
      </div>
    </section>
  );
}