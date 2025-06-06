import React from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Dr. Manoj Kumar",
    role: "CEO Dream smile dental (USA)",
    content:
      "Working with this team has been a game-changer. Their professionalism, creativity, and dedication to quality truly impressed me. They not only understood our vision but transformed it into a digital experience that reflects the values of Dream Smile Dental. Highly recommended for anyone looking to take their brand to the next level.",
    rating: 5,
  },
  {
    id: 2,
    name: "Adarsh Singh",
    role: "Co-founder of Ayush Realtors",
    content:
      "Partnering with this team was one of the best decisions for our real estate brand. Their ability to understand our business needs and deliver a sleek, user-friendly digital platform was truly impressive. The results speak for themselves — increased visibility, better client engagement, and a stronger online presence. We highly recommend them to any business aiming to grow digitally.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ayush Singh",
    role: "Founder: Ayush Realtors MUMBAI",
    content:
      "The entire process was smooth and professional. From design to execution, everything was handled with precision. Our brand now has a digital identity we’re proud of. Their dedication and creative vision truly stand out.",
    rating: 4,
  },
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = React.useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section
      id="testimonials"
      className="relative py-20 bg-gradient-to-br from-slate-900 to-indigo-900"
    >
      {/* Gradient Top Separator - Updated to match Projects section */}
      <div className="absolute top-0 left-0 right-0 h-1 inset-0 bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-30"></div>

      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-5 bg-grid-pattern"></div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header - Minimalist */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-300">
              Trusted by Our Clients
            </span>
          </h2>
          <p className="text-slate-300 max-w-lg mx-auto">
            What our partners say about working with us
          </p>
        </div>

        {/* Testimonial Card - Clean Layout */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-slate-800/40 backdrop-blur-sm border border-white/5 rounded-xl p-8 md:p-10 overflow-hidden">
            {/* Decorative Corner Accent */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-400/10 rounded-bl-full"></div>

            <div className="relative z-10">
              {/* Rating */}
              <div className="flex justify-center mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonials[current].rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-slate-600"
                    }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <Quote className="mx-auto h-6 w-6 text-cyan-400/30 mb-6" />
              <p className="text-lg text-slate-200 text-center mb-8 leading-relaxed px-4">
                "{testimonials[current].content}"
              </p>

              {/* Author */}
              <div className="text-center">
                <h4 className="text-xl font-semibold text-white">
                  {testimonials[current].name}
                </h4>
                <p className="text-slate-400 mt-1">
                  {testimonials[current].role}
                </p>
              </div>
            </div>

            {/* Navigation - Subtle */}
            <div className="flex justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === current ? "w-6 bg-cyan-400" : "w-3 bg-slate-600"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
