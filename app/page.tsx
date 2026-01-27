export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-20">

      {/* ================= HERO SECTION ================= */}
      <section className="h-screen flex flex-col justify-center">
        <h1 className="text-5xl md:text-7xl font-bold">
          Hi, I’m <span className="text-blue-500">Sagar Jain</span>
        </h1>

        <p className="text-gray-400 mt-4 max-w-xl text-lg">
          Java Full Stack Developer | Spring Boot | SQL | Next.js  
          <br />
          System Engineer at TCS
        </p>

        <div className="mt-8 flex gap-4 flex-wrap">
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
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-20">
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
      </section>

      {/* ================= SKILLS SECTION ================= */}
      <section className="py-20">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>

        <div className="flex gap-4 flex-wrap">
          {[
            "Java",
            "Spring Boot",
            "SQL",
            "JDBC",
            "HTML",
            "CSS",
            "JavaScript",
            "Angular",
            "Next.js",
            "DSA",
            "OOPs",
            "DBMS"
          ].map((skill) => (
            <span
              key={skill}
              className="border border-gray-700 px-4 py-2 rounded-full text-gray-300 hover:border-blue-500 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* ================= PROJECTS SECTION ================= */}
      <section className="py-20">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border border-gray-700 p-6 rounded-xl hover:border-blue-500 transition">
            <h3 className="text-xl font-bold">Library Management System</h3>
            <p className="text-gray-400 mt-2">
              Java-based Library Management System built using Spring Boot,
              JDBC, Angular, SQL, and H2 database. Implemented REST APIs,
              secure CRUD operations, and strong input validations.
            </p>
          </div>

          <div className="border border-gray-700 p-6 rounded-xl hover:border-blue-500 transition">
            <h3 className="text-xl font-bold">Grocery Mart</h3>
            <p className="text-gray-400 mt-2">
              E-commerce web application for local vendors using HTML, CSS,
              JavaScript, Java, JDBC, and SQL. Includes product catalog,
              cart management, and order processing.
            </p>
          </div>

        </div>
      </section>

      {/* ================= ACHIEVEMENTS ================= */}
      <section className="py-20">
        <h2 className="text-3xl font-semibold mb-6">Achievements</h2>

        <ul className="text-gray-400 space-y-2 list-disc list-inside">
          <li>Solved 200+ coding problems on LeetCode & GeeksforGeeks</li>
          <li>5⭐ in C++ and 3⭐ in C on HackerRank</li>
          <li>National-Level Certification in Poetry Writing</li>
        </ul>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="py-20">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>

        <p className="text-gray-400">
          📧 Email:{" "}
          <a
            href="mailto:sagarjainreal@gmail.com"
            className="text-blue-500 hover:underline"
          >
            sagarjainreal@gmail.com
          </a>
        </p>

        <p className="text-gray-400 mt-2">
          📞 Phone: +91 7073407842
        </p>
      </section>

    </main>
  );
}
