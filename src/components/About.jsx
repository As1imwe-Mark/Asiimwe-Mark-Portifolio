import about from '../assets/About.jpg';

const About = () => {
  return (
    <div id="about" className="py-10 text-white bg-[#232325] min-h-screen">
      <div className="flex flex-col-reverse sm:flex-row items-center md:gap-6 gap-12 px-5 max-w-6xl mx-auto">
        
        {/* Image Section */}
        <div className="w-full sm:w-1/2 flex justify-center">
          <div className="w-full max-w-sm">
            <img
              src={about}
              alt="about image"
              className="object-cover bg-gray-700 rounded-xl h-auto w-full filter grayscale brightness-50"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full sm:w-1/2">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                About <span>Me</span>
              </h3>
              <p className="text-justify leading-7 w-full sm:w-11/12 mx-auto">
                Hello there! I'm Asiimwe Mark, a passionate web developer with a knack for translating creative design concepts into seamless user experiences. My unique blend of design thinking and coding prowess empowers me to craft intuitive interfaces that leave lasting impressions. I thrive in collaborative environments and am eager to contribute my skills to companies that value innovation, user-centered design, and cutting-edge technologies. If you're seeking someone who can bring fresh ideas to the forefront of your projects, let's connect!
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="flex flex-wrap mt-10 items-center gap-5 justify-center sm:justify-start">
            <div className="bg-[#333333]/40 p-5 rounded-lg text-center">
              <h3 className="md:text-4xl text-2xl font-semibold text-white">
                12<span>+</span>
              </h3>
              <p className="md:text-base text-xs">Projects</p>
            </div>
            <div className="bg-[#333333]/40 p-5 rounded-lg text-center">
              <h3 className="md:text-4xl text-2xl font-semibold text-white">
                2<span>+</span>
              </h3>
              <p className="md:text-base text-xs">years experience</p>
            </div>
            <div className="bg-[#333333]/40 p-5 rounded-lg text-center">
              <h3 className="md:text-4xl text-2xl font-semibold text-white">
                12<span>+</span>
              </h3>
              <p className="md:text-base text-xs">happy clients</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
