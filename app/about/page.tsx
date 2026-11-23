"use client";

export default function About() {
  return (
    <section
      id="about"
      className="w-full min-w-0 overflow-hidden bg-black px-4 py-14 text-white sm:px-6 sm:py-16 md:px-30 lg:py-20"
    >
      <div className="mx-auto w-full max-w-7xl min-w-0">
        {/* Small Heading */}
        <div className="mb-8 mt-2 flex items-center gap-2 sm:mt-4">
          <div className="h-2 w-2 shrink-0 rotate-45 bg-gray-400" />
          <span className="text-[10px] uppercase tracking-[4px] text-gray-500">
            About
          </span>
        </div>

        {/* Main Content */}
        <div className="grid min-w-0 grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Side */}
          <div className="min-w-0">
            <h2 className="text-3xl font-semibold italic leading-tight tracking-tight sm:text-4xl md:text-[30px]">
              I'm a{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Full Stack Developer
              </span>
              <br className="hidden sm:block" /> passionate about building
              modern responsive web applications using{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                MERN Stack
              </span>
              , clean code, and creating user-friendly digital experiences.
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-xl text-sm italic leading-7 text-gray-400 sm:mt-8 sm:text-[15px] sm:leading-9 lg:mt-10">
              {/* I am a Full Stack Developer and WordPress Developer with 2 years
              and 1 month of professional experience in creating modern websites
              and web applications. I specialize in building scalable and
              responsive solutions using React.js, Next.js, Node.js, Express.js,
              and MongoDB. I also have experience developing and customizing
              WordPress websites. I enjoy solving technical challenges,
              integrating APIs, collaborating with teams, and continuously
              learning new technologies to deliver high-quality web solutions. */}
            </p>
          </div>

          {/* Right Side Stats */}
          <div className="mx-auto grid h-fit w-full max-w-md min-w-0 grid-cols-2 justify-items-center gap-x-3 gap-y-8 text-center sm:gap-x-8 sm:gap-y-10 lg:max-w-none lg:gap-x-6 lg:gap-y-12 lg:pt-2">
            {/* Stat 1 */}
            <div className="flex min-w-0 w-full flex-col items-center">
              <h3 className="text-3xl font-bold text-cyan-400 sm:text-4xl md:text-5xl">
                2Y 1M
              </h3>
              <p className="mt-2 text-[10px] uppercase leading-5 tracking-wider text-gray-500 sm:text-xs sm:tracking-widest">
                Experience
              </p>
            </div>

            {/* Stat 2 */}
            <div className="flex min-w-0 w-full flex-col items-center">
              <h3 className="text-3xl font-bold text-cyan-400 sm:text-4xl md:text-5xl">
                4+
              </h3>
              <p className="mt-2 text-[10px] uppercase leading-5 tracking-wider text-gray-500 sm:text-xs sm:tracking-widest">
                Projects Completed
              </p>
            </div>

            {/* Stat 3 */}
            <div className="flex min-w-0 w-full flex-col items-center">
              <h3 className="text-3xl font-bold text-cyan-400 sm:text-4xl md:text-5xl">
                10+
              </h3>
              <p className="mt-2 text-[10px] uppercase leading-5 tracking-wider text-gray-500 sm:text-xs sm:tracking-widest">
                Technologies
              </p>
            </div>

            {/* Stat 4 */}
            <div className="flex min-w-0 w-full flex-col items-center">
              <h3 className="text-3xl font-bold text-cyan-400 sm:text-4xl md:text-5xl">
                ∞
              </h3>
              <p className="mt-2 text-[10px] uppercase leading-5 tracking-wider text-gray-500 sm:text-xs sm:tracking-widest">
                Learning Passion
              </p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-20 sm:mt-24">
          <div className="mb-10">
            <span className="text-[10px] uppercase tracking-[4px] text-gray-500">
              My Journey
            </span>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Work{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-gray-400">
              My professional journey, experience, and continuous growth in web
              development.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative space-y-8 border-l border-white/10 pl-6 sm:pl-8">
            {/* Professional Experience */}
            <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-cyan-400/40 sm:p-7">
              <div className="absolute -left-[31px] top-7 h-3 w-3 rounded-full border-2 border-cyan-400 bg-black sm:-left-[39px]" />

              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                <div>
                  <h3 className="text-lg font-semibold text-white sm:text-xl">
                    Full Stack Developer
                  </h3>

                  <p className="mt-1 text-sm text-cyan-400">
                    Professional Experience
                  </p>
                </div>

                <span className="w-fit rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-xs text-cyan-400">
                  2 Years 1 Month
                </span>
              </div>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                Working on modern and responsive web applications using
                React.js, Next.js, Node.js, Express.js, and MongoDB. Experienced
                in frontend and backend development, API integration, debugging,
                and building user-friendly digital solutions.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "React.js",
                  "Next.js",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "API Integration",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Internship Experience */}
            <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-cyan-400/40 sm:p-7">
              <div className="absolute -left-[31px] top-7 h-3 w-3 rounded-full border-2 border-purple-400 bg-black sm:-left-[39px]" />

              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                <div>
                  <h3 className="text-lg font-semibold text-white sm:text-xl">
                    Web Development Intern
                  </h3>

                  <p className="mt-1 text-sm text-purple-400">
                    AmazingWeb.Design
                  </p>
                </div>

                <span className="w-fit rounded-full border border-purple-400/20 bg-purple-400/10 px-4 py-1.5 text-xs text-purple-400">
                  April 2025 – July 2025
                </span>
              </div>

              <p className="mt-4 text-xs font-medium uppercase tracking-wider text-gray-500">
                3 Months Internship
              </p>

              <ul className="mt-4 space-y-3 text-sm leading-7 text-gray-400">
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                  Assisted in building and customizing responsive websites using
                  WordPress, HTML5, CSS3, and JavaScript.
                </li>

                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                  Collaborated with the design and development team to implement
                  UI updates, test cross-browser compatibility, and maintain
                  live client websites.
                </li>
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "WordPress",
                  "HTML5",
                  "CSS3",
                  "JavaScript",
                  "Responsive Design",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
