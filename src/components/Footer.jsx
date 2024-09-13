import { AiFillLinkedin, AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='mt-12 w-max-[800px] border-t border-gray-500 text-center'>
    <p className='my-5 text-gray-500'>Makerere <br /> Kampala, Uganda</p>
    <div className='inline-flex text-gray-500 gap-4 text-3xl'>



    
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
    </div>
  
  )
}

export default Footer