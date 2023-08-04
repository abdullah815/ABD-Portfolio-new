import Link from 'next/Link'
import Image from 'next/image'
import React from 'react'

const Projectitem = ({title, backgroundImg, projectUrl, subtitle}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full rounded-md group hover:bg-gradient-to-r from-rose-400 from-10% via-fuchsia-500 via-30% to-indigo-600 to-90%'>
                    <Image className='rounded-sm group-hover:opacity-10' src={backgroundImg} alt='/'/>
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[225px] max-w-full'>
                        <h3 className='text-lg font-thin text-white tracking-wider text-center'>{title}</h3>
                        <p className='pb-4 pt-2 text-white text-center'>{subtitle}</p>
                        <Link href={projectUrl}>
                        <p className='text-center py-2 rounded-md bg-white text-gray-700 font-bold text-base cursor-pointer'>View Project Details</p>
                        </Link>
                    </div>
                </div>
  )
};

export default Projectitem