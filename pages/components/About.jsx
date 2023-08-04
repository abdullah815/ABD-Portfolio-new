import React from 'react'
import Image from 'next/image'

const about = () => {
  return (
    <div id='about' className='w-full h-auto p-2 flex items-center py-3 pt-14 pb-14 bg-aboutsection'>
        <div className='max-w-[1200px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-white'>About</p>
                <h2 className='py-4 text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-600 '>Who i am</h2>
                <p className='py-2 text-white font-light '>I Have 5+ years of experience in UI/UX development, morever i have experience of CMS 
                    development like WordPress, Shopify, Magento, Opencart.
                </p>
                <p className='py-2 text-white font-light '>
                I worked on 100+ projects still which is on HTML5,CSS3,Jquery,vanilla Script,Wordpress,
                Shopify, Headless CMS & always gave maximum result to the buyer or client.
                </p>
                <p className='py-2 text-white underline cursor-pointer hover:text-[#1F51FF] font-medium'>Check out some of my Latest Projects</p>
            </div>

            <div className='w-full h-auto m-auto rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image className='rounded-xl' src='/../public/assests/about-section-img.png' width='600' height='600' id='about-image'/>
            </div>
        </div>
    </div>
  )
}

export default about