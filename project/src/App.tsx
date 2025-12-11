import Hero from "./pages/hero/page";
import About from "./pages/about/page";
import Experience from "./pages/experience/page";
import Certification from "./pages/certification/page";
import Projects from "./pages/project/page";
import Contact from "./pages/contact/page";
import Navbar from "./components/Navbar";
import ClickSpark from "./components/ClickSpark";
import LiquidEther from "./components/LiquidEther";

function App() {
  return (
    <ClickSpark>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
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
        <main className="pt-24">                 
          <div id="hero">
            <Hero />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="experience">
            <Experience />
          </div>
          <div id="certification">
            <Certification />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </main>
      </div>
    </ClickSpark>
  );
}

export default App;
