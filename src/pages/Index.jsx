import React, { useRef } from "react";
import Home from "./Home";
import Experience from "./Experience";
import MyTools from "./MyTools";
import Projects from "./Projects";
import Contact from "./Contact";

const Index = () => {
  const homeRef = useRef();
  const toolRef = useRef();
  const projectRef = useRef();
  const contactRef = useRef();

  const scrollToSection = (elementRef) => {
    // window.scrollTo({
    //   top: elementRef.current.scrollIntoView,
    //   behavior: "smooth",
    // });
    elementRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <ul>
        <li onClick={() => scrollToSection(homeRef)}>Home</li>
        <li onClick={() => scrollToSection(toolRef)}>Tools</li>
        <li onClick={() => scrollToSection(projectRef)}> Projects</li>
        <li onClick={() => scrollToSection(contactRef)}>Contact</li>
      </ul>
      <div ref={homeRef} className="">
        <Home />
      </div>
      <div ref={toolRef} className="pt-8 h-[100vh]">
        <MyTools />
      </div>
      <div ref={projectRef} className="pt-8">
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  );
};

export default Index;
