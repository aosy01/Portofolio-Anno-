import { Code2, Palette, Zap, User } from "lucide-react";
import AnimatedContent from "../../components/AnimatedContent";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
} from "react-icons/si";
import "../../global.css";
// import ClickSpark from "../../components/ClickSpark";

export default function About() {
  const programmingSkills = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "HTML/CSS", icon: SiHtml5, color: "#E34F26" },
  ];

  return (
    <AnimatedContent>     
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header with fade in animation */}
          <div className="text-center mb-16 animate-fadeIn">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4 animate-slideDown">
              <User className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-medium">My Profile</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent animate-slideUp">
              About Me
            </h2>
          </div>

          {/* Two-column layout with staggered animations */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 items-start">
            {/* Left: Who I am */}
            <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/10 animate-slideInLeft group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                <div className="relative">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    I am a software developer with expertise in JavaScript,
                    TypeScript, ReactJS, Next.js, and Dart (Flutter) to build
                    responsive and stable web and mobile interfaces. I also
                    master Python and SQL for data processing, backend
                    integration, and basic analytics. Furthermore, I have
                    expertise in UI design and experience connecting front-end
                    applications with RESTful APIs and backend services. I am
                    capable of developing and integrating AI-based solutions
                    into mobile applications to deliver smarter, more efficient,
                    and automated user experiences.
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover/item:bg-blue-500/20 transition-colors">
                        <Zap className="w-5 h-5 text-blue-400 group-hover/item:scale-110 transition-transform" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">
                          Web Development
                        </h4>
                        <p className="text-gray-400 text-sm">
                          Full-stack development using modern technologies
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300">
                      <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover/item:bg-purple-500/20 transition-colors">
                        <Palette className="w-5 h-5 text-purple-400 group-hover/item:scale-110 transition-transform" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">
                          UI/UX Design
                        </h4>
                        <p className="text-gray-400 text-sm">
                          Creating user-centered designs for web and mobile apps
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Programming skills */}
            <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/10 animate-slideInRight group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      <Code2 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      Tech Stack
                    </h3>
                  </div>

                  <p className="text-gray-300 mb-6">
                    Technologies I frequently use in projects:
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {programmingSkills.map((tech, index) => {
                      const IconComponent = tech.icon;
                      return (
                        <div
                          key={tech.name}
                          className="px-4 py-3 bg-gradient-to-br from-gray-800/60 to-gray-800/40 rounded-lg text-sm font-medium text-white hover:from-gray-700 hover:to-gray-700/60 transition-all duration-300 hover:scale-105 hover:-translate-y-1 border border-gray-700/50 hover:border-gray-600 flex items-center gap-2 cursor-pointer group/tech animate-techCard"
                          style={{
                            animationDelay: `${index * 0.1}s`,
                          }}
                        >
                          <IconComponent
                            className="w-5 h-5 group-hover/tech:scale-125 group-hover/tech:rotate-12 transition-all duration-300"
                            style={{ color: tech.color }}
                          />
                          <span className="group-hover/tech:translate-x-1 transition-transform duration-300">
                            {tech.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>      
    </AnimatedContent>
  );
}
