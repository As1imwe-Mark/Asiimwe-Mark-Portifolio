import { useState } from 'react';
import { projects } from './constants/projects';
import { AiFillGithub, AiFillChrome } from 'react-icons/ai';


const Work = () => {
  // Number of visible projects
  const [visibleProjects, setVisibleProjects] = useState(6);

  // Load more projects
  const handleLoadMore = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 4);
  };

  return (
    <div id='work' className='pt-16 pb-10 sm:pt-16 lg:pb-16 max-w-[1200px] mx-auto px-4 sm:px-6 mt-4 mb-12'>
      {/* Title and Description */}
      <div className='grid mb-6'>
        <div className='text-gray-300 my-auto text-left'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl mb-6 sm:mb-8 tracking-tight'>
            My <span>Projects</span>
          </h1>
          <p className='text-lg sm:text-xl leading-relaxed max-w-[500px]'>
            Here are some of the latest projects I&apos;ve worked on for my clients
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
        {projects.slice(0, visibleProjects).map((project, index) => (
          <div key={index} className='rounded-xl bg-[#333333]/40 overflow-hidden shadow-xl z-1'>
            <a href='/' className='group'>
              <img
                src={project.img}
                alt={project.title}
                className='h-[200px] w-full object-cover object-top transition duration-200 group-hover:scale-110 rounded-lg'
              />
            </a>
            <div className='p-4'>
              <h2 className='text-gray-200'>{project.title}</h2>
              <p className='text-gray-400'>{project.desc}</p>
            </div>
            <div className='flex flex-row gap-3 justify-end text-white mb-3 mr-3'>
              <a className='cursor-pointer' href={project.github}>
                <AiFillGithub className='w-[30px] h-auto' />
              </a>
              <a className='cursor-pointer' href={project.live}>
                <AiFillChrome className='w-[30px] h-auto' />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      {visibleProjects < projects.length && (
        <div className='mt-8 text-center'>
          <button
            onClick={handleLoadMore}
            className='px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition'
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default Work;
