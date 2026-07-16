import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaBriefcase,
  FaCertificate,
} from "react-icons/fa";

const timeline = [
  {
  icon: <FaBriefcase />,
  title: "Full Stack Developer Intern",
  subtitle: "Rezillion Tech Pvt. Ltd.",
  duration: "July 2026 - Present",
  description:
    "Contributing to the development of full-stack web applications, collaborating with cross-functional teams, and gaining practical experience in building scalable, production-ready software while following industry best practices.",
},
  {
    icon: <FaGraduationCap />,
    title: "B.Tech in Computer Science (Data Science)",
    subtitle: "ABES Engineering College",
    duration: "2023 - 2027",
    description:
      "Currently pursuing B.Tech with a focus on Data Science. Building scalable full-stack applications with Next.js, TypeScript, Node.js, and cloud deployment while strengthening DSA and problem-solving skills.",
  },
  {
    icon: <FaBriefcase />,
    title: "Open to Full Stack Internship",
    subtitle: "Full Stack Developer",
    duration: "Present",
    description:
      "Actively looking for Full Stack Developer internship opportunities where I can contribute, learn, and build impactful software.",
  },
  {
    icon: <FaCertificate />,
    title: "AWS Cloud Foundations",
    subtitle: "Amazon Web Services",
    duration: "Certified",
    description:
      "Learned cloud fundamentals including EC2, IAM, S3, networking, and cloud deployment concepts.",
  },
  {
    icon: <FaCertificate />,
    title: "Deloitte Data Analytics",
    subtitle: "Forage Virtual Experience",
    duration: "Certified",
    description:
      "Completed practical tasks involving Excel, Tableau, dashboards, and business data analysis.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-950 text-white py-24 px-6 lg:px-20"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-blue-400 uppercase tracking-widest font-semibold">
            Journey
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Education & Experience
          </h2>

          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-5 top-0 w-1 h-full bg-blue-600 rounded-full"></div>

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: .5,
                delay: index * .15,
              }}
              viewport={{ once: true }}
              className="relative pl-20 mb-14"
            >

              {/* Icon */}
              <div className="absolute left-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-lg shadow-lg">
                {item.icon}
              </div>

              {/* Card */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 transition duration-300">

                <div className="flex flex-col md:flex-row justify-between md:items-center">

                  <div>
                    <h3 className="text-2xl font-bold">
                      {item.title}
                    </h3>

                    <p className="text-blue-400 mt-1">
                      {item.subtitle}
                    </p>
                  </div>

                  <span className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full mt-4 md:mt-0">
                    {item.duration}
                  </span>

                </div>

                <p className="text-gray-400 mt-6 leading-8">
                  {item.description}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}