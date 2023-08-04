import React from 'react'
import Image from 'next/image';
import fanscopeImg from '/public/assests/projects/project-1-banner.png';
import {RiRadioButtonFill} from 'react-icons/ri';
import {IoIosArrowBack} from 'react-icons/io';
import Link from 'next/Link';


const fanscopedevelopment = () => {
  return (
    <div className='w-full'>
      <div className='w-screen lg:h-[80vh] relative' id='main-screen-project-details'>
        <div className='absolute top-0 left-0 w-full lg:h-[80vh]  md:h-[30vh] bg-black/40 z-10 ' />
          <Image className='absolute z-1 ' layout='fill' objectFit='cover' src={fanscopeImg} alt="fanscope" />
          <div className='col-span-3 text-white'>
            <div className='absolute top-[70%] max-w-[1040px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
              <h1 className='py-2 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-indigo-600'>FanScope</h1>
              <h3>Wordpress/ Boostrap 4/ CSS3</h3>
            </div>
          </div>
      </div>


      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-4 gap-8 pt-16 px-6'>
        <div className='col-span-3 text-white'>
          <p>Project</p>
          <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-indigo-600'>Overview</h2>
          <p>This Website is build by Wordpress, which is a very famous Content management system (CMS). It 
            is a landing page consist of 4 pages total based on a modern design layout which attract users.
            Its a cost effective platform where you can build your static pages beautifully with ease. Admin 
            layout for little changes and a CRM management where admin can see which users join list to their
            newsletters
          </p>
          <button className='px-8 py-2 mt-4 mr-8 p-4 text-gray-100 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 rounded-md'>
            <a href='https://fanscope.app/' target='_blank'>Click here to see Project</a>
            </button>
        </div>

        
          <div className='grid md:grid-cols-1  shadow-md shadow-gray-400 rounded-xl p-4 bg-white'>
              <div className='p-2 col-span-1'>
                <p className='text-center font-bold pb-2'>Technologies</p>
                  <div>
                  <p className='text-gray-600 py-2 flex items-center cursor-pointer '>  <RiRadioButtonFill className='pr-2'/>Wordpress</p>
                    <p className='text-gray-600 py-2 flex items-center cursor-pointer '><RiRadioButtonFill className='pr-2'/>Boostrap 4</p>
                    <p className='text-gray-600 py-2 flex items-center cursor-pointer '><RiRadioButtonFill className='pr-2'/>CSS 3</p>
                    <p className='text-gray-600 py-2 flex items-center cursor-pointer '><RiRadioButtonFill className='pr-2'/>Anime Js</p>
                    <p className='text-gray-600 py-2 flex items-center cursor-pointer '><RiRadioButtonFill className='pr-2'/>My SQL</p>
                    <p className='text-gray-600 py-2 flex items-center cursor-pointer '><RiRadioButtonFill className='pr-2'/>PHP</p>
                  </div>
              </div>
          </div>
        

      </div>

      <div className='max-w-[1240px] mx-auto p-2 gap-8 pt-16'>
        <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-600 text-center'>Some Sample Images</h1>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid lg:grid-cols-2 gap-8 pt-16'>
        <div className='grid md:grid-cols-1 text-white'>
          <Image src='/../public/assests/projects/Project-1-images/fanscope-1-img.png' width='600' height='600' alt='/' className='hover:scale-110 ease-in duration-500 rounded-xl'/>
        </div>

        <div>
          <div className='grid md:grid-cols-1 text-white'>
            <Image src='/../public/assests/projects/Project-1-images/fanscope-2-img.png' width='600' height='600' alt='/' className='hover:scale-110 ease-in duration-500 rounded-xl' />
        </div>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid lg:grid-cols-2 gap-8 pt-6'>
        <div className='grid md:grid-cols-1 text-white'>
          <Image src='/../public/assests/projects/Project-1-images/fanscope-3-img.png' width='600' height='600' alt='/' className='hover:scale-110 ease-in duration-500 rounded-xl' />
        </div>

        <div>
          <div className='grid md:grid-cols-1 text-white'>
            <Image src='/../public/assests/projects/Project-1-images/fanscope-4-img.png' width='600' height='600' alt='/' className='hover:scale-110 ease-in duration-500 rounded-xl' />
        </div>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid lg:grid-cols-2 gap-8 pt-10'>
        <div className='grid md:grid-cols-2 text-white pt-10'>
            <Link href="/#projects">
              <p className='underline cursor-pointer text-lg flex items-center'> <IoIosArrowBack size={20}/> Back</p>
            </Link>
        </div>
      </div>
      

    </div>
  );
};

export default fanscopedevelopment;