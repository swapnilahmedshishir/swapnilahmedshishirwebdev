import { useState } from "react";
import Hero from "./components/Hero";
import "./assets/css/index.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import { Route, Routes } from "react-router-dom";
import AboutMe from "./components/About";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  const [isOnePage] = useState(false);

  return (
    <>
      <Header />
      {/* Conditional Rendering */}
      {isOnePage ? (
        // One-Page Mode: Render all components together
        <>
          <Hero />
          <AboutMe />
          <Skills />
          <Experience />
          <Education />
          <Contact />
        </>
      ) : (
        // Router Mode: Use routes for navigation
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      )}

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </>
  );
}
