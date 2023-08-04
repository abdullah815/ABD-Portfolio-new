import Image from 'next/image';
import Link from 'next/Link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaLinkedinIn, FaInstagramSquare, FaTwitter, FaWhatsappSquare } from 'react-icons/fa'; 


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)

    const handleNav = () => {
        setNav(!nav);
    }

    useEffect ( () => { 
        const handleShadow = () => {
            if(window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);
    }, []);

  return (
    <div className={shadow ? 'fixed w-full h-24 shadow-xl z-[100] bg-[#28282B] pt-1 ease-in duration-500' : 'fixed w-full h-20 z-[100] pt-30 ease-out duration-200'}>
        
        <div className='flex justify-between items-center w-full h-full p-3 pt-6'>
        <Image src="/../public/assests/nav-logo.png" width='90' height='50'
        style={{
            objectFit: "cover",
            borderRadius: "200px", 
          }}>
          </Image>


        <div>
            <ul className='hidden md:flex'>
                <Link href='/#main'>
                    <li className='ml-10 text-sm uppercase hover:border-b text-white'>Home</li>
                </Link>
                <Link href='/#projects'>
                    <li className='ml-10 text-sm uppercase hover:border-b text-white'>Projects</li>
                </Link>
                <Link href='/#skills'>
                    <li className='ml-10 text-sm uppercase hover:border-b text-white'>Skills</li>
                </Link>
                <Link href='/#about'>
                    <li className='ml-10 text-sm uppercase hover:border-b text-white'>About</li>
                </Link>
                <Link href='/#contact'>
                    <li className='ml-10 text-sm uppercase hover:border-b text-white'>Contact</li>
                </Link>
            </ul>

            <div onClick={handleNav} className='md:hidden'>
                <AiOutlineMenu size={25} className='text-white'/>
            </div>

        </div>


        </div>

            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={
                    nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                        : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                        <Image src="/../public/assests/navlogo.png" width='60' height='50'
                         style={{
                        objectFit: "cover",
                        borderRadius: "200px", 
                          }}>
                         </Image>
                         <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                         <AiOutlineClose size={25}/>
                         </div>
                        </div>

                        <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90px] py-4'>Lets Build Something Great Together!</p>
                        </div>
                    </div>

                <div className='Py-4 flex flex-col'>
                        <ul>
                            <Link href='/#main'>
                                <li onClick={()=> setNav(false)} className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href='/#projects'>
                                <li onClick={()=> setNav(false)} className='py-4 text-sm'>Project</li>
                            </Link>
                            <Link href='/#skills'>
                                <li onClick={()=> setNav(false)} className='py-4 text-sm'>Skills</li>
                            </Link>
                            <Link href='/#about'>
                                <li onClick={()=> setNav(false)} className='py-4 text-sm'>About</li>
                            </Link>
                            <Link href='/contact'>
                                <li onClick={()=> setNav(false)} className='py-4 text-sm'>Contact</li>
                            </Link>
                        </ul>

                        <div className='pt-1'>
                          <p className='uppercase tracking-widest text-[#5651e5]'>Lets Connect</p>
                        </div>

                        <div className='flex items-center justify-between my-4 w-full sm:w[80%]'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scal-105 ease-in duration-300'>
                                <FaLinkedinIn />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scal-105 ease-in duration-300'>
                                <FaInstagramSquare />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scal-105 ease-in duration-300'>
                                <FaTwitter />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scal-105 ease-in duration-300'>
                                <FaWhatsappSquare />
                            </div>
                            
                        </div>
                </div>
                    
                </div>

               

            </div>
        

    </div>
  );
};

export default Navbar;