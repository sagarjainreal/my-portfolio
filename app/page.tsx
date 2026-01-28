"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, Menu, X } from "lucide-react";

export default function Home() {
  const [showHeader, setShowHeader] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const navItems = ["About", "Skills", "Experience", "Education", "Projects", "Achievements", "Contact"];

  const handleNavClick = (label: string) => {
    const el = document.getElementById(label.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileMenuOpen(false); // Close mobile menu
  };

  return (
    <main className="bg-gradient-to-b from-black via-zinc-900 to-black text-white scroll-smooth overflow-x-hidden">

      {/* ================= HEADER ================= */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: showHeader ? 0 : -140 }}
        transition={{ duration: 0.4 }}
        className="fixed top-6 left-0 w-full z-50"
      >
        <div className="mx-auto max-w-[90rem] px-6 md:px-28">
          <div className="h-24 flex items-center justify-between rounded-full px-6 md:px-10 bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl">

            {/* Name */}
            <span className="text-2xl md:text-3xl font-bold tracking-wide">
              Sagar <span className="text-blue-500">Jain</span>
            </span>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-10 text-gray-400 text-base md:text-lg">
              {navItems.map((label) => (
                <button
                  key={label}
                  onClick={() => handleNavClick(label)}
                  className="relative group hover:text-white transition"
                >
                  {label}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all group-hover:w-full" />
                </button>
              ))}
            </nav>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10 mt-2 rounded-b-3xl p-6 space-y-6 text-center">
            {navItems.map((label) => (
              <button
                key={label}
                onClick={() => handleNavClick(label)}
                className="block w-full text-lg text-gray-300 hover:text-white transition py-2"
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </motion.header>

      {/* ================= HERO ================= */}
      <section id="home" className="min-h-screen flex items-center px-6 md:px-40 pt-32 md:pt-40">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center w-full">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold leading-tight">
              Java <span className="text-blue-500">Full Stack</span><br />Developer
            </h1>
            <p className="text-gray-400 mt-6 md:mt-8 text-base sm:text-lg max-w-full sm:max-w-xl">
              System Engineer at Tata Consultancy Services <br /> Java · Spring Boot · Angular · SQL
            </p>

            <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href="/resume/Sagar_Jain_Resume.pdf"
                download
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-blue-600 hover:bg-blue-500 transition"
              >
                Download Resume
              </a>
              <a
                href="https://www.linkedin.com/in/connectwithsagarjain/"
                target="_blank"
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white/20 hover:border-blue-500 transition flex items-center gap-2"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
              <a
                href="mailto:sagarjainreal@gmail.com"
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white/20 hover:border-blue-500 transition flex items-center gap-2"
              >
                <Mail size={18} /> Email
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative w-full max-w-full">
            <img src="/images/hero.png" alt="Sagar Jain" className="rounded-3xl shadow-[0_30px_80px_rgba(59,130,246,0.35)] w-full h-auto object-contain" />
            <div className="absolute -inset-4 rounded-3xl bg-blue-500/20 blur-3xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="min-h-screen px-6 md:px-40 py-24 flex flex-col justify-center">
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-left">Skills</h2>
          <p className="text-gray-400 mt-4 max-w-full sm:max-w-2xl text-sm sm:text-base">
            A strong mix of backend, frontend, and database technologies, crafted to build scalable, real-world systems. Hover on each skill to see the technology icon.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
          {[{ name: "Java", desc: "Backend development and OOP concepts", icon: "/icons/java.svg" },
            { name: "Spring Boot", desc: "REST APIs and microservices", icon: "/icons/spring.svg" },
            { name: "SQL", desc: "Database design and queries", icon: "/icons/sql.svg" },
            { name: "JavaScript", desc: "Frontend interactions and logic", icon: "/icons/js.svg" },
            { name: "Angular", desc: "Single Page Applications", icon: "/icons/angular.svg" },
            { name: "Next.js", desc: "Server-side rendering and React", icon: "/icons/nextjs.svg" },
            { name: "HTML/CSS", desc: "Markup and styling of pages", icon: "/icons/html.svg" },
            { name: "Git", desc: "Version control and collaboration", icon: "/icons/git.svg" }].map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section id="experience" className="px-6 md:px-40 py-32 md:py-40 max-w-full md:max-w-5xl">
        <h2 className="text-4xl sm:text-5xl md:text-5xl font-semibold mb-16 md:mb-20">Experience Roadmap</h2>
        <div className="relative border-l border-white/20 ml-4 sm:ml-6 space-y-12 md:space-y-16">
          <div className="pl-6 sm:pl-10 relative">
            <span className="absolute -left-3 sm:-left-[9px] top-1 w-4 h-4 bg-blue-500 rounded-full" />
            <span className="text-blue-500 text-sm sm:text-base">Apr 2025 — Present</span>
            <h3 className="text-xl sm:text-2xl font-semibold mt-2 sm:mt-3">System Engineer · Tata Consultancy Services</h3>
            <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-lg">
              Working on enterprise Java Full Stack applications using Spring Boot, Angular, SQL, JDBC, and REST APIs.
            </p>
          </div>

          <div className="pl-6 sm:pl-10 relative">
            <span className="absolute -left-3 sm:-left-[9px] top-1 w-4 h-4 bg-blue-500 rounded-full" />
            <span className="text-blue-500 text-sm sm:text-base">Jun 2023</span>
            <h3 className="text-xl sm:text-2xl font-semibold mt-2 sm:mt-3">Martian Intern · Persistent Systems</h3>
            <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-lg">
              SQL development internship focused on DBMS, query optimization, and data integrity.
            </p>
          </div>
        </div>
      </section>

      {/* ================= EDUCATION ================= */}
      <section id="education" className="px-6 md:px-40 py-32 md:py-40 max-w-full md:max-w-5xl">
        <h2 className="text-4xl sm:text-5xl md:text-5xl font-semibold mb-16 md:mb-20">Education Roadmap</h2>
        <div className="relative border-l border-white/20 ml-4 sm:ml-6">
          <div className="pl-6 sm:pl-10 relative">
            <span className="absolute -left-3 sm:-left-[9px] top-1 w-4 h-4 bg-blue-500 rounded-full" />
            <span className="text-blue-500 text-sm sm:text-base">2021 — 2025</span>
            <h3 className="text-xl sm:text-2xl font-semibold mt-2 sm:mt-3">B.Tech · Computer Science & Engineering</h3>
            <p className="text-gray-400 mt-2 sm:mt-3 text-sm sm:text-lg">JECRC · CGPA 8.78</p>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="px-6 md:px-40 py-32 md:py-40">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6">Projects</h2>
        <p className="text-gray-400 mb-16 md:mb-24 max-w-full sm:max-w-2xl text-sm sm:text-base">
          Real-world applications showcasing backend architecture, database design, and full stack integration.
        </p>

        <div className="space-y-20 md:space-y-32">
          {/* Project 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid md:grid-cols-2 gap-12 md:gap-20 items-center justify-items-center"
          >
            <div className="relative w-full max-w-full">
              <img src="/images/project1.png" alt="Library Management System" className="rounded-3xl shadow-2xl w-full h-auto object-contain" />
              <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-3xl -z-10" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold">Library Management System</h3>
              <p className="text-blue-500 mt-2 sm:mt-3 text-sm sm:text-base">Java · Spring Boot · Angular · SQL · JDBC</p>
              <p className="text-gray-400 mt-4 sm:mt-6 text-sm sm:text-lg leading-relaxed">
                A complete enterprise-style library system with admin and user modules, REST APIs, robust validations,
                and secure database integration.
              </p>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid md:grid-cols-2 gap-12 md:gap-20 items-center justify-items-center md:flex-row-reverse"
          >
            <div className="relative w-full max-w-full">
              <img src="/images/project2.png" alt="Grocery Mart" className="rounded-3xl shadow-2xl w-full h-auto object-contain" />
              <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-3xl -z-10" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold">Grocery Mart</h3>
              <p className="text-blue-500 mt-2 sm:mt-3 text-sm sm:text-base">Java · JDBC · SQL · JavaScript · HTML · CSS</p>
              <p className="text-gray-400 mt-4 sm:mt-6 text-sm sm:text-lg leading-relaxed">
                An e-commerce platform for local vendors featuring product management, cart functionality,
                order processing, and strong data validations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= ACHIEVEMENTS ================= */}
      <section id="achievements" className="px-6 md:px-40 py-32 md:py-40">
        <h2 className="text-4xl sm:text-5xl md:text-5xl font-semibold mb-16 md:mb-20">Achievements</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 max-w-full md:max-w-7xl mx-auto">
          <StatCard title="200+" subtitle="Problems Solved on LeetCode & GFG" />
          <StatCard title="5 ⭐" subtitle="C++ on HackerRank" />
          <StatCard title="3 ⭐" subtitle="C on HackerRank" />
          <StatCard title="National Level" subtitle="Poetry Writing Certification" />
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="relative px-6 md:px-40 py-24 md:py-32 bg-gradient-to-br from-black via-zinc-900 to-black overflow-hidden"
      >
        {/* Decorative blurred circles */}
        <div className="absolute -top-20 -left-20 w-60 sm:w-72 h-60 sm:h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow -z-10"></div>
        <div className="absolute -bottom-32 -right-24 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow -z-10"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side */}
          <div className="text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
              Let’s Connect
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              I’d love to hear from you! Fill out the form and I’ll get back to you as soon as possible.
              Let me know your purpose so I can respond effectively.
            </p>
          </div>

          {/* Form */}
          <form
            className="grid gap-4 sm:gap-6 backdrop-blur-xl bg-white/5 border border-white/10 p-6 sm:p-10 rounded-3xl shadow-2xl transition-all"
            onSubmit={async (e) => {
              e.preventDefault();
              const target = e.target as any;
              const data = {
                name: target.name.value,
                email: target.email.value,
                purpose: target.purpose.value,
              };

              try {
                const res = await fetch("/api/contact", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(data),
                });

                if (res.ok) {
                  alert("Message sent! I will connect with you soon.");
                  target.reset();
                } else {
                  alert("Failed to send. Please try again later.");
                }
              } catch (err) {
                console.error(err);
                alert("An error occurred. Please try again.");
              }
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="px-4 sm:px-5 py-3 sm:py-4 rounded-xl border border-white/20 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 hover:bg-white/20"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="px-4 sm:px-5 py-3 sm:py-4 rounded-xl border border-white/20 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 hover:bg-white/20"
            />
            <textarea
              name="purpose"
              placeholder="Purpose / Message"
              rows={5}
              required
              className="px-4 sm:px-5 py-3 sm:py-4 rounded-xl border border-white/20 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 hover:bg-white/20 resize-none"
            />
            <button
              type="submit"
              className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-cyan-400 hover:to-blue-500 rounded-2xl text-white font-semibold text-base sm:text-lg transition transform hover:scale-105 hover:shadow-lg shadow-blue-500/50"
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
      <img src={image} alt={title} className="rounded-3xl shadow-2xl w-full h-auto" />
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
    <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
      <h3 className="text-2xl sm:text-3xl font-semibold text-blue-500">{title}</h3>
      <p className="text-gray-400 mt-2 sm:mt-3 text-sm sm:text-base">{subtitle}</p>
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
    <div className="relative w-44 sm:w-52 md:w-56 h-36 sm:h-40 bg-white/5 border border-white/10 rounded-3xl overflow-hidden cursor-pointer group shadow-lg transition-transform transform hover:scale-105">
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-3 sm:px-4 transition-opacity duration-300 group-hover:opacity-0">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-200">{name}</h3>
        <p className="text-gray-400 mt-1 sm:mt-2 text-xs sm:text-sm">{desc}</p>
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
        <img src={icon} alt={name} className="w-14 sm:w-16 h-14 sm:h-16 object-contain" />
      </div>
    </div>
  );
}
