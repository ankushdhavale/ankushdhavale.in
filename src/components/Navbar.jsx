import React, { useState } from 'react'
import { NAVIGATION_LINKS } from '../constants';
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';
// import { RxResume } from "react-icons/rx";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    const handleLinkClick = (e , href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const offset = -85;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY + offset;

            window.scrollTo({
                top:offsetPosition,
                behavior:"smooth",
            })
            setIsMobileMenuOpen(false);
        }
    }
  return (
    <div>
        <nav className='fixed left-0 right-0 top-4 z-50'>
            {/* DesktopMenu */}
            <div className='mx-auto hidden max-w-3xl items-center gap-6 justify-center rounded-full border border-stone-50/30 py-2 backdrop-lg lg:flex'>
                <div className='flex items-center justify-between gap-16'>
                    <div>
                        <a href="#">
                            <h1 className='Ankush text-2xl'>Ankush</h1><span className='absolute rotate-[31deg] text-xl top-[3px] mx-16'>😎</span>
                        </a>
                    </div>
                    <div>
                        <ul className='flex items-center gap-6'>
                            {NAVIGATION_LINKS.map((item , index) =>(
                            <li key={index}>
                                <a 
                                className='text-sm hover:text-yellow-400'
                                href={item.href}
                                onClick={(e) => handleLinkClick(e, item.href)}>{item.label }</a></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className="rounded-lg backdrop-blur-md lg:hidden italic ">
                <div className="flex items-center justify-between mx-4 text-4xl font-extralight ">
                    <a href="#" id='Ankush' className=''>
                        Ankush
                    </a>
                    <div className='flex items-center justify-end'>
                          <a href="mailto:dhavaleankush3@gmail.com"className='text-sm mr-1'>Email</a>
                        <button className='focus:outline-none lg:hidden'
                        onClick={toggleMobileMenu} >
                        {isMobileMenuOpen ? (
                            <FaTimes className='m-2 h-6 w-5'/>
                        ) : (<FaBars className='m-2 h-6 w-5'/>)}  
                        </button>    
                    </div>
                </div>
                  {isMobileMenuOpen && (
                    <ul className='ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md'>
                        {NAVIGATION_LINKS.map((item , index)=>(
                            <li key={index}>
                                <a href={item.href}
                                className='block w-full text-lg'
                                onClick={(e)=> handleLinkClick(e,item.href)}>{item.label}</a>
                            </li>
                        ))}                          
                    </ul>
                )}  
            </div>
        </nav>
    </div>
  )
}

export default Navbar
