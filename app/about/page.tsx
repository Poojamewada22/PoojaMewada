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
              I am a Full Stack Developer and WordPress Developer with 2 years
              of hands-on experience creating modern websites and web
              applications. I specialize in building scalable and responsive
              solutions using React.js, Next.js, Node.js, Express.js, and
              MongoDB. I also have experience developing and customizing
              WordPress websites. I enjoy solving technical challenges,
              integrating APIs, and continuously learning new technologies to
              improve my development skills and deliver high-quality web
              solutions.
            </p>
          </div>

          {/* Right Side Stats */}
          <div className="mx-auto grid h-fit w-full max-w-md min-w-0 grid-cols-2 justify-items-center gap-x-3 gap-y-8 text-center sm:gap-x-8 sm:gap-y-10 lg:max-w-none lg:gap-x-6 lg:gap-y-12 lg:pt-2">
            {/* Stat 1 */}
            <div className="flex min-w-0 w-full flex-col items-center">
              <h3 className="text-3xl font-bold text-cyan-400 sm:text-4xl md:text-5xl">
                2
              </h3>

              <p className="mt-2 text-[10px] uppercase leading-5 tracking-wider text-gray-500 sm:text-xs sm:tracking-widest">
                Years Experience
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
      </div>
    </section>
  );
}
