// src/components/Navbar.tsx
"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import GooeyNav from "./GooeyNav";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  const links = [
    { href: "#hero", label: "Home", id: "hero" },
    { href: "#about", label: "About", id: "about" },    
    { href: "#experience", label: "Experience", id: "experience" },
    { href: "#certification", label: "Certification", id: "certification" },
    { href: "#projects", label: "Projects", id: "projects" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  const logoSrc = "/logo.png";

  // DETEKSI SCROLL & UPDATE ACTIVE LINK
  useEffect(() => {
    const sections = links.map((link) => document.querySelector(link.href));
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // offset biar pas

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement | null;
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(links[i].id);
          break;
        }
      }
    };

    // Initial check
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cari index aktif untuk GooeyNav
  const activeIndex = links.findIndex((link) => link.id === activeSection);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 pointer-events-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="bg-black/70 backdrop-blur-xl border border-gray-800/50 rounded-full px-6 py-3 flex items-center justify-between shadow-2xl">
          {/* Logo + Nama */}
          <a href="#hero" className="flex items-center gap-3 hover:scale-105 transition-transform">
            <img
              src={logoSrc}
              alt="Logo"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
              className="w-9 h-9 rounded-full object-cover border border-cyan-500/50"
            />
            <span className="text-white font-bold text-lg tracking-tight">Anno Siregar</span>
          </a>

          {/* GooeyNav — Otomatis Ikut Scroll! */}
          <div className="hidden lg:block">
            <GooeyNav
              items={links}
              particleCount={15}
              particleDistances={[80, 10]}
              particleR={90}
              initialActiveIndex={0}
              activeIndex={activeIndex} // INI YANG BIKIN OTOMATIS BERPINDAH!
              animationTime={600}
              timeVariance={250}
              colors={[1, 2, 3, 4, 1, 2, 3]}
            />
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all">
            <Menu className="w-6 h-6 text-cyan-400" />
          </button>
        </div>
      </div>
    </nav>
  );
}