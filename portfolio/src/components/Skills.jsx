export const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "MongoDB",
  "PHP",
  "Java",
  "Git",
  "Figma",
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-slate-900">
      <h2 className="text-3xl font-semibold text-sky-400 mb-12 text-center">
        Skills & Technologies
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="cursor-pointer p-4 rounded-2xl text-center shadow-md transform transition-all duration-300
                       bg-slate-700 text-gray-300 hover:bg-slate-600 hover:scale-105 hover:shadow-lg"
          >
            <span className="font-medium text-lg">{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
