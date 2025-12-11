import { useEffect, useState } from "react";
import AnimationedContent from "../../components/AnimatedContent";
import LiquidEther from "../../components/LiquidEther";
// Certification gallery — displays only images; click to open lightbox
export default function Certification() {
  // Use images from `public/images/` (serve from root with leading slash)
  const certImages: string[] = [
    "/images/Sertifikasi_GoogleCloud_Anno.png",
    "/images/kader2024.jpg",
    "/images/LCC_ANNO.png",
    "/images/Committee_Anno.png",
    "/images/kader2025.png",
  ];

  const [selected, setSelected] = useState<string | null>(null);

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
          {certImages.map((src, i) => (
            <button
              key={i}
              onClick={() => setSelected(src)}
              className="relative overflow-hidden rounded-lg focus:outline-none"
              aria-label={`Open certificate ${i + 1}`}
            >
              <img
                src={src}
                alt={`Certificate ${i + 1}`}
                className="w-full  object-cover rounded-lg hover:scale-105 transition-transform duration-300 bg-gray-800"
                onError={(e) => {
                  // hide broken images silently
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </button>
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
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-3 -right-3 bg-white/10 hover:bg-white/20 rounded-full p-2 text-white z-50"
                aria-label="Close"
              >
                ✕
              </button>

              <img
                src={selected}
                alt="Certificate enlarged"
                className="w-full max-h-[80vh] object-contain rounded"
              />
            </div>
          </div>
        )}
      </div>
    </section>
    </AnimationedContent>
  );
}
