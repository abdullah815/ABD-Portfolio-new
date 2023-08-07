import React from 'react'
import {FaLinkedinIn,FaTwitter,FaFacebookF,FaInstagram,FaSkype,FaWhatsapp,FaEnvelope} from 'react-icons/fa';
import Image from 'next/image';


const Main = () => {
  return (
    
    <div id='main' className='w-full lg:h-screen text-center bg-spooky'>
        <div id='main-2' className='container max-w-[1400px] w-full h-full max-auto pt-10 p-2 flex justify-center items-center'>
            
            <div>
                <p 
                className='uppercase text-sm tracking-widest text-white'>Lets Build Something Together
                </p>
                <h1 className='py-4 text-white'>
                    Hi I am <span className='text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-600 text-center cursor-pointer hover:text-white'>Abdullah Ghaffar</span>
                 </h1>

                 <h2 className='py-4 text-white'>
                    I am a <span className='text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-600 text-center hover:text-[#fff] cursor-pointer'>Web Developer</span>
                 </h2>

                <div className='flex justify-center items-center'>
                    <img src="https://i.ibb.co/6PwjvDC/shape-icon.png" width='130' height='130' alt='/' id='shape-box'/>
                </div>
            
                
                    
                 <p className='py-4 text-white max-w-[70%] m-auto font-light'>
                 Hi I am very dedicated Web developer, worked in two firms where we do agile & product development currenlty doing freelancing where i work as web developer, wordpress developer, website speed optimizer & bugs resolver.
                 </p>
                 <div className='flex items-center justify-between max-w-[500px] m-auto py-4'>
                    <div className='rounded-full p-4 cursor-pointer hover:scal-110 ease-in duration-300 bg-white text-black text-lg hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                        <FaLinkedinIn />
                    </div>
                    <div className='rounded-full shadow-lg p-4 cursor-pointer hover:scal-110 ease-in duration-300 bg-white text-black text-lg hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                        <FaTwitter />
                    </div>
                    <div className='rounded-full shadow-lg p-4 cursor-pointer hover:scal-110 ease-in duration-300 bg-white text-black text-lg hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                        <FaFacebookF />
                    </div>
                    <div className='rounded-full shadow-lg p-4 cursor-pointer hover:scal-110 ease-in duration-300 bg-white text-black text-lg hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] '>
                        <FaInstagram />
                    </div>
                    <div className='rounded-full shadow-lg p-4 cursor-pointer hover:scal-110 ease-in duration-300 bg-white text-black text-lg hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                        <FaSkype />
                    </div>
                    <div className='rounded-full shadow-lg p-4 cursor-pointer hover:scal-110 ease-in duration-300 bg-white text-black text-lg hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                        <FaWhatsapp />
                    </div>
                    <div className='rounded-full shadow-lg p-4 cursor-pointer hover:scal-110 ease-in duration-300 bg-white text-black text-lg hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] '>
                        <FaEnvelope />
                    </div>
                 </div>
            </div>
        </div>
    </div>
  )
}


export default Main;