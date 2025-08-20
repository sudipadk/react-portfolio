import { useState } from "react";

export const projects = [
  // HTML Projects
  {
    title: "Spotify Clone",
    desc: "A fully responsive Spotify music player clone built with HTML and CSS. Features a clean UI and mimics the look and feel of the original Spotify web app, showcasing layout and styling skills.",
    category: "HTML",
    thumbnail: "/spotify.png",
    skills: ["HTML", "CSS"],
    tools: ["HTML", "CSS", "JavaScript"],
    demo: "",
    source: "https://github.com/sudipadk/html-projects"
  },
  {
    title: "FoodMandu Clone",
    desc: "A food delivery website clone replicating FoodMandu’s interface, built with HTML, CSS, and JavaScript. Demonstrates responsive design, modern UI, and interactive elements for menu browsing and search functionality.",
    category: "HTML",
    thumbnail: "/Foodmandu_Search_Page.png",
    skills: ["HTML", "CSS"],
    tools: ["HTML", "CSS", "JavaScript"],
    demo: "",
    source: "https://github.com/sudipadk/html-projects"
  },

  // PHP Projects
  {
    title: "Inventory Management",
    desc: "A basic inventory management system using PHP and MySQL. Enables users to track, add, update, and delete inventory items with a functional CRUD interface and organized data handling.",
    category: "PHP",
    thumbnail: "/inventory.png",
    skills: ["PHP"],
    tools: ["HTML", "CSS", "PHP", "MySQL"],
    demo: "",
    source: "https://github.com/sudipadk/inventory"
  },
  {
    title: "Attendance System",
    desc: "Classroom attendance tracking application developed in PHP. Allows teachers to record, view, and manage student attendance efficiently, demonstrating backend data handling and session management.",
    category: "PHP",
    thumbnail: "/attendance.png",
    skills: ["PHP"],
    tools: ["HTML", "CSS", "PHP", "MySQL"],
    demo: "",
    source: "https://github.com/sudipadk/chrono"
  },

  // Java Projects
  {
    title: "Student Management System",
    desc: "A desktop application built with Java Swing to manage student records. Provides features to add, update, delete, and search student information, demonstrating GUI design and database integration.",
    category: "Java",
    thumbnail: "/student_mgmt_sys.png",
    skills: ["Java"],
    tools: ["Java", "Swing", "MySQL"],
    demo: "",
    source: "https://github.com/sudipadk/java-basic-crud"
  },
  {
    title: "Contact Manager",
    desc: "A web-based contact management system using Java JSP and Servlets. Enables storing, updating, and managing contacts with a clean UI, highlighting backend processing and CRUD operations.",
    category: "Java",
    thumbnail: "/contact.png",
    skills: ["Java"],
    tools: ["Java", "JSP", "Servlet", "MySQL"],
    demo: "",
    source: "Soon to arrive"
  },

  // JavaScript Projects
  {
    title: "MS Paint Sample",
    desc: "A basic paint application built using JavaScript canvas. Allows users to draw freely, select colors, and experiment with brush sizes, demonstrating dynamic DOM manipulation and canvas API usage.",
    category: "JavaScript",
    thumbnail: "/ms-paint.png",
    skills: ["JavaScript"],
    tools: ["JavaScript"],
    demo: "",
    source: "https://github.com/sudipadk/Ms-Paint"
  },
  {
    title: "Analog and Digital Clock",
    desc: "Real-time analog and digital clocks developed with JavaScript. Demonstrates use of Date object, intervals, and dynamic DOM updates to display accurate time continuously.",
    category: "JavaScript",
    thumbnail: "/analog-digital.png",
    skills: ["JavaScript"],
    tools: ["JavaScript"],
    demo: "",
    source: "https://github.com/sudipadk/Learning-JS/tree/main/clock"
  },

  // React Projects
  {
    title: "Portfolio",
    desc: "Personal portfolio website built with React and Tailwind CSS. Demonstrates component-based design, responsive layout, and integration of interactive sections to showcase projects and skills.",
    category: "React",
    thumbnail: "/portfolio.png",
    skills: ["React"],
    tools: ["React", "Tailwind CSS"],
    demo: "",
    source: ""
  },
  // {
  //   title: "Spotify v2",
  //   desc: "An advanced Spotify clone built with React and API integration. Includes interactive playlists, dynamic search, and modern UI components, demonstrating React state management and API consumption.",
  //   category: "React",
  //   thumbnail: "/spotify.png",
  //   skills: ["React"],
  //   tools: ["React", "JavaScript", "API"],
  //   demo: "",
  //   source: ""
  // },
  {
    title: "Admin UI",
    desc: "A React-based admin dashboard for data management and analytics. Features tables, charts, and interactive UI elements, showcasing front-end design, component reuse, and state management.",
    category: "React",
    thumbnail: "/admin_ui.png",
    skills: ["React"],
    tools: ["React", "Tailwind CSS"],
    demo: "",
    source: ""
  },
  {
    title: "Library Management System",
    desc: "A web-based library management system using React. Allows users to browse books, manage borrowing records, and perform CRUD operations, highlighting React component architecture and state handling.",
    category: "React",
    thumbnail: "/library-management.png",
    skills: ["React"],
    tools: ["React", "JavaScript"],
    demo: "",
    source: "Coming Soon"
  },
  // {
  //   title: "Quiz App",
  //   desc: "Interactive quiz application built with React.js. Users can take quizzes with multiple-choice questions, track scores, and experience dynamic feedback, demonstrating component-driven UI and state management.",
  //   thumbnail: "/React_Quiz_App.png",
  //   skills: ["React"],
  //   tools: ["React"],
  //   demo: "",
  //   source: ""
  // }
];


export default function Projects() {
  const [activeTab, setActiveTab] = useState("HTML");
  const filteredProjects = projects.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-20 px-6 bg-slate-800">
      <h2 className="text-3xl font-semibold text-sky-400 mb-10 text-center">Projects</h2>

      {/* Tabs */}
      <div className="flex justify-center mb-12 space-x-4 flex-wrap">
        {["HTML", "PHP", "Java", "JavaScript", "React"].map(tab => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-lg font-medium ${
              activeTab === tab
                ? "bg-sky-500 text-white"
                : "bg-slate-700 text-gray-300 hover:bg-slate-600"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Projects List */}
      <div className="space-y-12">
        {filteredProjects.map((p, i) => (
          <div key={i} className="flex flex-col md:flex-row bg-slate-700 p-6 rounded-2xl shadow-lg gap-6">
            
            {/* Image */}
            <div className="md:w-1/3 flex-shrink-0">
              <img
                src={p.thumbnail}
                alt={p.title}
                className="rounded-xl w-full h-auto object-cover shadow-md"
              />
            </div>

            {/* Description */}
            <div className="md:w-2/3 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white">{p.title}</h3>
                <p className="text-gray-300 mt-3">{p.desc}</p>
                
                {/* Skills / Tools */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tools.map((t, idx) => (
                    <span key={idx} className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-4">
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-400 transition"
                  >
                    Demo
                  </a>
                )}
                {p.source && (
                  <a
                    href={p.source}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition"
                  >
                    Source
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* GitHub link */}
      <div className="text-center mt-10">
        <a
          href="https://github.com/sudipadk"
          target="_blank"
          rel="noreferrer"
          className="text-sky-400 hover:underline"
        >
          Visit my GitHub for more projects
        </a>
      </div>
    </section>
  );
}
