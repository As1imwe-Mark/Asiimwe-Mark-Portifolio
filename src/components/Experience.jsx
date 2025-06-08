import { skills } from './constants/skills';
import { Experiences } from './constants/Experience';

// A reusable SkillCard component for better structure and styling
const SkillCard = ({ icon, name }) => (
  <div className="group flex flex-col items-center text-center p-4">
    <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gray-800 border-2 border-gray-700 group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-all duration-300">
      <img
        src={icon}
        alt={`${name} icon`}
        className="w-1/2 h-1/2 object-contain transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    <p className="mt-4 text-sm font-medium text-gray-300 group-hover:text-white">
      {name}
    </p>
  </div>
);

// A reusable ExperienceCard component for the timeline
const ExperienceCard = ({ company, year, role, desc }) => (
  <li className="mb-10 ms-6">
    {/* The timeline dot */}
    <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-800 rounded-full -start-4 border-2 border-gray-700">
      <svg className="w-4 h-4 text-indigo-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
      </svg>
    </span>
    <h3 className="flex items-center mb-1 text-xl font-semibold text-white">
      {role}
      {/* Optional: Add a 'Latest' badge for the most recent experience */}
      {/* {isLatest && <span className="bg-indigo-500 text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded ms-3">Latest</span>} */}
    </h3>
    <p className="block mb-2 text-sm font-normal leading-none text-indigo-400">{company} • {year}</p>
    <p className="mb-4 text-base font-normal text-gray-400">{desc}</p>
  </li>
);


const Experience = () => {
  return (
    <section id="skills-experience" className="py-20 bg-[#232325]">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="mb-16 text-4xl font-bold text-white text-center relative inline-block left-1/2 -translate-x-1/2">
          Skills & Experience
          <span className="block w-1/2 h-1 bg-indigo-500 mt-2 mx-auto"></span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8">
          
          {/* Skills Section */}
          <div className="w-full">
            <h3 className="text-2xl font-semibold text-center text-white mb-8">My Skillset</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <SkillCard key={skill.name} icon={skill.icon} name={skill.name} />
              ))}
            </div>
          </div>

          {/* Experience Timeline Section */}
          <div className="w-full">
             <h3 className="text-2xl font-semibold text-center text-white mb-8">Career Journey</h3>
            <ol className="relative border-s border-gray-700">
              {Experiences.map((experience) => (
                <ExperienceCard
                  key={experience.year}
                  role={experience.role} // Assuming you add 'role' to your constants
                  company={experience.company}
                  year={experience.year}
                  desc={experience.desc}
                />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
