import { BrowserRouter as Router } from "react-router-dom";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";


export default function App() {
  return (
    <Router>
      <div className="bg-slate-900 text-white min-h-screen font-sans scroll-smooth">
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </Router>
  );
}
