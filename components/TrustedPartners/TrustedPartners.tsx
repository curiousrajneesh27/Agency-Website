import { ChevronRight, Sparkles } from "lucide-react";

const TrustedPartners: React.FC = () => {
  const partners = [
    { name: "Company 1", logo: "/Ayush Realtors.jpg" },
    { name: "Company 2", logo: "/Dentist.png" },
    { name: "Company 3", logo: "/R D Group.png" },
    { name: "Company 4", logo: "/voltsec_io_logo.jpg" },
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="partners"
      className="relative py-24 bg-slate-900  overflow-hidden"
    >
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-900/30 overflow-hidden">
        {/* Animated particles */}
        <div className="absolute inset-0 opacity-15">
          <div className="particles"></div>
        </div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
        {/* Diagonal pattern overlay */}
        <div className="absolute inset-0 opacity-5 bg-diagonal-pattern"></div>
      </div>

      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"></div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-cyan-400" />
            <span className="text-sm font-medium">Trusted Partnerships</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-white">
              Our Esteemed Partners
            </span>
          </h2>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Collaborating with industry leaders to deliver exceptional results
          </p>
        </div>

        {/* Partners grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl bg-slate-800/30 border border-white/5 hover:border-cyan-400/30 transition-all duration-300 hover:bg-slate-800/50 hover:shadow-lg hover:shadow-cyan-500/20 backdrop-blur-sm"
            >
              <div className="flex items-center justify-center h-20">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100"
                />
              </div>
              <div className="absolute inset-0 rounded-xl border border-white/5 pointer-events-none"></div>
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 rounded-xl shadow-[inset_0_0_15px_rgba(34,211,238,0.2)]"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 py-3.5 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30"
          >
            Become a Partner
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-slate-300">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></div>
            <span className="text-sm">50+ Satisfied Partners</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-blue-400 animate-pulse"></div>
            <span className="text-sm">Global Network</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></div>
            <span className="text-sm">5+ Years of Collaboration</span>
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
      `}</style>
    </section>
  );
};

export default TrustedPartners;
