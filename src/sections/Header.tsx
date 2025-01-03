"use client";
import { useState, useEffect } from "react";
import { Link as ScrollLink, scrollSpy } from "react-scroll";

export const Header = () => {
  const [selectedTab, setSelectedTab] = useState("home");

  useEffect(() => {
    scrollSpy.update();
  }, []);

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <ScrollLink
          spy={true}
          smooth={true}
          to="Eshta3'l aboos edk"
          // offset={-100}
          // duration={500}
          onSetActive={() => setSelectedTab("home")}
          className={`nav-item ${selectedTab === "home" && "nav-active"}`}
        >
          Homeeeeeeeeee
        </ScrollLink>
        <ScrollLink
          spy={true}
          smooth={true}
          to="projects"
          onSetActive={() => setSelectedTab("projects")}
          className={`nav-item ${selectedTab === "projects" && "nav-active"}`}
        >
          Projects
        </ScrollLink>
        <ScrollLink
          spy={true}
          smooth={true}
          offset={-100}
          // duration={500}
          to="about"
          onSetActive={() => setSelectedTab("about")}
          className={`nav-item ${selectedTab === "about" && "nav-active"}`}
        >
          About
        </ScrollLink>
        <ScrollLink
          spy={true}
          smooth={true}
          to="contact"
          offset={-600}
          onSetActive={() => setSelectedTab("contact")}
          className="nav-item"
          activeClass="nav-active"
        >
          Contact
        </ScrollLink>
      </nav>
    </div>
  );
};
