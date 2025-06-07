import profile from '../assets/profile.png';
import { AiFillLinkedin, AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';
import { TypeAnimation } from 'react-type-animation';

// --- Constants for cleaner JSX ---

const typeSequence = [
    "Frontend Dev", 1000,
    "Webdesigner", 1000,
    "Data Entrant", 1000,
    "Maths Tutor", 1000,
];

const socialLinks = [
    {
        icon: AiFillLinkedin,
        href: "https://www.linkedin.com/in/mark-asiimwe-0ab0611ab/",
        ariaLabel: "LinkedIn Profile"
    },
    {
        icon: AiFillGithub,
        href: "https://github.com/As1imwe-Mark",
        ariaLabel: "GitHub Profile"
    },
    {
        icon: AiFillTwitterCircle,
        href: "https://twitter.com/MarkAsiimwe?t=fPfXM4CV3OU6gKMNB1RGDA&s=09",
        ariaLabel: "Twitter Profile"
    },
];


const Hero = () => {
  return (
    <section id='home' className='max-w-[1210px] h-auto mx-auto flex flex-col-reverse sm:flex-row justify-center items-center py-16'>

      {/* Left Column: Text Content */}
      <div className='flex flex-col my-auto mx-auto text-center sm:text-left'>
        <p className='md:text-5xl sm:text-4xl text-lg font-bold text-gray-200'>
          Hi, I&apos;m Asiimwe Mark
        </p>

        <h1 className='md:text-7xl sm:text-5xl text-3xl font-bold md:py-6'>
          <TypeAnimation
            sequence={typeSequence}
            wrapper='span'
            speed={50}
            repeat={Infinity}
          />
        </h1>

        <div>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-500'>
            with 2+ years of experience
          </p>
        </div>

        {/* Social Media Icons */}
        <div className='text-5xl flex justify-center sm:justify-start gap-6 my-7 text-purple-600'>
            {socialLinks.map((link, index) => (
                <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.ariaLabel}
                    className='rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600 focus:ring-offset-gray-900'
                >
                    <link.icon className="hover:text-white transition duration-300" />
                </a>
            ))}
        </div>

        {/* CV Download Button */}
        <div className='relative inline-flex group my-3 mx-auto sm:mx-0'>
          <div
            className='
              absolute transition-all duration-1000 opacity-70 -inset-px
              bg-gradient-to-r from-[#44BCFF] via-[#FF44EC]
              rounded-xl blur-lg
              group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200'
            aria-hidden="true"
          ></div>
          <a
            href='/resume.pdf' // Best practice: place resume in the 'public' folder
            download='Asiimwe-Mark-Resume.pdf'
            className='
              w-[190px] h-[60px] relative inline-flex items-center justify-center
              px-8 py-4 text-lg font-bold text-white transition-all duration-200
              bg-primary-color rounded-xl
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Right Column: Profile Image */}
      <div className='my-auto'>
        <img
          className='w-[300px] sm:w-[450px] mx-auto h-auto rounded-full mb-8 sm:mb-0'
          src={profile}
          alt='A profile picture of Asiimwe Mark'
        />
      </div>

    </section>
  )
}

export default Hero
