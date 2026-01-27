export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-20">

      {/* HERO SECTION */}
      <section className="h-screen flex flex-col justify-center">
        <h1 className="text-5xl md:text-7xl font-bold">
          Hi, I’m <span className="text-blue-500">Sagar</span>
        </h1>
        <p className="text-gray-400 mt-4 max-w-xl">
          Frontend Developer building clean, modern, and responsive websites.
        </p>
      </section>

      {/* ABOUT */}
      <section className="py-20">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-400 max-w-2xl">
          I am a passionate web developer who enjoys creating beautiful user
          interfaces and smooth user experiences using modern technologies.
        </p>
      </section>

      {/* SKILLS */}
      <section className="py-20">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <div className="flex gap-4 flex-wrap">
          {["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"].map(
            (skill) => (
              <span
                key={skill}
                className="border border-gray-700 px-4 py-2 rounded-full text-gray-300"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-20">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-700 p-6 rounded-xl">
            <h3 className="text-xl font-bold">Portfolio Website</h3>
            <p className="text-gray-400 mt-2">
              A personal portfolio built using Next.js and Tailwind CSS.
            </p>
          </div>

          <div className="border border-gray-700 p-6 rounded-xl">
            <h3 className="text-xl font-bold">Project Two</h3>
            <p className="text-gray-400 mt-2">
              Description of your second project goes here.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-400">
          Email: sagar@email.com
        </p>
      </section>

    </main>
  );
}
