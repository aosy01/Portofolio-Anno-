import { Briefcase } from "lucide-react";
import AnimationedContent from "../../components/AnimatedContent";
import LiquidEther from "../../components/LiquidEther";

interface ExperienceItem {
  title: string;
  company: string;
  logo: string;
  period: string;
  description: string;
  achievements: string[];
}

interface OrganizationItem {
  title: string;
  division: string;
  logo: string;
  period: string;
  description: string;
  achievements: string[];
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      title: "Frontend Developer",
      company: "BEM Institute of Technology Del",
      logo: "public/images/bem.png",
      period: "Sep 2025 - Nov 2025",
      description:
        "Collaborating with the Student Executive Board (BEM) of the Del Institute of Technology to develop a BEM website platform. This project was built using Next.js for the frontend and Golang for the backend.",
      achievements: [
        "Successfully built a website display using NextJS",
        "Successfully built a CRUD system on the website",
      ],
    },
    {
      title: "Committe Staff - Bioinformatics and Biodiversity Conference",
      company: "Institute of Technology Del",
      logo: "public/images/DELL.png",
      period: "Nov 2025",
      description:
        "Del Institute of Technology held The 6th Bioinformatics and Biodiversity Conference (BBC) 2025. The program was supported by Telkom Indonesia and Telkom Solution, which provided advanced connectivity solutions and digital platforms leveraging Big Data and Artificial Intelligence (AI) for applications in the field of bioinformatics.",
      achievements: [
        "Ensure that invited guests enter the event room.",
        "Ensure that all event supplies are in good condition.",
        "Ensure that the event runs smoothly",
      ],
    },
    {
      title: "LCC Supervisor Committee",
      company: "Institute of Technology Del x PT Inalum",
      logo: "public/images/DELL.png",
      period: "Sep 2024",
      description:
        "Supervisor committee member for organizing collaborative events between Inalum and Del Institute of Technology.",
      achievements: [
        "Ensure that there are no technical or logistical obstacles that could hinder the event.",
        "Ensure that the competition runs smoothly according to the schedule that has been set.",
        "Ensure that all event equipment is complete and has been tested before the event begins.",
        "Ensure that there is no cheating between participants who take part in the LCC.",
        "Ensure that the score recording is correct according to what the participants get.",
      ],
    },
  ];

  const organization: OrganizationItem[] = [
    {
      title: "BEM Department of Arts and Culture",
      division: "Documentation and design division",
      logo: "public/images/bem.png",
      period: "2024 - 2025",
      description: "",
      achievements: [
        "Record and store documentation of every event or organizational activity in the form of photos, videos, or writing.",
        "Design logos, posters, banners, and other visual elements that reflect the identity of the organization.",
        "Assist the organization in compiling systematic activity reports that can be used as references",
      ],
    },
    {
      title: "HIMATIF 2024 Cadre Formation Committee",
      division: "Sports Division",
      logo: "public/images/himatif.png",
      period: "Nov 2024",
      description:
        "This is an annual program organized by the Information Technology Student Association (HIMATIF) to conduct cadre development and introduce the association to new students enrolled in the Information Technology study program.",
      achievements: [
        "Ensure that the event goes according to plan well and smoothly",
        "Ensure the availability of tools and ensure the quality of tools and materials",
        "Ensure the participation of participants to achieve the goals of the event",
      ],
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

      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#0046FF] font-medium tracking-wide mb-2">
              JOURNEY
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Experience & Organization
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-[#0046FF]/10 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-[#0046FF]" />
                </div>
                <h3 className="text-2xl font-bold">Work Experience</h3>
              </div>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="relative pl-8 pb-8 border-l-2 border-gray-800 last:pb-0"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#0046FF] border-4 border-black" />
                    <div className="bg-gray-900/40 border border-gray-800 rounded-xl p-6 hover:border-[#0046FF] transition-all duration-300">
                      <div className="flex gap-4 mb-4">
                        {exp.logo && (
                          <div className="flex-shrink-0">
                            <img
                              src={exp.logo}
                              alt={exp.company}
                              className="w-12 h-12 rounded-lg object-cover bg-white/10 p-1 border border-gray-700"
                              onError={(e) => {
                                e.currentTarget.style.display = "none";
                              }}
                            />
                          </div>
                        )}
                        <div className="flex-1">
                          <p className="text-sm text-[#0046FF] mb-2">
                            {exp.period}
                          </p>
                          <h4 className="text-xl font-semibold mb-1">
                            {exp.title}
                          </h4>
                          <p className="text-gray-400 font-medium">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>
                      {exp.achievements && (
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="flex gap-2 text-gray-300 text-sm"
                            >
                              <span className="text-[#0046FF] font-bold mt-0.5">
                                •
                              </span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-[#0046FF]/10 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-[#0046FF]" />
                </div>
                <h3 className="text-2xl font-bold">Organizations</h3>
              </div>
              <div className="space-y-6">
                {organization.map((org: OrganizationItem, index: number) => (
                  <div
                    key={index}
                    className="relative pl-8 pb-8 border-l-2 border-gray-800 last:pb-0"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#0046FF] border-4 border-black" />
                    <div className="bg-gray-900/40 border border-gray-800 rounded-xl p-6 hover:border-[#0046FF] transition-all duration-300">
                      <div className="flex gap-4 mb-4">
                        {org.logo && (
                          <div className="flex-shrink-0">
                            <img
                              src={org.logo}
                              alt={org.title}
                              className="w-12 h-12 rounded-lg object-cover bg-white/10 p-1 border border-gray-700"
                              onError={(e) => {
                                e.currentTarget.style.display = "none";
                              }}
                            />
                          </div>
                        )}
                        <div className="flex-1">
                          <p className="text-sm text-[#0046FF] mb-2">
                            {org.period}
                          </p>
                          <h4 className="text-xl font-semibold mb-1">
                            {org.title}
                          </h4>
                          <p className="text-gray-400 font-medium">
                            {org.division}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {org.description}
                      </p>
                      {org.achievements && (
                        <ul className="space-y-2">
                          {org.achievements.map(
                            (achievement: string, idx: number) => (
                              <li
                                key={idx}
                                className="flex gap-2 text-gray-300 text-sm"
                              >
                                <span className="text-[#0046FF] font-bold mt-0.5">
                                  •
                                </span>
                                <span>{achievement}</span>
                              </li>
                            )
                          )}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimationedContent>
  );
}
