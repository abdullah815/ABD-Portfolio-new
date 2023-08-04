import React from 'react'
import Image from 'next/image';
import {FaLinkedinIn,FaFacebookF,FaSkype,FaWhatsapp } from 'react-icons/fa'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi';
import Link from 'next/Link';

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen '>
        <div className='max-w-[1120px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-white'>Contact</p>
            <h2 className='py-4 text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-600'>Get in Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                {/* {left section} */}
                <div className='col-span-3 lg:col-span-2 w-full h-full border-4 border-indigo-600 hover:border-fuchsia-600 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                          <Image
                          className='rounded-xl hover:scale-105 ease-in duration-300'
                           src='/../public/assests/contact-us-image.jpg' width='400' height='400' 
                           />
                        </div>
                        <div>
                          <h2 className='py-2 text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-600'>ABD TECHS</h2>
                          <p className='text-white'>Front End Developer</p>
                          <p className='py-4 text-white'>I am available for freelance or full time postitons. Contact me & Let;s Talk.</p>
                        </div>
                        <div>
                      <p className='uppercase pt-8 text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-600'>Connect With Me</p>
                      <div className='flex items-center justify-between py-4'>
                      <div className='rounded-full shadow-lg p-4 cursor-pointer hover:scal-110 ease-in duration-300 bg-white text-black text-lg hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                        <FaLinkedinIn />
                    </div>
                    <div className='rounded-full shadow-lg p-4 cursor-pointer hover:scal-110 ease-in duration-300 bg-white text-black text-lg hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                        <FaFacebookF />
                    </div>
                    <div className='rounded-full shadow-lg p-4 cursor-pointer hover:scal-110 ease-in duration-300 bg-white text-black text-lg hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                        <FaSkype />
                    </div>
                    <div className='rounded-full shadow-lg p-4 cursor-pointer hover:scal-110 ease-in duration-300 bg-white text-black text-lg hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                        <FaWhatsapp />
                    </div>
                      </div>
                    </div>
                    </div>
              
                </div>
                {/* {right section} */}

                  <div className='col-span-3 w-full h-auto rounded-400 border-4 border-indigo-600 hover:border-fuchsia-600 rounded-xl lg:p-4'>
                    <div className='py-4'>
                        <form>
                          <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                            <div className='flex flex-col'>
                              <label className='uppercase text-sm py-2 text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-600'>Name:</label>
                              <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text"/>
                            </div>
                            <div className='flex flex-col'>
                              <label className='uppercase text-sm py-2 text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-600'>Phone Number:</label>
                              <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text"/>
                            </div>
                          </div>
                          <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2 text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-600'>Email:</label>
                            <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email"/>
                          </div>
                          <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2 text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-600'>Subject:</label>
                            <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text"/>
                          </div>
                          <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2 text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-600'>Message:</label>
                            <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10'></textarea>
                          </div>
                          <button className='w-full p-4 text-gray-100 mt-4 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 rounded-md'>Send Message</button>
                        </form>
                    </div>
                  </div>

            </div>
        </div>
        {/* {bottom to top scroll} */}
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <div className='rounded-full border-2 border-indigo-600 hover:border-fuchsia-600 p-4 cursor-pointer hover:scal-110 ease-in duration-300'>
            <HiOutlineChevronDoubleUp size={30} className='text-rose-400 '/>
            </div>
          </Link>
        </div>
    </div>
  )
}

export default Contact