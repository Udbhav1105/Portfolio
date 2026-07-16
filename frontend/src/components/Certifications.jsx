import { motion } from "framer-motion";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";
import data from "../assets/certificates/deloitte-data-analytics.png"
import amazon from "../assets/certificates/amazon.png"
import cyber from '../assets/certificates/delloite.png'
import amazon1 from '../assets/certificates/amazon1.png'

const certificates = [
  {
  title: "Fundamentals of Machine Learning and Artificial Intelligence",
  issuer: "Amazon Web Services",
  image: amazon1,
  description:
    "Learned the fundamentals of Machine Learning and Artificial Intelligence, including core ML concepts, AI applications, and AWS-powered AI/ML services.",
  link: "https://drive.google.com/file/d/1PtkncGqHJ0bGazBSeKl1SuZUqER3PME5/view?usp=sharing",
},
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services",
    image: amazon,
    description:
      "Learned cloud fundamentals including EC2, IAM, S3, VPC, security, and cloud deployment concepts.",
    link: "https://drive.google.com/file/d/1lZz6Y68XRRjhE0wMpCuhOqPuk1GEsRNi/view?usp=sharing",
  },
  {
    title: "Deloitte Data Analytics Job Simulation",
    issuer: "Forage",
    image: data,
    description:
      "Completed practical data analytics tasks using Excel, Tableau, dashboards, and business insights.",
    link: "https://drive.google.com/file/d/17UW6LHWRZ9MBa0Jw5PiNNqmTWk_IwDkr/view?usp=sharing",
  },
  {
  title: "Deloitte Cyber Job Simulation",
  issuer: "Forage",
  image: cyber,
  description:
    "Completed practical cybersecurity tasks, gaining hands-on experience in cyber security concepts, threat analysis, and industry-based simulations.",
  link: "https://drive.google.com/file/d/1hzq6k99F0rN-hfgxuMYpYzIV39s1W5D8/view?usp=sharing",
},
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="bg-slate-900 text-white py-24 px-6 lg:px-20"
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
            Achievements
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Certifications
          </h2>

          <div className="w-24 h-1 bg-blue-500 rounded-full mx-auto mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">

          {certificates.map((certificate, index) => (

            <motion.div
              key={certificate.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .5,
                delay: index * .2,
              }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500 transition duration-300 hover:-translate-y-2"
            >

               <div className="bg-slate-950 rounded-t-3xl overflow-hidden">

                <div className="relative h-80 overflow-hidden rounded-t-3xl">
                  {/* Blurred Background */}
                  <img
                    src={certificate.image}
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
                  <div className="absolute inset-0  bg-slate-950/40"></div>

                  {/* Main Image */}
                  <div className="relative h-full flex items-center justify-center p-4">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
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

                <div className="flex items-center gap-3 mb-4">
                  <FaAward className="text-yellow-400 text-2xl" />

                  <h3 className="text-2xl font-bold">
                    {certificate.title}
                  </h3>
                </div>

                <p className="text-blue-400 font-medium">
                  {certificate.issuer}
                </p>

                <p className="text-gray-400 mt-5 leading-7">
                  {certificate.description}
                </p>

                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 mt-8 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg transition"
                >
                  View Certificate
                  <FaExternalLinkAlt />
                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}