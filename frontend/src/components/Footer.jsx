import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-16">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Left */}
          <div>
            <h2 className="text-3xl font-bold text-blue-500">
              Udbhav<span className="text-white">.</span>
            </h2>

            <p className="text-gray-400 mt-5 leading-7">
              MERN Stack Developer passionate about building
              scalable, responsive, and modern web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <a href="#home" className="hover:text-blue-400 transition">
                Home
              </a>

              <a href="#about" className="hover:text-blue-400 transition">
                About
              </a>

              <a href="#skills" className="hover:text-blue-400 transition">
                Skills
              </a>

              <a href="#projects" className="hover:text-blue-400 transition">
                Projects
              </a>

              <a href="#contact" className="hover:text-blue-400 transition">
                Contact
              </a>

            </div>

          </div>

          {/* Social */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Connect
            </h3>

            <div className="flex gap-4">

              <a
                href="https://github.com/Udbhav1105"
                target="_blank"
                rel="noreferrer"
                className="bg-slate-800 p-4 rounded-full hover:bg-blue-600 transition"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/udbhav-mishra-7a567a286/"
                target="_blank"
                rel="noreferrer"
                className="bg-slate-800 p-4 rounded-full hover:bg-blue-600 transition"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="mailto:udbhavmsr@gmail.com"
                className="bg-slate-800 p-4 rounded-full hover:bg-blue-600 transition"
              >
                <FaEnvelope size={20} />
              </a>

            </div>

            <p className="text-gray-400 mt-6">
             udbhavmsr@gmail.com
            </p>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} Udbhav Mishra. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="bg-blue-600 hover:bg-blue-700 p-4 rounded-full transition"
          >
            <FaArrowUp />
          </button>

        </div>

      </div>

    </footer>
  );
}