import React from 'react'
import Image from 'next/image';

function Skills() {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1120px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-white'>Skills</p>
            <h2 className='py-4 text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-600'>What can i do !</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-8'>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 duration-300 ease-in bg-slate-50'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image
                             src='/../public/assests/skills/html.png' width='64' height='64' alt='/' 
                             />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 duration-300 ease-in bg-slate-50'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image
                             src='/../public/assests/skills/css.png' width='64' height='64' alt='/' 
                             />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>CSS</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 duration-300 ease-in bg-slate-50'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image
                             src='/../public/assests/skills/wordpress.png' width='64' height='64' alt='/' 
                             />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Wordpress</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 duration-300 ease-in bg-slate-50'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image
                             src='/../public/assests/skills/react.png' width='64' height='64' alt='/' 
                             />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>React</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 duration-300 ease-in bg-slate-50'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image
                             src='/../public/assests/skills/javascript.png' width='64' height='64' alt='/' 
                             />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Javascript</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 duration-300 ease-in bg-slate-50'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image
                             src='/../public/assests/skills/shopify.png' width='64' height='64' alt='/' 
                             />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Shopify</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 duration-300 ease-in bg-slate-50'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image
                             src='/../public/assests/skills/tailwind.png' width='64' height='64' alt='/' 
                             />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Tailwind</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 duration-300 ease-in bg-slate-50'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image
                             src='/../public/assests/skills/nextjs.png' width='64' height='64' alt='/' 
                             />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Next Js </h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 duration-300 ease-in bg-slate-50'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image
                             src='/../public/assests/skills/photoshop.png' width='64' height='64' alt='/' 
                             />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Adobe </h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 duration-300 ease-in bg-slate-50'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image
                             src='/../public/assests/skills/my-sql.png' width='64' height='64' alt='/' 
                             />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>MySQL</h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Skills