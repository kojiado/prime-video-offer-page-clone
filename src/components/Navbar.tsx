import { prime_white_logo, profile } from '../assets'
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(false);

  const handleScroll = () => {
    const navbarHeight = 48;

    if (window.scrollY > navbarHeight) {
      setIsNavbarTransparent(true);
    } else {
      setIsNavbarTransparent(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar flex justify-between md:justify-center sticky bg-[#00050d] z-[6] ${isNavbarTransparent ? 'top-0 md:top-[12px] md:bg-transparent' : 'top-0'}`}>
      <div className={`relative flex w-full md:w-auto justify-between md:justify-center items-center bg-[#00050d] rounded-[8px] ${isNavbarTransparent ? 'shadow-[0_4px_8px_2px_rgba(0,5,13,.5)]' : ''}`}>
        <img src={prime_white_logo} className='w-[96px] h-max xl:w-[104px] ml-[24px] mr-[36px] xl:mr-[48px]'></img>

        <div className='h-full flex ml-[36px] xl:ml-[48px]'>
          <div className='hidden md:flex px-[12px] xl:px-[16px] hover:bg-[#191e25] items-center cursor-pointer relative'>
            <span className='text-white text-[15px] xl:text-[16px] font-normal'>EN</span>
            <svg className='w-[12px] ml-[9px]'  viewBox="0 0 12 7" data-chevron-svg="true"><path fill="#fff" d="M11.7071 1.70711C12.0976 1.31658 12.0976 0.683417 11.7071 0.292893C11.3166 -0.0976311 10.6834 -0.0976311 10.2929 0.292893L11.7071 1.70711ZM6 6L5.29289 6.70711C5.68342 7.09763 6.31658 7.09763 6.70711 6.70711L6 6ZM1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976315 0.683417 -0.0976315 1.31658 0.292893 1.70711L1.70711 0.292893ZM10.2929 0.292893L5.29289 5.29289L6.70711 6.70711L11.7071 1.70711L10.2929 0.292893ZM6.70711 5.29289L1.70711 0.292893L0.292893 1.70711L5.29289 6.70711L6.70711 5.29289Z"></path>
            </svg>
          </div>

          <div className='p-[12px] mx-[12px] md:p-[4px_12px] xl:p-[8px_16px] hover:bg-[#191e25] cursor-pointer'>
            <img src={profile} className='w-[24px] h-[24px] md:h-[30px] md:w-[30px] xl:h-[32px] xl:w-[32px]'></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar