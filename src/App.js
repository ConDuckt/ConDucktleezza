import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  const [activeComponent, setActiveComponent] = useState("About");

  const renderComponent = () => {
    switch (activeComponent) {
      case "About":
        return <About />;
      case "Projects":
        return <Projects />;
      case "Skills":
        return <Skills />;
      case "Contact":
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <main className="text-amber-200 bg-neutral-900 body-font">
      <Navbar setActiveComponent={setActiveComponent} />
      {renderComponent()}
    </main>
  );
}

export default App;
