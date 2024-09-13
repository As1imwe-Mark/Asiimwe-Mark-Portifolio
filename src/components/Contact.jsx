import email from '../assets/email.png'
import mobile from '../assets/mobile.png'

import { AiFillLinkedin, AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';

const Contact = () => {
  return (
    <div id="contact" className="flex justify-center  my-5 h-full sm:h-[70vh] items-center">
      <div className="max-w-[1200px] mx-auto">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Contact Details Section */}
            <div className="p-6 bg-gray-800 rounded-xl flex flex-col justify-around">
              <h1 className="text-4xl sm:text-5xl text-white">
                Contact <span>Me</span>
              </h1>
              <p className="text-normal text-lg font-medium text-gray-400 mt-2">
                Let&apos;s connect on LinkedIn <br /> or send an email
              </p>

              {/* Email and Phone */}
              <div className="mt-5">


              <div className="flex items-center gap-3">
          <img src={email} alt="email" className="w-8 h-8" />
          <a href="mailto:asmarka@outlook.com" className="p-text text-gray-400">asmarka@outlook.com</a>
        </div>
        <div className="app__footer-card flex items-center gap-3 mt-4">
          <img src={mobile} alt="phone" className="w-8 h-8" />
          <a href="tel:+256 (788) 358-652" className="p-text text-gray-400">+256 (788) 358-652</a>
        </div>

              </div>

              {/* Social Icons Section */}
              <div className="flex items-center mt-8 space-x-4 text-gray-400 text-2xl">
                <a href="https://www.linkedin.com/in/mark-asiimwe-0ab0611ab/" target="_blank" rel="noreferrer">
                  <AiFillLinkedin className="hover:text-white transition duration-300" />
                </a>
                <a href="https://github.com/As1imwe-Mark" target="_blank" rel="noreferrer">
                  <AiFillGithub className="hover:text-white transition duration-300" />
                </a>
                <a href="https://twitter.com/MarkAsiimwe?t=fPfXM4CV3OU6gKMNB1RGDA&s=09" target="_blank" rel="noreferrer">
                  <AiOutlineTwitter className="hover:text-white transition duration-300" />
                </a>
              </div>

              {/* Name Section */}
              <div className="flex items-center mt-6 text-gray-400">
                <div className="ml-4 text-md tracking-wide">
                  <p>Asiimwe Mark</p>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <form action="https://formspree.io/f/xgebjyrj" method="POST"  className="flex  flex-col justify-center ">
              <div className="flex flex-col ">
                <input type="name" name="name" id="name" placeholder="Full Name" className="w-full mt-2 py-3 px-4 rounded-lg bg-gray-800 border-gray-700 text-white outline-none " />
              </div>
              <div className="flex flex-col mt-2">
                <input type="email" name="email" id="email" placeholder="Email" className="w-full mt-2 py-3 px-4 rounded-lg bg-gray-800 border-gray-700 text-white outline-none " />
              </div>
              <div className="flex flex-col mt-2">
                <textarea name="message" id="message" placeholder="Your Message" className="w-full mt-2 py-3 px-4 rounded-lg bg-gray-800 border-gray-700 text-white outline-none " />
              </div>
              <button type="submit" className="md:w-32 bg-primary-color text-white py-3 px-6 rounded-lg mt-3">
                Submit
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;



