import { Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import "../../global.css";

// import ClickSpark from "../../components/ClickSpark";
// import AnimatedContent from "../../components/AnimatedContent";

export default function Hero() {
  const roles = [
    "UI/UX Designer",
    "Frontend Developer",
    "Backend Developer",
    "Quality Assurance",
    "Mobile Developer",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000); // ganti tiap 2 detik

    return () => clearInterval(interval);
  }, [roles.length]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  // Gunakan useCallback agar tidak bikin event listener baru tiap render
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const x = (e.clientX / window.innerWidth) * 20 - 10;
    const y = (e.clientY / window.innerHeight) * 20 - 10;
    setMousePosition({ x, y });
  }, []);

  useEffect(() => {
    setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]); // Tambahkan dependency

  // Data sosial biar lebih mudah di-maintain
  // Use full URLs (including protocol) so links open externally instead of routing locally
  const socialLinks = [
    { icon: Github, href: "https://github.com/aosy01", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/anno-siregar",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:annoderitman@gmail.com", label: "Email" },
  ];

  return (
    <section className="min-h-screen">
      <section
        className="min-h-screen flex items-start justify-center px-6 md:px-12 lg:px-24 relative overflow-hidden bg-cover bg-center pt-24"
        style={{ backgroundImage: "url('public/images/background.jpg')" }}
      >
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            }}
          />
          <div
            className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
            style={{
              transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            }}
          />

          {/* Subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-50" />
        </div>

        {/* Dark overlay to dim background image (70% opacity) */}
        <div className="absolute inset-0 bg-black/70 pointer-events-none" />        
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Profile Image - Right Side */}          
          <div
            className={`flex justify-center md:justify-end md:order-2 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            
            <div className="relative group flex flex-col items-center">
              {/* Glowing ring */}
              {/* <div className="absolute -inset-4 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-700" /> */}

              {/* Profile picture container - Square Box with pattern */}
              <div className="relative w-80 h-100 md:w-80 md:h-96 rounded-3xl overflow-hidden bg-slate-950 p-1 shadow-2xl">
                {/* Animated border gradient */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-40 group-hover:opacity-70 transition-opacity duration-500 animate-pulse" />

                {/* Inner container */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden bg-slate-950 backdrop-blur-sm">
                  {/* Decorative grid pattern */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30" />

                  {/* Decorative corners */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-blue-400/50 rounded-tl-3xl" />
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-cyan-400/50 rounded-tr-3xl" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-purple-400/50 rounded-bl-3xl" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-pink-400/50 rounded-br-3xl" />

                  {/* Image container with transparency support */}
                  
                  <div className="absolute inset-0 flex items-end justify-center overflow-hidden">
                    <img
                      src="/images/Anno.png"
                      alt="Anno Deritman Siregar"
                      className="w-[80%] h-auto object-contain object-bottom group-hover:scale-105 transition-transform duration-700 drop-shadow-2xl"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-slate-950/20 pointer-events-none" />
                </div>
              </div>              
              {/* Contact Me Button - Stroke Only */}
              <a
                href="https://wa.me/6287816652331"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 relative inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
              >
                {/* Gradient Stroke */}
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 p-[1.5px]">
                  <span className="flex h-full w-full items-center justify-center rounded-[10px] bg-slate-950" />
                </span>

                {/* Content */}
                <span className="relative z-10 flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  Contact Me
                </span>
              </a>
            </div>
          </div>

          {/* Text Content - Left Side */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 -translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                  Anno Deritman Siregar
                </span>
              </h1>
              <p className="text-2xl md:text-3xl font-normal text-gray-300">
                Hello I'm &amp;{" "}
                <span
                  key={index}
                  className="font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-fade"
                >
                  {roles[index]}
                </span>
              </p>
            </div>
            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <a
                href="/form/CV_Anno.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105"
              >
                Download CV
                <span className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
              </a>
              {/* Social Icons */}

              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group relative p-4 rounded-2xl border border-gray-700/50 hover:border-blue-500/70 bg-gray-900/50 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    <Icon className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        
      </section>
    </section>
  );
}
