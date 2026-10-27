import task from "./assets/images/task.png";
import post from "./assets/images/post.png";
import ekart from "./assets/images/ekart.png";
import myntra from "./assets/images/myntra.png";
export const projects = [
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
import data from "./assets/certificates/deloitte-data-analytics.png"
import amazon from "./assets/certificates/amazon.png"
import cyber from './assets/certificates/delloite.png'
import amazon1 from './assets/certificates/amazon1.png'
export const certificates = [
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

export const timeline = [
  {
  title: "Full Stack Developer Intern",
  subtitle: "Rezillion Tech Pvt. Ltd.",
  duration: "July 2026 - Present",
  description:
    "Contributing to the development of full-stack web applications, collaborating with cross-functional teams, and gaining practical experience in building scalable, production-ready software while following industry best practices.",
},
  {
    title: "B.Tech in Computer Science (Data Science)",
    subtitle: "ABES Engineering College",
    duration: "2023 - 2027",
    description:
      "Currently pursuing B.Tech with a focus on Data Science. Building scalable full-stack applications with Next.js, TypeScript, Node.js, and cloud deployment while strengthening DSA and problem-solving skills.",
  },
  {
    title: "Open to Full Stack Internship",
    subtitle: "Full Stack Developer",
    duration: "Present",
    description:
      "Actively looking for Full Stack Developer internship opportunities where I can contribute, learn, and build impactful software.",
  },
  {
    title: "AWS Cloud Foundations",
    subtitle: "Amazon Web Services",
    duration: "Certified",
    description:
      "Learned cloud fundamentals including EC2, IAM, S3, networking, and cloud deployment concepts.",
  },
  {
    title: "Deloitte Data Analytics",
    subtitle: "Forage Virtual Experience",
    duration: "Certified",
    description:
      "Completed practical tasks involving Excel, Tableau, dashboards, and business data analysis.",
  },
];
