"use client";

export default function About() {
  return (
    <section
      id="about"
      className="bg-black text-white py-20 px-6 md:px-10  "
    >
      <div className="max-w-7xl  mx-8">

        {/* Small Heading */}
        <div className="flex items-center gap-2 mb-8 mt-4">
          <div className="w-2 h-2 bg-gray-400 rotate-45"></div>
          <span className="uppercase tracking-[4px] text-gray-500 text-[10px]">
            About
          </span>
        </div>
    
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left Side */}
          <div>

            <h2 className="text-3xl md:text-[40px] font-semibold tracking-tight leading-tight w-[100%] bg-gradient-to-r  bg-clip-text  italic ">
              I'm a{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent italic">
                Full Stack Developer 
              </span>
              <br />

              passionate about building
              <br />

              modern responsive web 
              <br />

               applications using
             

              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent italic">
                 MERN Stack
              </span>
              , clean code, and  creating user -
              <br />

              friendly digital experiences.
              <br />

              
            </h2>

            <p className="mt-10 text-gray-400 text-[15px] leading-9 max-w-xl italic">
              I am a Full Stack Developer and WordPress Developer
              with 8 months of hands-on experience creating modern
              websites and web applications. I enjoy building
              scalable solutions using React, Next.js, Node.js,
              Express.js and MongoDB while continuously learning
              new technologies and improving my development skills.
            </p>
          </div>

          {/* Right Side Stats */}
          <div className="grid grid-cols-2 gap-10 h-fit w-[80%] ml-20">

            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-cyan-400">
                8+
              </h3>

              <p className="mt-2 text-gray-500 uppercase tracking-widest text-sm text-[10px]">
                Months Experience
              </p>
            </div>

            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-cyan-400">
                4+
              </h3>

              <p className="mt-2 text-gray-500 uppercase tracking-widest text-sm text-[10px]">
                Projects Completed
              </p>
            </div>

            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-cyan-400">
                10+
              </h3>

              <p className="mt-2 text-gray-500 uppercase tracking-widest text-sm text-[10px]">
                Technologies
              </p>
            </div>

            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-cyan-400">
                ∞
              </h3>

              <p className="mt-2 text-gray-500 uppercase tracking-widest text-sm text-[10px]">
                Learning Passion
              </p>
            </div>

          </div>
        </div>


      </div>
    </section>
  );
}


