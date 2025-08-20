export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-slate-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side (Image) */}
        <div className="flex justify-center">
          <div className="w-60 h-60 rounded-full bg-slate-700 flex items-center justify-center text-gray-400 text-xl shadow-lg">
            <img
              src="/sdp_s1.jpg"
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* Right Side (Text) */}
        <div className="max-w-3xl mx-auto text-justify">
          <h2 className="text-3xl font-semibold text-sky-400 mb-6 border-b border-gray-600 pb-2">
            About Me
          </h2>

          <p className="text-gray-300 leading-relaxed mb-4">
            I am a motivated and self-driven <span className="text-sky-400 font-medium">BCA graduate</span> 
            from NIST, Kathmandu, Nepal, with a deep passion for technology and continuous learning 
            through platforms like <span className="text-sky-400 font-medium">Udemy</span> and 
            <span className="text-sky-400 font-medium"> YouTube</span>. I enjoy building projects that combine 
            creativity with practical solutions.
          </p>

          <p className="text-gray-300 leading-relaxed mb-4">
            My technical experience includes <span className="text-sky-400 font-medium">
            Java (Swing, JavaFX, JSP, Servlets), Spring Boot, PHP, MySQL, JavaScript (MERN Stack)</span>, 
            and familiarity with <span className="text-sky-400 font-medium">Linux OS</span>. Through independent 
            desktop and web projects, I have honed my development skills and gained practical experience in 
            delivering functional, user-friendly applications.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Although I am at the beginning of my professional journey, I am highly adaptable, detail-oriented, 
            and a proactive problem solver. I am fluent in English and consistently strive to deliver high-quality 
            results. I am eager to contribute to innovative projects, learn new technologies quickly, and add value 
            to dynamic IT environments.
          </p>
        </div>
      </div>
    </section>
  );
}
