import React from 'react'
import Image from 'next/image';
import realExchangeImg from '/public/assests/projects/project-2.png';
import {RiRadioButtonFill} from 'react-icons/ri';
import Link from 'next/Link';


const fanscopedevelopment = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[80vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[80vh] lg:v-[40vh] bg-black/80 z-10 ' />
          <Image className='absolute z-1 ' layout='fill' objectFit='cover' src={realExchangeImg} alt="fanscope" />
          <div className='col-span-3 text-white'>
            <div className='absolute top-[70%] max-w-[1040px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
              <h2 className='py-2'>Real Exchange</h2>
              <h3>Wordpress/ Boostrap 4/ CSS3 / Jquery / Materlizie JS</h3>
            </div>
          </div>
      </div>


      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-4 gap-8 pt-16'>
        <div className='col-span-3 text-white'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>This Website is build by Wordpress, which is a very famous Content management system (CMS). It 
            is a landing page consist of 4 pages total based on a modern design layout which attract users.
            Its a cost effective platform where you can build your static pages beautifully with ease. Admin 
            layout for little changes and a CRM management where admin can see which users join list to their
            newsletters
          </p>
          <button className='px-8 py-2 mt-4 mr-8 p-4 text-gray-100 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 rounded-md'>
            <a href='https://real-exchange.com/' target='_blank'>Click here to see Project</a>
            </button>
        </div>

        <div>
          <div className='col-span-3 shadow-md shadow-gray-400 rounded-xl p-4 bg-white'>
              <div className='p-2'>
                <p className='text-center font-bold pb-2'>Technologies</p>
                  <div className='grid md:grid-cols-1'>
                  <p className='text-gray-600 py-2 flex items-center cursor-pointer '><RiRadioButtonFill className='pr-2'/>Wordpress</p>
                    <p className='text-gray-600 py-2 flex items-center cursor-pointer '><RiRadioButtonFill className='pr-2'/>Boostrap 4</p>
                    <p className='text-gray-600 py-2 flex items-center cursor-pointer '><RiRadioButtonFill className='pr-2'/>CSS 3</p>
                    <p className='text-gray-600 py-2 flex items-center cursor-pointer '><RiRadioButtonFill className='pr-2'/>Anime Js</p>
                    <p className='text-gray-600 py-2 flex items-center cursor-pointer '><RiRadioButtonFill className='pr-2'/>My SQL</p>
                    <p className='text-gray-600 py-2 flex items-center cursor-pointer '><RiRadioButtonFill className='pr-2'/>PHP</p>
                  </div>
              </div>
          </div>
        </div>

        <div className='col-span-3 text-white'>
          <Link href="/#projects">
            <p className='underline cursor-pointer text-lg'>Back</p>
          </Link>
        </div>

      </div>

    </div>
  );
};

export default fanscopedevelopment;