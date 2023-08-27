import React, { useState, useEffect } from "react";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import NavBar from "../components/navbar/NavBar";
import Resume from "../components/resume/Resume";
import Skills from "../components/skills/Skills";
import Work from "../components/work/Work";

const Home = () => {
  const [theme, setTheme] = useState('light')

  
  
  return (
    <>
      <NavBar theme={theme} setTheme={setTheme}/>
      <Hero theme={theme}/>
      <Skills />
      <Work />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
