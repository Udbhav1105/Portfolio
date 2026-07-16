import { motion } from "framer-motion";
import task from "../assets/images/task.png";
import post from "../assets/images/post.png";
import ekart from "../assets/images/ekart.png";
import myntra from "../assets/images/myntra.png";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "E-Kart",
    image: ekart,
    description:
      "A full-stack e-commerce platform featuring secure authentication, cart management, RESTful APIs, and Razorpay payment integration with a responsive modern frontend.",
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Razorpay",
      "Tailwindcss",
    ],
    github: "https://github.com/Udbhav1105/E-kart.git",
    live: "https://e-kart-3.onrender.com/",
  },
  {
    title: "Task Manager",
    image: task,
    description:
      "A full-stack task management application with CRUD operations, priority management, due dates, and a responsive dashboard for real-world productivity workflows.",
    tech: ["React", "Next.js", "Express", "MongoDB", "Node", "REST API", "Tailwind"],
    github: "https://github.com/Udbhav1105/Tasktracker.git",
    live: "https://tasktracker-1-ud1k.onrender.com/",
  },
  {
    title: "A Post Creation Website",
    image: post,
    description:
      "A full-stack post creation website featuring CRUD operations, image uploads, REST APIs, JWT authentication, and a polished responsive interface.",
    tech: ["Express", "EJS", "Multer", "MongoDB", "CRUD", "Tailwind"],
    github: "https://github.com/Udbhav1105/Post-Writing-Website.git",
    live: "https://post-writing-website-2.onrender.com/",
  },
  {
    title: "Myntra Clone",
    image: myntra,
    description:
      "A responsive frontend clone of Myntra built using HTML, CSS, and JavaScript with modern UI components.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Udbhav1105/Myntra-Clone.git",
    live: "https://myntra-clone-eo1e.onrender.com/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-900 text-white py-24 px-6 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 uppercase tracking-widest font-semibold">
            Portfolio
          </p>

          <h2 className="text-5xl font-bold mt-4">Featured Projects</h2>

          <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="bg-slate-800 rounded-3xl overflow-hidden shadow-lg border border-slate-700 hover:-translate-y-2 transition duration-300"
            >
              <div className="bg-slate-950 rounded-t-3xl overflow-hidden">
                <div className="relative h-80 overflow-hidden rounded-t-3xl">
                  {/* Blurred Background */}
                  <img
                    src={project.image}
                    alt=""
                    className="
      absolute
      
      w-full
      h-full
      object-cover
      blur-xs
      scale-110
      opacity-50
    "
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-slate-950/40"></div>

                  {/* Main Image */}
                  <div className="relative h-full flex items-center justify-center p-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="
        max-h-full
        max-w-full
        object-contain
        rounded-lg
        shadow-2xl
        transition-transform
        duration-500
        hover:scale-105
      "
                    />
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="h-36 flex flex-col">
                  <h3 className="text-3xl font-bold mb-4">{project.title}</h3>

                <p className="text-gray-400 leading-7">{project.description}</p>
                </div>

                {/* Tech Stack */}
                <div className="mt-8 h-15">
                  <div className="flex flex-wrap gap-3 mt-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-600/20 border border-blue-500 text-blue-300 px-4 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-5 mt-8">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-5 py-3 rounded-lg transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg transition"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
