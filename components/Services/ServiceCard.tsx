import React, { useState } from "react";
import {
  Code,
  Smartphone,
  Headphones,
  BarChart3,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  details: string;
  delay: number;
}

const iconElements: Record<string, React.ReactElement> = {
  Code: <Code className="h-8 w-8 text-cyan-400" />,
  Smartphone: <Smartphone className="h-8 w-8 text-cyan-400" />,
  Headphones: <Headphones className="h-8 w-8 text-cyan-400" />,
  BarChart3: <BarChart3 className="h-8 w-8 text-cyan-400" />,
  ShieldCheck: <ShieldCheck className="h-8 w-8 text-cyan-400" />,
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  details,
  delay,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconElement = iconElements[icon];

  return (
    <div
      className="select-none bg-slate-800/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:scale-[1.02] cursor-default animate-fadeInUp"
      style={{
        animationDelay: `${delay}s`,
      }}
      onMouseDown={(e) => e.preventDefault()}
    >
      <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg bg-white/5">
        {IconElement}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-300 mb-4">{description}</p>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors select-none"
        onMouseDown={(e) => e.preventDefault()}
      >
        {isExpanded ? "Show Less" : "Learn More"}
        {isExpanded ? (
          <ChevronUp className="ml-1 h-4 w-4" />
        ) : (
          <ChevronDown className="ml-1 h-4 w-4" />
        )}
      </button>

      <div
        className={`mt-4 text-slate-300 text-sm leading-relaxed overflow-hidden transition-all duration-300 select-none ${
          isExpanded ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p>{details}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
