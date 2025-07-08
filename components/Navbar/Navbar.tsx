import React, { useState, useEffect } from "react";
import { Menu, X, Code, Sparkles } from "lucide-react";

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "";
  };

  const scrollToSection = (sectionId: string) => {
    if (!isMounted) return;

    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Adjust for navbar height
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsMenuOpen(false);
    document.body.style.overflow = "";
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "partners", label: "Partners" }, // Added partners section
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },

    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0  z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/80 backdrop-blur-lg shadow-lg py-2 border-b border-white/10"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className="flex items-center group"
          >
            <div className="relative">
              <Code
                className={`h-8 w-8 ${
                  isScrolled ? "text-cyan-400" : "text-white"
                } group-hover:text-cyan-300 transition-colors`}
              />
              <Sparkles className="absolute -top-1 -right-1 h-3 w-3 text-violet-400 animate-pulse" />
            </div>
            <span
              className={`ml-2 text-xl font-bold ${
                isScrolled ? "text-white" : "text-white"
              } group-hover:text-cyan-300 transition-colors`}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-300">
                CodeAura Technologies 
              </span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-all duration-200 ${
                  isScrolled
                    ? activeSection === item.id
                      ? "text-cyan-400"
                      : "text-slate-300 hover:text-cyan-300"
                    : activeSection === item.id
                    ? "text-cyan-300"
                    : "text-white/80 hover:text-white"
                } relative group`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-cyan-400 transition-all duration-300 ${
                    activeSection === item.id
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </button>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <button
            className={`hidden md:block px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
              isScrolled
                ? "bg-gradient-to-r from-cyan-500 to-violet-600 text-white hover:from-cyan-400 hover:to-violet-500 shadow-lg hover:shadow-cyan-500/30"
                : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20"
            }`}
            onClick={() => scrollToSection("contact")}
          >
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg backdrop-blur-sm bg-white/10 border border-white/20"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 bg-gradient-to-b from-slate-900 to-violet-900/95 z-40 transition-transform duration-300 ease-in-out md:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ top: "72px" }}
        >
          <div className="p-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-5 py-3 rounded-lg text-base font-medium transition-colors ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-cyan-500/20 to-violet-600/20 text-cyan-300 border border-white/10"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-violet-600 text-white px-5 py-3.5 rounded-lg text-base font-medium hover:from-cyan-400 hover:to-violet-500 transition-all shadow-lg hover:shadow-cyan-500/30"
              onClick={() => scrollToSection("contact")}
            >
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
