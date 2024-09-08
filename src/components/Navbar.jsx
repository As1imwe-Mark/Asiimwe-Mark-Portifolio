import {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {

  const [nav, setnav] = useState(false);

  const handleNav =()=>{
    setnav(!nav)
  }


  return (
    <div className='text-gray-500 flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4 text-lg'>
  <h1 className='text-3xl font-bold primary-color ml-4'>Asiimwe</h1>
  <ul className='hidden md:flex'>
      <li className='p-5'><a href='#home'>Home</a></li>
      <li className='p-5'><a href='#about'>About</a></li>
      <li className='p-5'><a href='#work'>Work</a></li>
      <li className='p-5'><a href='#experience'>Experience</a></li>
      <li className='p-5'><a href='#contact'>Contact</a></li>
    </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20}/>:<AiOutlineMenu size={20}/>}
      </div>

      <div className= {nav ? 'text-gray-300 fixed h-full bg-[#202121] z-10 left-0 top-0 w-[60%] border-r border-r-gray-900 ease-in-out duration-500' :'fixed left-[-100%]'}>
       
        <h1 className='text-3xl font-bold primary-color m-4'>Asiimwe</h1>
  <ul onClick={handleNav} className='p-8 text-2xl'>
      <li className='p-2'><a href='#home'>Home</a></li>
      <li className='p-2'><a href='#about'>About</a></li>
      <li className='p-2'><a href='#work'>Work</a></li>
      <li className='p-2'><a href='#experience'>Experience</a></li>
      <li className='p-2'><a href='#contact'>Contact</a></li>
    </ul>

      </div>
    </div>
  )
}

export default Navbar