import aboutImage from '../assets/About.jpg'; // Renamed for clarity

const About = () => {
  return (
    <div id="about" className="py-20 text-white bg-[#232325]">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          
          {/* Text Section - Takes up more space to prioritize the story */}
          <div className="md:col-span-3">
            <h2 className="text-4xl font-bold mb-5 relative inline-block">
              About Me
              {/* Simple underline accent */}
              <span className="block w-1/2 h-1 bg-indigo-500 mt-2"></span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Hello! I&apos;m Asiimwe Mark, a front-end developer driven by a passion for building beautiful, intuitive, and highly functional web experiences. My journey into web development started with a fascination for how design and code work together to create magic on the screen. Today, I translate that fascination into reality by transforming complex ideas into seamless, user-centric interfaces.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              I thrive on challenges and am constantly exploring new technologies to push the boundaries of what's possible. My approach combines a keen eye for design with a deep understanding of modern development practices. I believe the best products are built in collaborative environments, and I'm eager to bring my skills in creative problem-solving and front-end development to a team that shares my passion for innovation and excellence.
            </p>

            {/* Stats Section - More integrated and descriptive */}
            <div className="flex flex-col sm:flex-row gap-8 mt-10">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-indigo-400">
                  12<span className="text-indigo-300">+</span>
                </h3>
                <p className="text-gray-400 mt-1">Completed Projects</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-indigo-400">
                  2<span className="text-indigo-300">+</span>
                </h3>
                <p className="text-gray-400 mt-1">Years of Experience</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-indigo-400">
                  12<span className="text-indigo-300">+</span>
                </h3>
                <p className="text-gray-400 mt-1">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:col-span-2 flex justify-center md:justify-end">
            <div className="w-full max-w-sm relative group">
              <img
                src={aboutImage}
                alt="Asiimwe Mark"
                className="object-cover rounded-xl w-full h-auto shadow-lg transition-transform duration-500 transform group-hover:scale-105"
              />
              {/* Optional: Add a subtle overlay for effect */}
              <div className="absolute inset-0 bg-black opacity-10 rounded-xl"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
