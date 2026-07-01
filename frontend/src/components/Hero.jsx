import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";

export default function Hero() {
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

const letter = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 flex items-center justify-center px-6 lg:px-20 pt-20"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
  initial="hidden"
  animate="visible"
>
  {/* Hello I'm */}
  <motion.p
    variants={container}
    className="text-blue-400 text-2xl mb-3 font-semibold flex"
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
      delayChildren: 0.8,
      staggerChildren: 0.08,
    }}
    className="flex flex-wrap text-7xl lg:text-7xl font-bold"
  >
    {"Udbhav".split("").map((char, index) => (
      <motion.span
        key={index}
        variants={child}
        className="text-white"
      >
        {char}
      </motion.span>
    ))}
  </motion.div>

  {/* Last Name */}
  <motion.div
    variants={container}
    transition={{
      delayChildren: 1.6,
      staggerChildren: 0.08,
    }}
    className="flex flex-wrap text-7xl lg:text-7xl font-bold mt-2"
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
</motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-30 animate-pulse"></div>

            {/* Outer Circle */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-linear-to-r from-blue-500 via-cyan-500 to-purple-600 p-2">

              <img
                src="/profile.jpg"
                alt="Profile"
                className="rounded-full object-cover w-full h-full border-4 border-slate-900"
              />

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}