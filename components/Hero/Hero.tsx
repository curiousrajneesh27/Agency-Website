import React, { useEffect, useState } from "react";
import { Mail, ArrowRight, ChevronsDown, Sparkles } from "lucide-react";

const Hero: React.FC = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      setShowScrollIndicator(scrollPosition < window.innerHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden px-4 sm:px-6"
    >
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-900 to-violet-900 overflow-hidden">
        {/* Animated particles */}
        <div className="absolute inset-0 opacity-10">
          <div className="particles"></div>
        </div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5 bg-grid-pattern"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-full mb-6 animate-fadeIn">
          <Sparkles className="h-4 w-4 text-violet-400" />
          <span className="text-sm font-medium">
            Award-Winning Digital Agency
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6 animate-fadeIn">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-300">
            Trusted Digital Partners
          </span>{" "}
          <br className="hidden sm:block" />
          For Visionary Businesses
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 animate-fadeIn delay-100">
          We combine cutting-edge technology with proven strategies to deliver
          exceptional results for our clients worldwide.
        </p>

        {/* Button group */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn delay-200">
          <button
            className="flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-cyan-500/20 hover:shadow-violet-500/30"
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
                setTimeout(() => {
                  const nameInput = document.querySelector(
                    '#contact input[name="name"]'
                  ) as HTMLInputElement;
                  nameInput?.focus();
                }, 800);
              }
            }}
          >
            Get Free Consultation
            <ArrowRight className="h-4 w-4" />
          </button>

          <button
            className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-95 backdrop-blur-sm"
            onClick={() => {
              const projectsSection = document.getElementById("testimonials");
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            See Client Success Stories
            <ChevronsDown className="h-4 w-4" />
          </button>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-slate-300 animate-fadeIn delay-300">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></div>
            <span className="text-sm">ISO 27001 Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-violet-400 animate-pulse"></div>
            <span className="text-sm">100+ Successful Projects</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></div>
            <span className="text-sm">5-Star Client Reviews</span>
          </div>
        </div>
      </div>

      {/* Floating Contact Button */}
      <a
        href="mailto:hello@yourcompany.com"
        className="fixed bottom-6 right-6 bg-gradient-to-br from-cyan-500 to-violet-600 text-white p-4 rounded-full shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-110 active:scale-95 z-50 group"
        aria-label="Contact us via email"
      >
        <Mail className="h-5 w-5 group-hover:animate-bounce" />
        <span className="absolute right-full top-1/2 transform -translate-y-1/2 mr-3 bg-white text-slate-900 text-xs font-medium px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
          Email Us
        </span>
      </a>

      {/* Scroll Indicator - Only shows when not scrolled down */}
      {showScrollIndicator && (
        <div className="fixed bottom-8 left-0 right-0 flex justify-center z-40">
          <button
            className="flex flex-col items-center animate-bounce-slow focus:outline-none"
            onClick={() =>
              document
                .getElementById("partners") // Changed to point to partners section
                ?.scrollIntoView({ behavior: "smooth" })
            }
            aria-label="Scroll to next section"
          ></button>
        </div>
      )}

      {/* Custom CSS */}
      <style>{`
        .particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E");
        }
        .bg-grid-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34h-2v-4h2v4zm0-6h-2v-4h2v4zm0-6h-2v-4h2v4zm-6 6h-4v-4h4v4zm0-6h-4v-4h4v4zm6 0h4v-4h-4v4zm-6 0h-4v-4h4v4zm0-6h-4V8h4v6zm-6 6h-2v-4h2v4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        @keyframes scrollIndicator {
          0% {
            transform: translateY(-10px);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(10px);
            opacity: 0;
          }
        }
        .animate-scrollIndicator {
          animation: scrollIndicator 2s infinite ease;
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
