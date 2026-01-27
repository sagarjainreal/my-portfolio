"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  // Track scroll for active navbar link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "achievements", "contact"];
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    { name: "Java", level: "90%" },
    { name: "Spring Boot", level: "85%" },
    { name: "SQL", level: "80%" },
    { name: "JDBC", level: "80%" },
    { name: "HTML", level: "95%" },
    { name: "CSS", level: "90%" },
    { name: "JavaScript", level: "85%" },
    { name: "Angular", level: "80%" },
    { name: "Next.js", level: "75%" },
    { name: "DSA", level: "85%" },
    { name: "OOPs", level: "90%" },
    { name: "DBMS", level: "85%" },
  ];

  const projects = [
    {
      name: "Library Management System",
      description:
        "Java-based Library Management System built using Spring Boot, JDBC, Angular, SQL, and H2 database. Implemented REST APIs, secure CRUD operations, and strong input validations.",
      tech: ["Java", "Spring Boot", "SQL", "Angular"],
      live: "#",
      github: "#",
    },
    {
      name: "Grocery Mart",
      description:
        "E-commerce web application for local vendors using HTML, CSS, JavaScript, Java, JDBC, and SQL. Includes product catalog, cart management, and order processing.",
      tech: ["HTML", "CSS", "JavaScript", "SQL", "Java"],
      live: "#",
      github: "#",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-20 scroll-smooth">
      {/* ================= NAVBAR ================= */}
      <nav className="fixed w-full top-0 left-0 bg-black bg-opacity-80 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <div className="text-xl font-bold text-blue-500">Sagar Jain</div>
          <div className="hidden md:flex gap-6 text-gray-400">
            {["home", "about", "skills", "projects", "achievements", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`hover:text-blue-500 transition capitalize ${
                  activeSection === section ? "text-blue-500 font-semibold" : ""
                }`}
              >
                {section}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center pt-20 md:pt-0"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold"
        >
          Hi, I’m <span className="text-blue-500">Sagar Jain</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-gray-400 mt-4 max-w-xl text-lg"
        >
          Java Full Stack Developer | Spring Boot | SQL | Next.js <br />
          System Engineer at TCS
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 flex gap-4 flex-wrap"
        >
          <a
            href="/resume/Sagar_Jain_Resume.pdf"
            download
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-black font-semibold rounded-lg transition-all"
          >
            Download Resume
          </a>

          <a
            href="https://www.linkedin.com/in/connectwithsagarjain/"
            target="_blank"
            className="px-6 py-3 border border-gray-600 hover:border-blue-500 rounded-lg transition-all"
          >
            LinkedIn
          </a>
          <a
            href="#"
            target="_blank"
            className="px-6 py-3 border border-gray-600 hover:border-blue-500 rounded-lg transition-all"
          >
            GitHub
          </a>
        </motion.div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section id="about" className="py-20 flex flex-col md:flex-row items-center gap-8">
        <motion.img
          src="/profile.jpg"
          alt="Sagar Jain"
          className="w-48 h-48 rounded-full border-4 border-blue-500 object-cover"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-400 max-w-2xl leading-relaxed">
            I am a Computer Science graduate from Jaipur Engineering College and
            Research Centre with a strong foundation in Java, SQL, and full-stack
            development. Currently working as a System Engineer at TCS, I have
            hands-on experience with Java Full Stack technologies including
            Spring Boot, JDBC, Angular, and database-driven applications.
            I enjoy problem-solving, building scalable systems, and continuously
            improving my technical skills.
          </p>
        </motion.div>
      </section>

      {/* ================= SKILLS SECTION ================= */}
      <section id="skills" className="py-20">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <div className="flex flex-col gap-4">
          {skills.map((skill) => (
            <div key={skill.name}>
              <p className="mb-1">{skill.name}</p>
              <div className="w-full bg-gray-800 rounded-full h-4">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5 }}
                  className="bg-blue-500 h-4 rounded-full"
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROJECTS SECTION ================= */}
      <section id="projects" className="py-20">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.name}
              className="group border border-gray-700 p-6 rounded-xl hover:border-blue-500 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xl font-bold">{project.name}</h3>
              <p className="text-gray-400 mt-2">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-gray-300 px-2 py-1 border border-gray-700 rounded-full text-sm hover:border-blue-500 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-4">
                <a href={project.live} target="_blank" className="text-blue-500 hover:underline">
                  Live
                </a>
                <a href={project.github} target="_blank" className="text-blue-500 hover:underline">
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= ACHIEVEMENTS ================= */}
      <section id="achievements" className="py-20">
        <h2 className="text-3xl font-semibold mb-6">Achievements</h2>
        <div className="grid md:grid-cols-3 gap-6 text-gray-400">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <p className="text-3xl font-bold">
              <CountUp end={200} duration={2} />+
            </p>
            <p>Problems Solved</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <p className="text-3xl font-bold">5⭐ / 3⭐</p>
            <p>HackerRank Ratings</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <p className="text-3xl font-bold">🏆</p>
            <p>National Poetry Certification</p>
          </motion.div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-20">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>

        <p className="text-gray-400 mb-2">
          📧 Email:{" "}
          <a href="mailto:sagarjainreal@gmail.com" className="text-blue-500 hover:underline">
            sagarjainreal@gmail.com
          </a>
        </p>

        <p className="text-gray-400 mb-4">📞 Phone: +91 7073407842</p>

        <div className="flex gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/connectwithsagarjain/" target="_blank">
            <FaLinkedin className="hover:text-blue-500 transition" />
          </a>
          <a href="#" target="_blank">
            <FaGithub className="hover:text-blue-500 transition" />
          </a>
          <a href="#" target="_blank">
            <FaTwitter className="hover:text-blue-500 transition" />
          </a>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-6 text-center text-gray-400 border-t border-gray-700">
        © 2026 Sagar Jain. All rights reserved.
      </footer>
    </main>
  );
}
