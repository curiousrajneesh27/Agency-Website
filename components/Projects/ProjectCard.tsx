import React from "react";
import { ArrowUpRight } from "lucide-react";

type ProjectCardProps = {
  project: {
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
    link: string;
  };
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group select-none bg-slate-800/30 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-cyan-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:scale-[1.02] cursor-default h-full flex flex-col">
      {/* Image with gradient overlay */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-80" />
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-3 text-white">
          {project.title}
        </h3>
        <p className="text-slate-300 mb-4 flex-grow">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-cyan-900/30 text-cyan-400 text-xs font-medium rounded-full border border-cyan-400/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-between px-4 py-2.5 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-400/20 text-cyan-400 rounded-lg transition-all duration-300 hover:border-cyan-400/40 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-violet-500/20 hover:text-white group/button"
        >
          <span>View Project</span>
          <ArrowUpRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
