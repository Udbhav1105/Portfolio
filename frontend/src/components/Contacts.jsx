import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
// import dotenv from 'dotenv/config'

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("email hit")

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error);
          alert("Failed to send message.");
        },
      );
  };
  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-24 px-6 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-blue-400 uppercase tracking-widest font-semibold">
            Contact
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Let's Build Something Amazing
          </h2>

          <div className="w-24 h-1 bg-blue-500 rounded-full mx-auto mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>

            <p className="text-gray-400 leading-8 text-lg">
              I'm actively looking for Full Stack Developer Internship
              opportunities and exciting projects. Feel free to reach out if
              you'd like to collaborate or discuss opportunities.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-5">
                <div className="bg-blue-600 p-4 rounded-full">
                  <FaEnvelope />
                </div>

                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-400">udbhavmsr@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="bg-blue-600 p-4 rounded-full">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-400">Uttar Pradesh, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-5 mt-12">
              <a
                href="https://github.com/Udbhav1105"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/udbhav-mishra-7a567a286/"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </motion.div>

          {/* Right */}
       <motion.form
  ref={form}
  onSubmit={sendEmail}
  initial={{ opacity: 0, x: 60 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="bg-slate-900 rounded-3xl p-10 border border-slate-800 space-y-6"
>

  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
    className="w-full bg-slate-800 rounded-xl px-5 py-4 outline-none border border-slate-700 focus:border-blue-500"
  />

  <input
    type="email"
    name="email"
    placeholder="Your Email"
    required
    className="w-full bg-slate-800 rounded-xl px-5 py-4 outline-none border border-slate-700 focus:border-blue-500"
  />

  <input
    type="text"
    name="subject"
    placeholder="Subject"
    required
    className="w-full bg-slate-800 rounded-xl px-5 py-4 outline-none border border-slate-700 focus:border-blue-500"
  />

  <textarea
    name="message"
    rows="6"
    placeholder="Your Message..."
    required
    className="w-full bg-slate-800 rounded-xl px-5 py-4 outline-none border border-slate-700 focus:border-blue-500 resize-none"
  ></textarea>

  <button
    type="submit"
    className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition"
  >
    Send Message
    <FaPaperPlane />
  </button>

</motion.form>
        </div>
      </div>
    </section>
  );
}
