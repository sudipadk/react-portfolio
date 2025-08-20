import { NavLink } from "react-router-dom";

export default function Intro() {
  return (
    <section
      id="intro"
      className="h-screen flex flex-col items-center justify-center text-center px-6 bg-slate-900"
    >
      <h1 className="text-5xl font-bold text-sky-400">Hello! I am Sudip 👋</h1>
      <p className="mt-3 text-lg text-gray-300">
        Student | Aspiring Full Stack Developer
      </p>

      <blockquote className="mt-6 italic text-gray-400 max-w-xl">
        <q className="text-sky-400">Code with passion, design with purpose.</q>
      </blockquote>

      <NavLink
        to="/#about"
        className="mt-8 px-6 py-3 bg-sky-500 text-white rounded-xl shadow-lg hover:bg-sky-400 transition"
      >
        Know More
      </NavLink>
      <p className="mt-4 text-gray-400 italic text-sm">Move Down</p>
    </section>
  );
}
