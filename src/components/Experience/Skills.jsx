import { motion } from 'framer-motion';
import { skills } from './skills';

const SkillsAndExperience = () => {
  return (
    <div id="skills-experience" className="py-10 bg-[#232325]">
      <h2 className="mb-8 text-3xl text-white text-center">
        Skills & Experiences
      </h2>

      <div className="flex flex-wrap lg:flex-nowrap justify-between items-start lg:space-x-12 mx-auto max-w-7xl px-4">
        
        {/* Skills Section */}
        <div className="w-full lg:w-1/2">
          <motion.div className="flex flex-wrap justify-center lg:justify-start items-start">
            {skills.map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="m-4 flex flex-col items-center"
                key={skill.name}
              >
                <div
                  className="flex items-center justify-center w-20 h-20 md:w-16 md:h-16 rounded-full"
                  style={{ backgroundColor: skill.bgColor }}
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
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Experience Section */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
          <div className="mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto lg:mx-0">
            <p>First Company</p>
            <p className="text-gray-400">(2020 - Present)</p>
            <p className="text-gray-500">Description of your experience in this company</p>
          </div>
          <div className="h-[50px] w-[2px] bg-slate-400 relative my-1 mx-auto lg:mx-0"></div>
          <div className="mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto lg:mx-0">
            <p>Second Company</p>
            <p className="text-gray-400">(2018 - 2020)</p>
            <p className="text-gray-500">Description of your experience in this company</p>
          </div>
          <div className="h-[50px] w-[2px] bg-slate-400 relative my-1 mx-auto lg:mx-0"></div>
          <div className="mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto lg:mx-0">
            <p>Third Company</p>
            <p className="text-gray-400">(2016 - 2018)</p>
            <p className="text-gray-500">Description of your experience in this company</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsAndExperience;
