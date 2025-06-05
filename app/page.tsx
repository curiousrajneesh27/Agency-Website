"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
// Update the import path and/or filename casing/extension if necessary
import Hero from "../components/Hero/Hero"; // <-- Make sure this path and casing matches your file system, e.g. './components/Hero/hero', './components/Hero/Hero.tsx', etc.
import TrustedPartners from "../components/TrustedPartners/TrustedPartners";
import Services from "../components/Services/Services";
import Projects from "../components/Projects/Projects"; // Add this import

import Testimonials from "../components/Testimonials/Testimonials";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight &&
          sectionId
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans bg-slate-50 text-slate-800">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <TrustedPartners />
        <Services />
        <Projects /> {/* Add Projects section here */}
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
