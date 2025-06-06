import React from "react";
import ProjectCard from "./ProjectCard";
import { Sparkles, ChevronRight } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link: string;
};

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Punekar Interior",
      description:
        "A modern interior design project focused on aesthetics, comfort, and functional elegance — crafted to transform spaces beautifully.",
      imageUrl: "/Interior design project 1.jpg",
      tags: ["React", "Javascript", "Node.js", "MongoDB", "Stripe"],
      link: "https://punekarinteriors.com/",
    },
    {
      id: 2,
      title: "The AI-native Data Security Platform",
      description:
        "Smart, fast, and adaptive — our AI-powered platform secures your data with real-time threat detection, encryption, and automated compliance",
      imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3",
      tags: ["TypeScript", "React", "Firebase", "JavaScript", "Tailwind CSS", "Framer Motion", "OpenAI API", "Node.js", "Express"],
      link: "https://www.cyera.com/",
    },
    {
      id: 3,
      title: "Rareplanet: Your Daily Essentials Hub",
      description:
        "Order all your home essentials in one place — from kitchen supplies to everyday household items. Fast delivery, wide variety, and hassle-free shopping right from your home!",
      imageUrl: "/Home essentials.webp",
      tags: ["React", "Javascript", "Node.js", "MongoDB", "Expressjs", "Stripe"],
      link: "https://rareplanet.com/",
    },
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="projects"
      className="relative py-24 bg-slate-900 overflow-hidden"
    >
      {/* Modern Gradient Background - Changed to different colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-900/30 overflow-hidden">
        {/* Animated particles - made slightly different */}
        <div className="absolute inset-0 opacity-15">
          <div className="particles"></div>
        </div>
        {/* Subtle grid pattern - increased opacity */}
        <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>

        {/* Added a subtle diagonal pattern overlay */}
        <div className="absolute inset-0 opacity-5 bg-diagonal-pattern"></div>
      </div>

      {/* Added a gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"></div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section header - updated styling */}
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-cyan-400" />
            <span className="text-sm font-medium">Our Work</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-300">
              See What We’ve Built.
            </span>
          </h2>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Explore how we’ve helped clients turn ideas into working products.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* CTA - updated gradient */}
        <div className="mt-20 text-center animate-fadeIn delay-200">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 py-3.5 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30"
          >
            Start a Project
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Trust indicators - updated colors */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-slate-300 animate-fadeIn delay-300">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></div>
            <span className="text-sm">50+ Successful Projects</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-blue-400 animate-pulse"></div>
            <span className="text-sm">Diverse Industries</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></div>
            <span className="text-sm">5+ Years of Experience</span>
          </div>
        </div>
      </div>

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
        .bg-diagonal-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20z' fill='%23ffffff' fill-opacity='0.02' fill-rule='evenodd'/%3E%3C/svg%3E");
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
        .animate-fadeIn.delay-100 {
          animation-delay: 0.1s;
        }
        .animate-fadeIn.delay-200 {
          animation-delay: 0.2s;
        }
        .animate-fadeIn.delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </section>
  );
};

export default Projects;
