import {useState} from 'react'

import {close, logo, menu} from '../assets'
import { navLinks } from '../constants/main'


const Navbar = () => {

  const [menuImage, setmenuImage] = useState(false)


  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
    <img src={logo} alt='hoobank' className="w-[124px] h-[32px]" />
    <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
    {navLinks.map((nav, index) => (
      <li
      key={nav.id}
      className={`font-poppins
      font-normal 
      cursor-pointer
      text-[16px] ${index === navLinks.length-1 ? 'mr-0' : 'mr-10'} 
      text-white`}
      >
       <a href={`#${nav.id}`}>
        {nav.title}
       </a>
      </li>
    ))}
    </ul>

    <div className='sm:hidden flex justify-end items-center flex-1'>
        <img src={menuImage? close : menu}
        alt='menu-image'
        className='w-[28px] h-[28px] 
        object-contain'
        onClick={() => setmenuImage((prev) => !prev)}
        />

          <div
          className={`${menuImage ? 'flex' : 'hidden'}
          p-6 bg-black-gradient
          absolute 
          top-20 
          right-0 
          mx-4 my-2 min-w-[140px] rounded-xl 
          sidebar`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
            <li
          key={nav.id}
          className={`font-poppins
          font-normal 
          cursor-pointer
          text-[16px] ${index === navLinks.length-1 ? 'mr-0' 
          : 'mb-4'} 
          text-white`}
          >
          <a href={`#${nav.id}`}>
            {nav.title}
            
          </a>
          </li>
        ))}
        </ul>
          </div>

    </div>


    </nav>
  )
}

export default Navbar