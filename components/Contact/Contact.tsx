import React, { useState } from "react";
import { Mail, ArrowRight, Check, X } from "lucide-react";
import emailjs from "@emailjs/browser";

type FormData = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        "service_ba2cviv",
        "template_rcl0i9t",
        formData,
        "xs8fQH6t4dnC-1YG_"
      );

      setSubmitStatus({
        success: true,
        message:
          "Your message has been sent successfully! We'll respond within 24 hours.",
      });
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      console.error("Failed to send message:", error);
      setSubmitStatus({
        success: false,
        message:
          "Failed to send message. Please try again later or email us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-slate-900 overflow-hidden"
    >
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-violet-900/30 overflow-hidden">
        {/* Animated particles */}
        <div className="absolute inset-0 opacity-15">
          <div className="particles"></div>
        </div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
        {/* Diagonal pattern overlay */}
        <div className="absolute inset-0 opacity-5 bg-diagonal-pattern"></div>
      </div>

      {/* Gradient top border - matching Projects section */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"></div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-full mb-6">
            <Mail className="h-4 w-4 text-violet-400" />
            <span className="text-sm font-medium">Get In Touch</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-300">
              Ready to Transform
            </span>{" "}
            Your Business?
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your digital goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-xl animate-fadeIn delay-100">
            {submitStatus && (
              <div
                className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
                  submitStatus.success
                    ? "bg-green-900/30 text-green-100 border border-green-800/50"
                    : "bg-red-900/30 text-red-100 border border-red-800/50"
                }`}
              >
                {submitStatus.success ? (
                  <Check className="h-5 w-5 mt-0.5 text-green-400" />
                ) : (
                  <X className="h-5 w-5 mt-0.5 text-red-400" />
                )}
                <div>
                  <p className="font-medium">{submitStatus.message}</p>
                  {!submitStatus.success && (
                    <a
                      href="mailto:hello@codeaura.com"
                      className="inline-flex items-center gap-1 text-sm mt-1 text-cyan-300 hover:text-cyan-200"
                    >
                      Email us directly <ArrowRight className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-slate-800/50 border rounded-lg outline-none transition-all text-white placeholder-slate-400 ${
                      errors.name
                        ? "border-red-500/80 focus:ring-red-500/30"
                        : "border-white/10 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/30"
                    }`}
                    placeholder="John Doe"
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-400">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-slate-800/50 border rounded-lg outline-none transition-all text-white placeholder-slate-400 ${
                      errors.email
                        ? "border-red-500/80 focus:ring-red-500/30"
                        : "border-white/10 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/30"
                    }`}
                    placeholder="john@company.com"
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg outline-none transition-all focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/30 text-white placeholder-slate-400"
                    placeholder="Company Name"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 bg-slate-800/50 border rounded-lg outline-none transition-all text-white placeholder-slate-400 ${
                      errors.message
                        ? "border-red-500/80 focus:ring-red-500/30"
                        : "border-white/10 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/30"
                    }`}
                    placeholder="Tell us about your project..."
                    disabled={isSubmitting}
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-cyan-500/20 hover:shadow-violet-500/30 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 text-slate-300 animate-fadeIn delay-200">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Contact Information
              </h3>
              <p className="mb-6">
                Have questions or want to discuss a project? Reach out through
                our contact form or directly via the information below.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Email</h4>
                  <a
                    href="mailto:codeauratechnologies@gmail.com"
                    className="hover:text-cyan-300 transition-colors"
                  >
                    codeauratechnologies@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-violet-500/10 rounded-lg text-violet-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-white">Phone</h4>
                  <a
                    href="tel:+919565245755"
                    className="hover:text-cyan-300 transition-colors"
                  >
                    +91 9565245755
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="font-medium text-white mb-3">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/company/codeaura-technologies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/itscodeaura_agency?igsh=amd4Y3h5cWk4bnJ3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
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
        ::placeholder {
          color: rgba(255, 255, 255, 0.5) !important;
        }
        :-ms-input-placeholder {
          color: rgba(255, 255, 255, 0.5) !important;
        }
        ::-ms-input-placeholder {
          color: rgba(255, 255, 255, 0.5) !important;
        }
      `}</style>
    </section>
  );
};

export default Contact;
