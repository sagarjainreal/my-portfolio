"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

export default function Home() {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current && window.scrollY > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-gradient-to-b from-black via-zinc-900 to-black text-white scroll-smooth overflow-x-hidden">

      {/* ================= HEADER ================= */}
      {/* ================= HEADER ================= */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: showHeader ? 0 : -140 }}
        transition={{ duration: 0.4 }}
        className="fixed top-6 left-0 w-full z-50"
      >
        <div className="mx-auto max-w-[90rem] px-10 md:px-28">
          <div className="h-24 flex items-center justify-between rounded-full px-10 bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl">
            {/* Name stays same */}
            <span className="text-2xl md:text-3xl font-bold tracking-wide">
              Sagar <span className="text-blue-500">Jain</span>
            </span>

            {/* Nav links bigger and smooth scroll */}
            <nav className="hidden md:flex gap-10 text-gray-400 text-base md:text-lg">
              {["About", "Skills", "Experience", "Education", "Projects", "Achievements", "Contact"].map(
                (label) => (
                  <button
                    key={label}
                    onClick={() => {
                      const el = document.getElementById(label.toLowerCase());
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className="relative group hover:text-white transition"
                  >
                    {label}
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all group-hover:w-full" />
                  </button>
                )
              )}
            </nav>
          </div>
        </div>
      </motion.header>



      {/* ================= HERO ================= */}
      <section id="home" className="min-h-screen flex items-center px-6 md:px-40 pt-40">
        <div className="grid md:grid-cols-2 gap-20 items-center w-full">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-6xl md:text-7xl font-semibold leading-tight">
              Java <span className="text-blue-500">Full Stack</span><br />Developer
            </h1>
            <p className="text-gray-400 mt-8 text-lg max-w-xl">
              System Engineer at Tata Consultancy Services <br></br> Java · Spring Boot · Angular · SQL
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="/resume/Sagar_Jain_Resume.pdf"
                download
                className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 transition"
              >
                Download Resume
              </a>
              <a
                href="https://www.linkedin.com/in/connectwithsagarjain/"
                target="_blank"
                className="px-6 py-3 rounded-full border border-white/20 hover:border-blue-500 transition flex items-center gap-2"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
              <a
                href="mailto:sagarjainreal@gmail.com"
                className="px-6 py-3 rounded-full border border-white/20 hover:border-blue-500 transition flex items-center gap-2"
              >
                <Mail size={18} /> Email
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative">
            <img src="/images/hero.png" alt="Sagar Jain" className="rounded-3xl shadow-[0_30px_80px_rgba(59,130,246,0.35)]" />
            <div className="absolute -inset-4 rounded-3xl bg-blue-500/20 blur-3xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="min-h-screen px-6 md:px-40 py-24 flex flex-col justify-center">
  {/* Heading on the left */}
  <div className="mb-12">
    <h2 className="text-5xl md:text-6xl font-semibold text-left">Skills</h2>
    <p className="text-gray-400 mt-4 max-w-2xl">
      A strong mix of backend, frontend, and database technologies, crafted to build scalable, real-world systems. Hover on each skill to see the technology icon.
    </p>
  </div>

  {/* Skills grid */}
  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
    {[
      { name: "Java", desc: "Backend development and OOP concepts", icon: "/icons/java.svg" },
      { name: "Spring Boot", desc: "REST APIs and microservices", icon: "/icons/spring.svg" },
      { name: "SQL", desc: "Database design and queries", icon: "/icons/sql.svg" },
      { name: "JavaScript", desc: "Frontend interactions and logic", icon: "/icons/js.svg" },
      { name: "Angular", desc: "Single Page Applications", icon: "/icons/angular.svg" },
      { name: "Next.js", desc: "Server-side rendering and React", icon: "/icons/nextjs.svg" },
      { name: "HTML/CSS", desc: "Markup and styling of pages", icon: "/icons/html.svg" },
      { name: "Git", desc: "Version control and collaboration", icon: "/icons/git.svg" },
    ].map((skill) => (
      <SkillCard key={skill.name} {...skill} />
    ))}
  </div>
</section>




      {/* ================= EXPERIENCE ================= */}
      <section id="experience" className="px-6 md:px-40 py-40 max-w-5xl">
        <h2 className="text-5xl font-semibold mb-20">Experience Roadmap</h2>
        <div className="relative border-l border-white/20 ml-6 space-y-16">
          <div className="pl-10 relative">
            <span className="absolute -left-[9px] top-1 w-4 h-4 bg-blue-500 rounded-full" />
            <span className="text-blue-500">Apr 2025 — Present</span>
            <h3 className="text-2xl font-semibold mt-3">System Engineer · Tata Consultancy Services</h3>
            <p className="text-gray-400 mt-4 text-lg">
              Working on enterprise Java Full Stack applications using Spring Boot, Angular, SQL, JDBC, and REST APIs.
            </p>
          </div>

          <div className="pl-10 relative">
            <span className="absolute -left-[9px] top-1 w-4 h-4 bg-blue-500 rounded-full" />
            <span className="text-blue-500">Jun 2023</span>
            <h3 className="text-2xl font-semibold mt-3">Martian Intern · Persistent Systems</h3>
            <p className="text-gray-400 mt-4 text-lg">
              SQL development internship focused on DBMS, query optimization, and data integrity.
            </p>
          </div>
        </div>
      </section>

      {/* ================= EDUCATION ================= */}
      <section id="education" className="px-6 md:px-40 py-40 max-w-5xl">
        <h2 className="text-5xl font-semibold mb-20">Education Roadmap</h2>
        <div className="relative border-l border-white/20 ml-6">
          <div className="pl-10 relative">
            <span className="absolute -left-[9px] top-1 w-4 h-4 bg-blue-500 rounded-full" />
            <span className="text-blue-500">2021 — 2025</span>
            <h3 className="text-2xl font-semibold mt-3">B.Tech · Computer Science & Engineering</h3>
            <p className="text-gray-400 mt-3 text-lg">JECRC · CGPA 8.78</p>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="px-6 md:px-40 py-40">
        <h2 className="text-5xl md:text-6xl font-semibold mb-6">Projects</h2>
        <p className="text-gray-400 mb-24 max-w-2xl">
          Real-world applications showcasing backend architecture, database design, and full stack integration.
        </p>

        <div className="space-y-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid md:grid-cols-2 gap-20 items-center justify-items-center"
          >
            <div className="relative w-full md:w-auto">
              <img src="/images/project1.png" alt="Library Management System" className="rounded-3xl shadow-2xl w-full" />
              <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-3xl -z-10" />
            </div>
            <div>
              <h3 className="text-3xl font-semibold">Library Management System</h3>
              <p className="text-blue-500 mt-3">Java · Spring Boot · Angular · SQL · JDBC</p>
              <p className="text-gray-400 mt-6 text-lg leading-relaxed">
                A complete enterprise-style library system with admin and user modules, REST APIs, robust validations,
                and secure database integration.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid md:grid-cols-2 gap-20 items-center justify-items-center md:flex-row-reverse"
          >
            <div className="relative w-full md:w-auto">
              <img src="/images/project2.png" alt="Grocery Mart" className="rounded-3xl shadow-2xl w-full" />
              <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-3xl -z-10" />
            </div>
            <div>
              <h3 className="text-3xl font-semibold">Grocery Mart</h3>
              <p className="text-blue-500 mt-3">Java · JDBC · SQL · JavaScript · HTML · CSS</p>
              <p className="text-gray-400 mt-6 text-lg leading-relaxed">
                An e-commerce platform for local vendors featuring product management, cart functionality,
                order processing, and strong data validations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= ACHIEVEMENTS ================= */}
      <section id="achievements" className="px-6 md:px-40 py-40">
        <h2 className="text-5xl font-semibold mb-20">Achievements</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          <StatCard title="200+" subtitle="Problems Solved on LeetCode & GFG" />
          <StatCard title="5 ⭐" subtitle="C++ on HackerRank" />
          <StatCard title="3 ⭐" subtitle="C on HackerRank" />
          <StatCard title="National Level" subtitle="Poetry Writing Certification" />
        </div>
      </section>

      {/* ================= CONTACT ================= */}
<section
  id="contact"
  className="relative px-6 md:px-40 py-32 bg-gradient-to-br from-black via-zinc-900 to-black overflow-hidden"
>
  {/* Decorative blurred circles */}
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow -z-10"></div>
  <div className="absolute -bottom-32 -right-24 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow -z-10"></div>

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    {/* Left Side: Heading + Message */}
    <div className="text-left">
      <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
        Let’s Connect
      </h2>
      <p className="text-gray-400 text-lg">
        I’d love to hear from you! Fill out the form and I’ll get back to you as soon as possible.
        Let me know your purpose so I can respond effectively.
      </p>
    </div>

    {/* Right Side: Form */}
    <form className="grid gap-6 backdrop-blur-xl bg-white/5 border border-white/10 p-10 rounded-3xl shadow-2xl transition-all">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="px-5 py-4 rounded-xl border border-white/20 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 hover:bg-white/20"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="px-5 py-4 rounded-xl border border-white/20 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 hover:bg-white/20"
      />
      <textarea
        name="purpose"
        placeholder="Purpose / Message"
        rows={5}
        className="px-5 py-4 rounded-xl border border-white/20 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 hover:bg-white/20 resize-none"
      />
      <button
        type="submit"
        className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-cyan-400 hover:to-blue-500 rounded-2xl text-white font-semibold text-lg transition transform hover:scale-105 hover:shadow-lg shadow-blue-500/50"
      >
        Send Message
      </button>
    </form>
  </div>
</section>




      <footer className="py-10 text-center text-gray-600">© {new Date().getFullYear()} Sagar Jain</footer>
    </main>
  );
}

// ================= HELPER COMPONENTS =================
function ProjectCard({ title, image, tech, desc }: { title: string; image: string; tech: string; desc: string }) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="grid md:grid-cols-2 gap-16 items-center">
      <img src={image} alt={title} className="rounded-3xl shadow-2xl" />
      <div>
        <h3 className="text-3xl font-semibold">{title}</h3>
        <p className="text-blue-500 mt-2">{tech}</p>
        <p className="text-gray-400 mt-6 text-lg">{desc}</p>
      </div>
    </motion.div>
  );
}

function StatCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
      <h3 className="text-3xl font-semibold text-blue-500">{title}</h3>
      <p className="text-gray-400 mt-3">{subtitle}</p>
    </div>
  );
}

function SkillMeter({
  name,
  percent,
  icon,
}: {
  name: string;
  percent: number;
  icon: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimate(true);
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = animate
    ? circumference - (circumference * percent) / 100
    : circumference;

  return (
    <div
      ref={ref}
      className="group flex items-center justify-between gap-10 cursor-pointer"
    >
      <div className="relative w-48 h-16 flex items-center">
        <span className="absolute text-2xl md:text-3xl font-light text-gray-300 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-3">
          {name}
        </span>
        <img
          src={icon}
          alt={name}
          className="absolute h-20 w-20 md:h-24 md:w-24 object-contain opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"
        />
      </div>

      <div className="relative w-28 h-28">
        <svg viewBox="0 0 100 100" className="-rotate-90">
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="rgb(55,65,81)"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="#3B82F6"
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 1.5s ease" }}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-sm text-gray-300">
          {percent}%
        </span>
      </div>
    </div>
  );
}

function SkillCard({
  name,
  desc,
  icon,
}: {
  name: string;
  desc: string;
  icon: string;
}) {
  return (
    <div className="relative w-56 h-40 bg-white/5 border border-white/10 rounded-3xl overflow-hidden cursor-pointer group shadow-lg transition-transform transform hover:scale-105">
      {/* Content: name + description */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 transition-opacity duration-300 group-hover:opacity-0">
        <h3 className="text-xl font-semibold text-gray-200">{name}</h3>
        <p className="text-gray-400 mt-2 text-sm">{desc}</p>
      </div>

      {/* Icon appears on hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
        <img src={icon} alt={name} className="w-16 h-16 object-contain" />
      </div>
    </div>
  );
}


