import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaJava,
  FaServer,
} from "react-icons/fa";

export default function About() {
  const stats = [
    { number: "5+", label: "Projects Built" },
    { number: "300+", label: "DSA Problems" },
    { number: "2+", label: "Certifications" },
    { number: "2027", label: "Graduation" },
  ];

  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-24 px-6 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 font-semibold uppercase tracking-widest">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Know Who I Am
          </h2>

          <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">
              Full Stack Developer
            </h3>

            <p className="text-gray-400 leading-8 text-lg">
              I'm <span className="text-white font-semibold">Udbhav Mishra</span>,
              a Computer Science (Data Science) student at
              <span className="text-blue-400">
                {" "}ABES Engineering College
              </span>.
              I build full-stack web applications that span frontend design,
              backend APIs, databases, authentication, and deployment.
            </p>

            <p className="text-gray-400 leading-8 text-lg mt-6">
              My toolkit includes React, Next.js, TypeScript, Node.js,
              Express, MongoDB/MySQL, and secure payment integrations such as
              Razorpay. I also enjoy solving Data Structures & Algorithms
              problems and turning ideas into practical digital products.
            </p>

            <p className="text-gray-400 leading-8 text-lg mt-6">
              My goal is to become a Software Engineer who can design and ship
              scalable full-stack solutions that create real-world impact.
            </p>

          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >

            <div className="grid grid-cols-2 gap-5">

              <div className="bg-slate-800 rounded-2xl p-6">
                <FaGraduationCap className="text-4xl text-blue-400 mb-4" />
                <h4 className="font-bold text-xl">
                  Education
                </h4>

                <p className="text-gray-400 mt-3">
                  B.Tech CSE (Data Science)
                  <br />
                  ABES Engineering College
                  <br />
                  2023 – 2027
                </p>
              </div>

              <div className="bg-slate-800 rounded-2xl p-6">
                <FaLaptopCode className="text-4xl text-cyan-400 mb-4" />
                <h4 className="font-bold text-xl">
                  Frontend Stack
                </h4>

                <p className="text-gray-400 mt-3">
                  React
                  <br />
                  Next.js
                  <br />
                  TypeScript
                </p>
              </div>

              <div className="bg-slate-800 rounded-2xl p-6">
                <FaServer className="text-4xl text-green-400 mb-4" />
                <h4 className="font-bold text-xl">
                  Backend
                </h4>

                <p className="text-gray-400 mt-3">
                  Node.js
                  <br />
                  Express
                  <br />
                  MongoDB
                </p>
              </div>

              <div className="bg-slate-800 rounded-2xl p-6">
                <FaJava className="text-4xl text-orange-400 mb-4" />
                <h4 className="font-bold text-xl">
                  Full Stack Focus
                </h4>

                <p className="text-gray-400 mt-3">
                  Razorpay
                  <br />
                  REST APIs
                  <br />
                  Deployment
                </p>
              </div>

            </div>

          </motion.div>

        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-24"
        >
          {stats.map((item) => (
            <div
              key={item.label}
              className="bg-slate-800 rounded-xl p-8 text-center hover:-translate-y-2 transition"
            >
              <h2 className="text-4xl font-bold text-blue-400">
                {item.number}
              </h2>

              <p className="text-gray-400 mt-3">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}