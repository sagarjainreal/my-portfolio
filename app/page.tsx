"use client";

import Image from "next/image";
import { FaLinkedin, FaGithub, FaTrophy, FaCode } from "react-icons/fa";

export default function Home() {
  const skills = [
    { name: "Java", icon: "/icons/java.svg" },
    { name: "Spring Boot", icon: "/icons/spring.svg" },
    { name: "SQL", icon: "/icons/sql.svg" },
    { name: "JavaScript", icon: "/icons/js.svg" },
    { name: "Angular", icon: "/icons/angular.svg" },
    { name: "Next.js", icon: "/icons/nextjs.svg" },
  ];

  return (
    <main className="px-6 md:px-20">

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="min-h-screen flex flex-col md:flex-row items-center justify-between gap-10"
      >
        <div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I’m <span className="text-blue-500">Sagar Jain</span>
          </h1>
          <p className="text-gray-400 mt-6 text-lg max-w-xl">
            Java Full Stack Developer • Spring Boot • SQL • Next.js  
            <br />
            System Engineer at TCS
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/resume/Sagar_Jain_Resume.pdf"
              download
              className="px-6 py-3 bg-blue-500 text-black rounded-lg font-semibold hover:bg-blue-600"
            >
              Download Resume
            </a>

            <a
              href="https://www.linkedin.com/in/connectwithsagarjain/"
              target="_blank"
              className="px-6 py-3 border border-gray-600 rounded-lg hover:border-blue-500"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <Image
          src="/images/hero.png"
          alt="Developer Illustration"
          width={500}
          height={500}
        />
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-24 max-w-4xl">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-400 leading-relaxed">
          I am a Computer Science graduate from Jaipur Engineering College and
          Research Centre. Currently working as a System Engineer at TCS,
          specializing in Java Full Stack development using Spring Boot, JDBC,
          Angular, and SQL. I love building scalable systems and solving
          real-world problems.
        </p>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="py-24">
        <h2 className="text-3xl font-bold mb-10">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-4 p-4 border border-gray-700 rounded-xl hover:border-blue-500 transition"
            >
              <Image src={skill.icon} alt={skill.name} width={40} height={40} />
              <span className="text-lg">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="py-24">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-gray-700 rounded-xl overflow-hidden hover:border-blue-500">
            <Image src="/images/project1.png" alt="Library Project" width={600} height={300} />
            <div className="p-6">
              <h3 className="text-xl font-semibold">Library Management System</h3>
              <p className="text-gray-400 mt-2">
                Spring Boot, Angular, JDBC, SQL based system with REST APIs.
              </p>
            </div>
          </div>

          <div className="border border-gray-700 rounded-xl overflow-hidden hover:border-blue-500">
            <Image src="/images/project2.png" alt="Grocery Project" width={600} height={300} />
            <div className="p-6">
              <h3 className="text-xl font-semibold">Grocery Mart</h3>
              <p className="text-gray-400 mt-2">
                E-commerce app with cart, orders, and vendor support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ACHIEVEMENTS ================= */}
      <section id="achievements" className="py-24">
        <h2 className="text-3xl font-bold mb-10">Achievements</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-gray-700 p-6 rounded-xl text-center">
            <FaCode className="text-3xl mx-auto mb-4 text-blue-500" />
            <p className="text-xl font-bold">200+</p>
            <p className="text-gray-400">Problems Solved</p>
          </div>

          <div className="border border-gray-700 p-6 rounded-xl text-center">
            <FaTrophy className="text-3xl mx-auto mb-4 text-blue-500" />
            <p className="text-xl font-bold">5⭐ / 3⭐</p>
            <p className="text-gray-400">HackerRank</p>
          </div>

          <div className="border border-gray-700 p-6 rounded-xl text-center">
            🏆
            <p className="text-xl font-bold mt-4">National Certification</p>
            <p className="text-gray-400">Poetry Writing</p>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-24">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>

        <p className="text-gray-400 mb-2">
          📧 sagarjainreal@gmail.com
        </p>
        <p className="text-gray-400 mb-6">
          📞 +91 7073407842
        </p>

        <div className="flex gap-6 text-2xl">
          <a href="https://www.linkedin.com/in/connectwithsagarjain/" target="_blank">
            <FaLinkedin />
          </a>
          <a href="#" target="_blank">
            <FaGithub />
          </a>
        </div>
      </section>

      <footer className="py-6 text-center text-gray-500 border-t border-gray-700">
        © 2026 Sagar Jain
      </footer>
    </main>
  );
}
