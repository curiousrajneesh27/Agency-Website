import React from "react";
import ServiceCard from "./ServiceCard";
import { Sparkles } from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      icon: "Code",
      title: "Software Development",
      description:
        "Custom solutions tailored to your unique business requirements",
      details:
        "We specialize in building scalable, maintainable software using modern stacks and clean architecture.",
    },
    {
      icon: "Smartphone",
      title: "Mobile App Development",
      description: "Cross-platform & native apps for iOS and Android",
      details:
        "We deliver engaging mobile apps using React Native and native stacks, optimized for speed and UX.",
    },
    {
      icon: "Headphones",
      title: "IT Consulting",
      description: "Strategic technology guidance that drives ROI",
      details:
        "We help businesses make informed tech decisions, from architecture audits to cloud migrations.",
    },
    {
      icon: "BarChart3",
      title: "Business Strategy",
      description: "Data-first insights for sustainable growth",
      details:
        "We fuse analytics with business models to unlock new market opportunities.",
    },
    {
      icon: "ShieldCheck",
      title: "Cyber Security",
      description: "Protect your digital fortress",
      details:
        "Our security team ensures your infrastructure is resilient against modern threats.",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-24 bg-gradient-to-br from-slate-900 to-indigo-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="particles"></div>
      </div>
      <div className="absolute inset-0 opacity-5 bg-grid-pattern"></div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-30"></div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-violet-400" />
            <span className="text-sm font-medium">Our Expertise</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-300">
              Transformative Services
            </span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Digital solutions crafted to elevate your brand and business
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              details={service.details}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
