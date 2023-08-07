import React from 'react';
import Image from 'next/image';
import fanscopeImg from '/public/assests/projects/project-1.png';
import realexchangeImg from '/public/assests/projects/project-2.png';
import vooctechImg from '/public/assests/projects/project-3.png';
import profiscalImg from '/public/assests/projects/project-4.png';
import shopJoyeria from '/public/assests/projects/project-5.png';
import OrClinic from '/public/assests/projects/project-6.png';
import proventussol from '/public/assests/projects/project-7.png';
import aqgcleaning from '/public/assests/projects/project-8.png';
import surgiforge from '/public/assests/projects/project-9.png';
import yourEars from '/public/assests/projects/project-10.png';
import atomicSkills from '/public/assests/projects/project-11.png';
import velocityHaulers from '/public/assests/projects/project-12.png';
import luqmanGoods from '/public/assests/projects/project-13..png';
import ziaTrading from '/public/assests/projects/project-14.png';
import ProjectItem from './components/Projectitem';


const Projects = () => {
  return (
    <div id='projects' className='w-full pt-20 pb-5'>
        <div className='max-w-[1120px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-white'>Projects</p>
            <h2 className='py-4 text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-600'>What i Have Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>

                <ProjectItem
                 title='Fanscope App'
                 backgroundImg={fanscopeImg} 
                 projectUrl='/projectfanscope' 
                />

                <ProjectItem 
                title='Real Exchange'
                 backgroundImg={realexchangeImg} 
                 projectUrl='/realexchangedevelopment' 
                />

                <ProjectItem 
                title='VoocTech'
                 backgroundImg={vooctechImg} 
                 projectUrl='/property' 
                />

                <ProjectItem 
                title='Profiscal Solutions'
                 backgroundImg={profiscalImg} 
                 projectUrl='/property' 
                />

                <ProjectItem 
                title='Shop Joyeria'
                 backgroundImg={shopJoyeria} 
                 projectUrl='/property' 
                />

                <ProjectItem 
                title='Ortho Remedy Clinic UK'
                 backgroundImg={OrClinic} 
                 projectUrl='/property' 
                />

                <ProjectItem 
                title='Proventus Solutions'
                 backgroundImg={proventussol} 
                 projectUrl='/property' 
                />

                <ProjectItem 
                title='Aqg Cleaning UK'
                 backgroundImg={aqgcleaning} 
                 projectUrl='/property' 
                />

                <ProjectItem 
                title='Surgi Forge Industries'
                 backgroundImg={surgiforge} 
                 projectUrl='/property' 
                />

                <ProjectItem 
                title='Your Ears UK'
                 backgroundImg={yourEars} 
                 projectUrl='/property' 
                />

                <ProjectItem 
                title='Atomic Skills'
                 backgroundImg={atomicSkills} 
                 projectUrl='/property' 
                />

              <ProjectItem 
                title='Velocity Haulers'
                 backgroundImg={velocityHaulers} 
                 projectUrl='/property' 
                />

                <ProjectItem 
                title='Luqman Goods Transport'
                 backgroundImg={luqmanGoods} 
                 projectUrl='/property' 
                />

              <ProjectItem 
                title='Zia Trading International'
                 backgroundImg={ziaTrading} 
                 projectUrl='/property' 
                />


            </div>

        </div>
    </div>
  );
};

export default Projects;