import { motion } from "framer-motion";
import task from "../assets/images/task.png";
import post from "../assets/images/post.png";
import ekart from "../assets/images/ekart.png";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "E-Kart",
    image: ekart,
    description:
      "A full-stack e-commerce application with secure authentication, JWT, email verification, shopping cart, and responsive UI.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/yourusername/ekart",
    live: "https://your-demo-link.com",
  },
  {
    title: "Task Manager",
    image: task,
    description:
      "A MERN task management application with CRUD operations, priority management, due dates, and responsive dashboard.",
    tech: ["React", "Express", "MongoDB", "Tailwind"],
    github: "https://github.com/yourusername/taskmanager",
    live: "https://your-demo-link.com",
  },
  {
    title: "AI Crop Recommendation",
    image: post,
    description:
      "Machine learning application using XGBoost to recommend crops based on soil nutrients and weather conditions.",
    tech: ["Python", "XGBoost", "Machine Learning"],
    github: "https://github.com/yourusername/crop",
    live: "https://your-demo-link.com",
  },
  {
    title: "Myntra Clone",
    image: "/projects/myntra.png",
    description:
      "A responsive frontend clone of Myntra built using HTML, CSS, and JavaScript with modern UI components.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/yourusername/myntra",
    live: "https://your-demo-link.com",
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
              <div className="bg-slate-950 p-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>

                <p className="text-gray-400 leading-7">{project.description}</p>

                {/* Tech Stack */}
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
