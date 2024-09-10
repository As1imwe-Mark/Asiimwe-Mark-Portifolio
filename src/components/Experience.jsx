import { skills } from '././constants/skills';
import { Experiences } from './constants/Experience';

const Experience = () => {
  return (
    <div id="skills-experience" className="py-10 bg-[#232325]">
      <h1 className="mb-8 text-3xl text-white text-center">
        Skills & <span>Experiences</span>
      </h1>

      <div className="flex flex-wrap lg:flex-nowrap justify-between items-start lg:space-x-12 mx-auto max-w-7xl px-4">
        
        {/* Skills Section */}
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-3 justify-center lg:justify-start items-start">
            {skills.map((skill) => (
              <div
                className="m-4 flex flex-col items-center"
                key={skill.name}
              >
                <div
                  className="flex items-center justify-center w-20 h-20 md:w-16 md:h-16 rounded-full bg-slate-100"
          
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-1/2 h-1/2"
                  />
                </div>
                <p className="mt-2 text-sm font-medium text-white">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
          {
            Experiences.map((experience)=> <div key={experience.year} className="mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto lg:mx-0">
            <p>{experience.company}</p>
            <p className="text-gray-400">{experience.year}</p>
            <p className="text-gray-500">{experience.desc}</p>
          </div>)
          }
        </div>
      </div>
    </div>
  );
};

export default Experience;
