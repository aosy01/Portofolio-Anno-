import { useEffect, useState } from "react";
import AnimationedContent from "../../components/AnimatedContent";
import LiquidEther from "../../components/LiquidEther";

// Certification data with details
const certifications = [
  {
    src: "/images/Sertifikasi_GoogleCloud_Anno.png",
    name: "Google Cloud Certification",
    description: [
      "Explore data analytics within cloud computing environments.",
      "Apply data transformation strategies to datasets to address business needs.",
      "Describe the key aspects of data management and storage in Google Cloud.",
      "Develop skills across the five key stages of data visualization in the cloud.",
    ],
    year: "2025",
  },
  {
    src: "/images/kader2024.jpg",
    name: "Kader 2024",
    description: [
      "Participation in leadership training program for youth development.",
    ],
    year: "2024",
  },
  {
    src: "/images/LCC_ANNO.png",
    name: "LCC Certificate",
    description: [
      "Certificate from Leadership and Community Center activities.",
    ],
    year: "2023",
  },
  {
    src: "/images/Committee_Anno.png",
    name: "Committee Certificate",
    description: ["Recognition for committee work in organizational events."],
    year: "2023",
  },
  {
    src: "/images/kader2025.png",
    name: "Kader 2025",
    description: [
      "Advanced leadership training and community service program.",
    ],
    year: "2025",
  },
];

export default function Certification() {
  const [selected, setSelected] = useState<(typeof certifications)[0] | null>(
    null
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

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
      <section className="py-12 px-4 md:px-12 lg:px-24">
        <div className="max-w-7l mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-lg group cursor-pointer"
                onClick={() => setSelected(cert)}
              >
                <img
                  src={cert.src}
                  alt={`Certificate ${i + 1}`}
                  className="w-full object-cover rounded-lg hover:scale-105 transition-transform duration-300 bg-gray-800"
                  onError={(e) => {
                    // hide broken images silently
                    (e.currentTarget as HTMLImageElement).style.display =
                      "none";
                  }}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-blue-500 hover:bg-blue-800/80 text-white px-4 py-2 rounded-lg font-semibold bg-shadow-lg shadow-blue-500/40">
                    Click Me
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Modal / Lightbox */}
          {selected && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
              role="dialog"
              aria-modal="true"
              onClick={() => setSelected(null)}
            >
              <div
                className="relative max-w-5xl w-full bg-blue-950 rounded-lg p-6 flex flex-col md:flex-row gap-6"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelected(null)}
                  className="absolute -top-3 -right-3 bg-gray-800 hover:bg-gray-700 rounded-full p-2 text-white z-50"
                  aria-label="Close"
                >
                  ✕
                </button>

                <div className="flex-1">
                  <img
                    src={selected.src}
                    alt="Certificate enlarged"
                    className="w-full max-h-[60vh] object-contain rounded"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">{selected.name}</h3>
                  <ul className="text-gray-600 mb-4 list-disc list-inside">
                    {selected.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-500">Year: {selected.year}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </AnimationedContent>
  );
}
