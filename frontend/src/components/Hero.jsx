import { motion } from "framer-motion";
import profile from "../assets/images/profile.png";
import resume from '../assets/resume/resumeA2.pdf'

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const child = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 px-5 sm:px-8 lg:px-20 pt-28 lg:pt-20 flex items-center"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-blue-600/10 blur-[140px]" />

      {/* Small floating circles */}

      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute top-36 left-1/3 w-3 h-3 rounded-full bg-blue-500"
      />

      <motion.div
        animate={{
          y: [0, 18, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute bottom-36 right-32 w-4 h-4 rounded-full bg-cyan-400"
      />

      <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* LEFT */}

        <motion.div
          initial="hidden"
          animate="visible"
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          {/* Hello */}

          <motion.p
            variants={container}
            className="flex justify-center lg:justify-start text-blue-400 text-2xl sm:text-3xl lg:text-4xl font-semibold mb-5"
          >
            {"Hello, I'm".split("").map((char, index) => (
              <motion.span key={index} variants={child}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.p>

          {/* First Name */}

          <motion.div
            variants={container}
            transition={{
              delayChildren: 0.7,
            }}
            className="
            font-semibold
            flex
            justify-center
            lg:justify-start
            flex-wrap
            text-6xl
            sm:text-7xl
            md:text-8xl
            lg:text-[6.5rem]
            xl:text-[8rem]
            leading-none
            "
          >
            {"Udbhav".split("").map((char, index) => (
              <motion.span key={index} variants={child} className="text-white">
                {char}
              </motion.span>
            ))}
          </motion.div>

          {/* Last Name */}

          <motion.div
            variants={container}
            transition={{
              delayChildren: 1.4,
            }}
            className="
            flex
            justify-center
            lg:justify-start
            flex-wrap
            text-6xl
            sm:text-7xl
            md:text-8xl
            lg:text-[6.5rem]
            xl:text-[8rem]
            font-semibold
            leading-none
            mt-2
            "
          >
            {"Mishra".split("").map((char, index) => (
              <motion.span
                key={index}
                variants={child}
                className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>

          {/* Subtitle */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 2.4,
            }}
            className="mt-8 text-lg sm:text-xl lg:text-2xl text-gray-300 font-medium"
          >
            MERN Stack Developer • Java Developer • Problem Solver
          </motion.p>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 2.8,
            }}
            className="mt-6 text-gray-400 text-base sm:text-lg leading-8 max-w-xl mx-auto lg:mx-0"
          >
            I build scalable, responsive and modern web applications using
            React, Node.js, Express, MongoDB and Java. Passionate about solving
            real-world problems through clean and efficient code.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 3.2,
            }}
            className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-5"
          >
            <a
              href="#projects"
              className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition flex items-center justify-center gap-3 text-white font-semibold"
            >
              View Projects
              <FaArrowRight />
            </a>

            <a
              href={resume}
              download
              className="px-8 py-4 rounded-xl border border-blue-500 hover:bg-blue-500 transition flex items-center justify-center gap-3 text-white font-semibold"
            >
              Resume
              <FaDownload />
            </a>
          </motion.div>
          {/* Social Icons */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.6 }}
            className="mt-10 py-5 flex justify-center lg:justify-start gap-6"
          >
            <a
              href="https://github.com/Udbhav1105"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full bg-slate-900 border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
            >
              <FaGithub color="white" size={26} />
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full bg-slate-900 border border-slate-700 hover:border-blue-400 hover:text-blue-400 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
            >
              <FaLinkedin color="white" size={26} />
            </a>

            <a
              href="mailto:your@email.com"
              className="w-14 h-14 rounded-full bg-slate-900 border border-slate-700 hover:border-red-400 hover:text-red-400 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
            >
              <FaEnvelope color="white" size={26} />
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT */}

        <div className="relative">

  {/* Rotating Ring */}
  <motion.div
    animate={{ rotate: 360 }}
    transition={{
      duration: 15,
      repeat: Infinity,
      ease: "linear",
    }}
    className="
      absolute
      inset-0
      rounded-full
      p-[4px]
      bg-gradient-to-r
      from-cyan-400
      via-blue-500
      to-purple-500
    "
  />

  {/* Static Image */}
  <div className="relative p-[4px] rounded-full bg-slate-950">

    <img
      src={profile}
      alt=""
      className="
      rounded-full
      object-cover
      w-[280px]
      h-[280px]
      sm:w-[350px]
      sm:h-[350px]
      md:w-[430px]
      md:h-[430px]
      lg:w-[500px]
      lg:h-[500px]
      xl:w-[600px]
      xl:h-[600px]
      "
    />

  </div>

</div>
      </div>
    </section>
  );
}
