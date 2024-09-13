/* eslint-disable no-undef */
import profile from '../assets/profile.png'
import { AiFillLinkedin, AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai'
import {TypeAnimation} from 'react-type-animation'

const Hero = () => { 
  return (
    <div>
      <div id='home' className='max-w-[1210px] h-auto mx-auto flex flex-col-reverse sm:flex-row justify-center items-center'>

      <div className='flex-col my-auto mx-auto'>
        <p className='md:text-5xl sm:text-4xl text-lg font-bold text-gray-200'>
          Hi I&apos;m Asiimwe Mark
        </p>
        <h1 className='md:text-7xl sm:text-5xl text-3xl font-bold md:py-6'>
          <TypeAnimation 
          sequence={[
            "Frontend Dev",
            1000,
            "Webdesigner",
            1000,
            "Data Entrant",
            1000,
            "Maths Tutor",
            1000,
          ]}
          wrapper='span'
          speed={50}
          repeat={Infinity}
          />
        </h1>
        
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text:xl font-bold text-gray-500'>
            with 2+ years of experience
          </p>
        </div>
        
          <div className='text-5xl flex justify-start gap-6 my-7 text-purple-600'>
          
                <a href="https://www.linkedin.com/in/mark-asiimwe-0ab0611ab/" target="_blank" rel="noreferrer">
                  <AiFillLinkedin className="hover:text-white transition duration-300" />
                </a>
                <a href="https://github.com/As1imwe-Mark" target="_blank" rel="noreferrer">
                  <AiFillGithub className="hover:text-white transition duration-300" />
                </a>
                <a href="https://twitter.com/MarkAsiimwe?t=fPfXM4CV3OU6gKMNB1RGDA&s=09" target="_blank" rel="noreferrer">
                  <AiFillTwitterCircle className="hover:text-white transition duration-300" />
                </a>
        
          </div>

          <div className='relative inline-flex group my-3'>

          <div className='absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200'></div>

          <a href='../resume/resume.pdf' download='resume.pdf' role='button' className='w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'>Download Cv</a>

          </div>

      </div>


      <div className='my-auto'>
        <img className='w-[300px] sm:w-[450px] mx-auto h-auto rounded-full' src={profile} alt='profile pic' />
      </div>

      </div>
    </div>
  )
}

export default Hero