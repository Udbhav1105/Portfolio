import { motion } from "framer-motion";
import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaCreditCard,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiPostman,
  SiMysql,
  SiVercel,
  SiNextdotjs,
  SiTypescript,
  SiRender
  
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact />, color: "text-cyan-400" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
      { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-400" },
      { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
      { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-sky-400" },
      { name: "Redux Toolkit", icon: <SiRedux />, color: "text-violet-500" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
      { name: "Express", icon: <SiExpress />, color: "text-gray-300" },
      { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
      { name: "MySQL", icon: <SiMysql />, color: "text-blue-400" },
      { name: "Razorpay", icon: <FaCreditCard />, color: "text-purple-400" },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: <FaJava />, color: "text-red-500" },
      { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
       { name: "MySQL", icon: <SiMysql />, color: "text-blue-400" },
      { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
      { name: "Python", icon: <FaPython />, color: "text-blue-400" },


    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "text-orange-500" },
      { name: "GitHub", icon: <FaGithub />, color: "text-white" },
      { name: "Postman", icon: <SiPostman />, color: "text-orange-400" },
      { name: "AWS", icon: <FaAws />, color: "text-yellow-500" },
      { name: "Vercel", icon: <SiVercel />, color: "text-white" },
      { name: "Render", icon: <SiRender />, color: "text-white" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-950 py-24 px-6 lg:px-20 text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 uppercase tracking-widest font-semibold">
            Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Technologies I Work With
          </h2>

          <div className="w-24 h-1 bg-blue-500 rounded-full mx-auto mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">

          {skillCategories.map((category, index) => (

            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .5, delay: index * .2 }}
              viewport={{ once: true }}
              className="bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-800"
            >

              <h3 className="text-2xl font-bold mb-8 text-blue-400">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">

                {category.skills.map((skill) => (

                  <div
                    key={skill.name}
                    className="bg-slate-800 rounded-xl p-5 flex flex-col items-center justify-center hover:bg-slate-700 hover:-translate-y-2 transition duration-300"
                  >

                    <div className={`text-5xl mb-4 ${skill.color}`}>
                      {skill.icon}
                    </div>

                    <p className="font-medium text-center">
                      {skill.name}
                    </p>

                  </div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>
      </div>
    </section>
  );
}