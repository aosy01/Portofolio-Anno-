import { ExternalLink, Github } from "lucide-react";
import AnimationedContent from "../../components/AnimatedContent";
import SpotlightCard from "../../components/SpotlightCard";
import LiquidEther from "../../components/LiquidEther";

export default function Projects() {
  const projects = [
    {
      title: "BEM IT Del Website",
      description: "Website designed to get news about BEM and IT Del.",
      image: "/images/bemweb.jpg",
      tags: ["Next.js", "Gin", "PostgreSQL", "Tailwind"],
      demoUrl: "https://bem-itdel.netlify.app/",
      repoUrl: "https://github.com/aosy01/Website-BEM-FrontEnd",
    },
    {
      title: "Corn Disease Detection App",
      description:
        "An application designed to assist farmers in managing corn leaf diseases.",
      image: "/images/corndisease.png",
      tags: ["Python", "Dart", "Flutter", "PyTorch", "FastAPI"],
      repoUrl: "https://github.com/aosy01/Project_Corn_Disease",
    },
    {
      title: "Aosy Restaurant System",
      description:
        "The system is developed using Object-Oriented Programming (OOP) principles and the Java programming language.",
      image: "/images/aosyrestaurant.png",
      tags: ["Java", "OOP"],
      repoUrl:
        "https://github.com/aosy01/Aosy-Restaurant-Management-Application",
    },
    {
      title: "Temperature Detection System",
      description:
        "The system built to determine temperature and humidity uses DHT 22 and ESP",
      image: "/images/IoT.jpg",
      tags: ["Arduino", "PHP", "JavaScript"],
      repoUrl:
        "https://github.com/aosy01/Realtime-Room-Temperature-Detection-System",
    },
    {
      title: "Anthony Store Information System",
      description: "Designing an information system regarding Anthony's shop",
      image: "/images/anthonystore.png",
      tags: ["HTML", "Bootstrap", "CSS"],
      repoUrl: "https://github.com/aosy01/Website-Anthony-Store",
    },
    {
      title: "Student Stress Detection System",
      description:
        "Conducting system design to classify students' stress levels",
      image: "/images/stressdetection.png",
      tags: ["Python", "TensorFlow", "Keras", "Flask"],
      repoUrl: "https://github.com/aosy01/Classification-Student-Stress",
    },
  ];

  return (
    <AnimationedContent>
       <div className="fixed inset-0 -z-10 overflow-hidden">
                    <LiquidEther
                      colors={["#5227FF", "#0046FF", "#B19EEF", "#8B5CF6"]}
                      mouseForce={10}
                      cursorSize={50}
                      isViscous={false}
                      viscous={35}
                      iterationsViscous={36}
                      iterationsPoisson={36}
                      resolution={0.3}
                      isBounce={true}
                      autoDemo={true}
                      autoSpeed={0.4}
                      autoIntensity={2.8}
                      takeoverDuration={0.3}
                      autoResumeDelay={2500}
                      autoRampDuration={0.7}
                    />
                  </div>
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-gray-900/20">
        <div className="max-w-7xl mx-auto">
          {/* Judul */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white">
              My Projects
            </h2>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <SpotlightCard
                key={index}
                className="relative group rounded-2xl"
              >
                {/* IMAGE */}
                <div className="relative h-52 overflow-hidden rounded-2xl bg-gray-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* OVERLAY BUTTON */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                    flex items-end justify-center gap-6 pb-6"
                  >
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center
                          hover:scale-110 transition-transform shadow-lg shadow-cyan-500/40"
                      >
                        <ExternalLink className="w-6 h-6 text-white" />
                      </a>
                    ) : (
                      <div className="w-12 h-12 bg-gray-700/50 rounded-full flex items-center justify-center opacity-50 cursor-not-allowed">
                        <ExternalLink className="w-6 h-6 text-gray-400" />
                      </div>
                    )}

                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center
                        hover:scale-110 transition-transform shadow-lg"
                    >
                      <Github className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>

                {/* TEXT CONTENT */}
                <div className="mt-6 px-1">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 text-xs rounded-full
                          bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>
    </AnimationedContent>
  );
}
