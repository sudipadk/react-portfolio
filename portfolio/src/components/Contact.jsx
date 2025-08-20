export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 text-center bg-slate-900">
      <h2 className="text-3xl font-semibold text-sky-400 mb-6">Contact Me</h2>
      <p className="text-gray-300 mb-8">
        Interested in collaborating or hiring me? Let’s connect!
      </p>

      <a
        href="mailto:sudip.adhk1@gmail.com"
        className="inline-block px-6 py-3 bg-sky-500 text-white rounded-xl shadow-lg hover:bg-sky-400 transition-all duration-300"
      >
        Send Email
      </a>
    </section>
  );
}
