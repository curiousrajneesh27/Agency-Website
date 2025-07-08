import React from "react";
import {
  Code,
  Linkedin,
  Instagram,
  Twitter,
  Mail,
  MessageCircle,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-slate-900 pt-20 pb-12 overflow-hidden z-50">
      {/* Background elements matching hero */}
      <div className="absolute inset-0 opacity-10">
        <div className="particles"></div>
      </div>
      <div className="absolute inset-0 opacity-5 bg-grid-pattern"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <div>
            <div className="flex items-center mb-6">
              <Code className="h-7 w-7 text-cyan-400" />
              <span className="ml-3 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-300">
                CODEAURA
              </span>
            </div>
            <p className="text-slate-300 mb-8 text-lg">
              Transforming ideas into scalable digital solutions with
              cutting-edge technology.
            </p>

            <div className="flex space-x-5">
              <a
                href="https://www.linkedin.com/company/codeaura-technologies/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-cyan-400 transition-all transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/itscodeaura_agency?igsh=amd4Y3h5cWk4bnJ3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-violet-400 transition-all transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/https:/https://x.com/Codeauratechno"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-sky-400 transition-all transform hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* About column */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white flex items-center">
              <Sparkles className="h-5 w-5 text-cyan-400 mr-2" />
              About Us
            </h3>
            <ul className="space-y-4">
              {["Company", "Mission", "Careers", "Blog"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-300 hover:text-cyan-400 transition-colors text-lg flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links column */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white flex items-center">
              <Sparkles className="h-5 w-5 text-violet-400 mr-2" />
              Quick Links
            </h3>
            <ul className="space-y-4">
              {["Services", "Products", "Testimonials", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-slate-300 hover:text-violet-400 transition-colors text-lg flex items-center group w-full text-left"
                    >
                      <ArrowRight className="h-4 w-4 mr-2 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">
              Connect With Us
            </h3>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <ul className="space-y-5">
                <li className="flex items-start">
                  <Mail className="h-5 w-5 text-cyan-400 mt-1 mr-3 flex-shrink-0" />
                  <a
                    href="mailto:codeauratechnologies@gmail.com"
                    className="text-slate-300 hover:text-cyan-400 transition-colors text-base md:text-lg break-words"
                  >
                    codeauratechnologies@gmail.com
                  </a>
                </li>
                <li className="flex items-start">
                  <MessageCircle className="h-5 w-5 text-violet-400 mt-1 mr-3 flex-shrink-0" />
                  <a
                    href="https://wa.me/9565245755"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-violet-400 transition-colors text-base md:text-lg)"
                  >
                    +91 956524575
                  </a>
                </li>
              </ul>

              <button
                className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-cyan-500/20 hover:shadow-violet-500/30"
                onClick={() => scrollToSection("contact")}
              >
                Get Free Consultation
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-base mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Codeaura Technologies. All
              rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-slate-400 hover:text-cyan-400 text-base transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-violet-400 text-base transition-colors"
              >
                Terms of Service
              </a>
            </div>
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
      `}</style>
    </footer>
  );
};

export default Footer;