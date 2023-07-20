import { prime_white_logo, profile } from '../assets'
import { useEffect, useRef, useState } from 'react';
import { languages } from '../constants';

const Navbar = () => {
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(false);
  const navbarContentRef = useRef<HTMLDivElement>(null);
  const targetLanguagesRef = useRef<HTMLDivElement>(null);
  const targetSignUpRef = useRef<HTMLDivElement>(null);
  const [isLanguagesVisible, setLanguagesVisible] = useState(false);
  const [isSignUpVisible, setSignUpVisible] = useState(false);
  const [isMobileNavigationVisible, setMobileNavigationVisible] = useState(false);
  const [isMobileLanguagesVisible, setMobileLanguagesVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleLanguagesMouseOver = () => {
    setLanguagesVisible(true);
  };

  const handleLanguagesMouseLeave = () => {
    setLanguagesVisible(false);
  };

  const handleSignUpMouseOver = () => {
    setSignUpVisible(true);
  };

  const handleSignUpMouseLeave = () => {
    setSignUpVisible(false);
  };

  const handleMobileNavigationVisible = () => {
    setMobileNavigationVisible(!isMobileNavigationVisible);
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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

  useEffect(() => {
    const alignDivs = () => {
      if (navbarContentRef.current && targetLanguagesRef.current) {
        const navbarContentRect = navbarContentRef.current.getBoundingClientRect();
        const rightPosition = window.innerWidth - (navbarContentRect.right); // Adding 10px as an offset (adjust as needed)

        targetLanguagesRef.current.style.right = `${rightPosition}px`;
      }
      if (navbarContentRef.current && targetSignUpRef.current) {
        const navbarContentRect = navbarContentRef.current.getBoundingClientRect();
        const rightPosition = window.innerWidth - (navbarContentRect.right); // Adding 10px as an offset (adjust as needed)

        targetSignUpRef.current.style.right = `${rightPosition}px`;
      }
    };

    alignDivs();

    window.addEventListener('resize', alignDivs);

    return () => {
      window.removeEventListener('resize', alignDivs);
    };
  }, []);

  useEffect(() => {
    const body = document.querySelector('body');

    if (body) {
      if (isMobileNavigationVisible) {
        body.classList.add('overflow-hidden');
      } else {
        body.classList.remove('overflow-hidden');
      }
    }
  }, [isMobileNavigationVisible, windowWidth]);

  return (
    <div className={`navbar flex justify-between md:justify-center sticky bg-[#00050d] z-[6] ${isNavbarTransparent ? 'top-0 md:top-[12px] md:bg-transparent' : 'top-0'}`}>
      <div className={`flex w-full md:w-auto justify-between md:justify-center items-center bg-[#00050d] rounded-[8px] ${isNavbarTransparent ? 'shadow-[0_4px_8px_2px_rgba(0,5,13,.5)]' : ''}`}>
        <img src={prime_white_logo} className='w-[96px] h-max xl:w-[104px] ml-[24px] mr-[36px] xl:mr-[48px]'></img>

        <div ref={navbarContentRef} className='h-full flex ml-[36px] xl:ml-[48px] navbar-content'>
          {windowWidth >= 675 ? (
            <>
              <div onMouseOver={handleLanguagesMouseOver} onMouseLeave={handleLanguagesMouseLeave} className='flex px-[12px] xl:px-[16px] hover:bg-[#191e25] items-center cursor-pointer relative'>
                <span className='text-white text-[15px] xl:text-[16px] font-normal'>EN</span>
                <svg className={`w-[12px] ml-[9px] ${isLanguagesVisible ? 'rotate-180' : ''}`}  viewBox="0 0 12 7" data-chevron-svg="true"><path fill="#fff" d="M11.7071 1.70711C12.0976 1.31658 12.0976 0.683417 11.7071 0.292893C11.3166 -0.0976311 10.6834 -0.0976311 10.2929 0.292893L11.7071 1.70711ZM6 6L5.29289 6.70711C5.68342 7.09763 6.31658 7.09763 6.70711 6.70711L6 6ZM1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976315 0.683417 -0.0976315 1.31658 0.292893 1.70711L1.70711 0.292893ZM10.2929 0.292893L5.29289 5.29289L6.70711 6.70711L11.7071 1.70711L10.2929 0.292893ZM6.70711 5.29289L1.70711 0.292893L0.292893 1.70711L5.29289 6.70711L6.70711 5.29289Z"></path>
                </svg>
              </div>
              <div onMouseOver={handleSignUpMouseOver} onMouseLeave={handleSignUpMouseLeave} className='p-[12px] mx-[12px] md:p-[4px_12px] xl:p-[8px_16px] hover:bg-[#191e25] cursor-pointer'>
                <img src={profile} className='w-[24px] h-[24px] md:h-[30px] md:w-[30px] xl:h-[32px] xl:w-[32px]'></img>
              </div>
            </>
          ):(
            <div onClick={handleMobileNavigationVisible} className={`p-[12px_24px] cursor-pointer ${isMobileNavigationVisible ? 'bg-[#191e25]' : 'bg-transparent'}`}>
              <img src={profile} className='w-[24px] h-[24px] md:h-[30px] md:w-[30px] xl:h-[32px] xl:w-[32px]'></img>
            </div>
          )}
        <div className={`w-full flex flex-col overflow-y-scroll h-full min-h-[calc(100vh-100%)] absolute left-0 top-[100%] bg-[#191e25] ${isMobileNavigationVisible ? 'block' : 'hidden'}`}>
          <div onClick={() => setMobileLanguagesVisible(!isMobileLanguagesVisible)} className='flex min-h-[48px] items-center pl-[24px] cursor-pointer'>
            <span className='text-white text-[15px] xl:text-[16px] font-normal'>EN</span>
            <svg className={`w-[12px] ml-[9px] ${isLanguagesVisible ? 'rotate-180' : ''}`}  viewBox="0 0 12 7" data-chevron-svg="true"><path fill="#fff" d="M11.7071 1.70711C12.0976 1.31658 12.0976 0.683417 11.7071 0.292893C11.3166 -0.0976311 10.6834 -0.0976311 10.2929 0.292893L11.7071 1.70711ZM6 6L5.29289 6.70711C5.68342 7.09763 6.31658 7.09763 6.70711 6.70711L6 6ZM1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976315 0.683417 -0.0976315 1.31658 0.292893 1.70711L1.70711 0.292893ZM10.2929 0.292893L5.29289 5.29289L6.70711 6.70711L11.7071 1.70711L10.2929 0.292893ZM6.70711 5.29289L1.70711 0.292893L0.292893 1.70711L5.29289 6.70711L6.70711 5.29289Z"></path>
            </svg>
          </div>
          <div>
            <ul className={`grid-cols-1 gap-x-[10px] ${isMobileLanguagesVisible ? 'grid' : 'hidden'}`}>
              {languages.map((language)=>(
                <li className='p-[4px_4px_4px_24px] flex items-center text-[#aaa] bg-[#33373d] min-h-[48px] cursor-pointer'><a href=""></a>{language?.name}</li>
              ))}
            </ul>
          </div>
          <div className='flex min-h-[48px] items-center pl-[24px] cursor-pointer'>
            <span className='text-white text-[15px] xl:text-[16px] font-normal'>Sign Up</span>
          </div>
        </div>

        </div>

        <div onMouseOver={handleLanguagesMouseOver} onMouseLeave={handleLanguagesMouseLeave} ref={targetLanguagesRef} className={`bg-[#191e25] p-[8px_16px] xl:p-[12px_24px] shadow-[0_4px_8px_2px_rgba(0,5,13,.5)] absolute top-[100%] left-0 h-auto languages w-fit ml-auto ${isLanguagesVisible ? 'block' : 'hidden'}`}>
            <ul className='grid grid-cols-4 gap-x-[10px]'>
              {languages.map((language)=>(
                <li className='p-[8px] xl:p-[12px] text-[#aaa] hover:bg-white hover:text-[black] rounded-[8px] cursor-pointer'><a href=""></a>{language?.name}</li>
              ))}
            </ul>
        </div>

        <div onMouseOver={handleSignUpMouseOver} onMouseLeave={handleSignUpMouseLeave} ref={targetSignUpRef} className={`bg-[#191e25] rounded-[0_0_10px_10px] p-[8px_16px] xl:p-[12px_24px] shadow-[0_4px_8px_2px_rgba(0,5,13,.5)] absolute top-[100%] left-0 h-auto languages w-fit ml-auto ${isSignUpVisible ? 'block' : 'hidden'}`}>
            <ul className='grid'>
              <li className='p-[8px] xl:p-[12px] text-[#aaa] hover:bg-white hover:text-[black] rounded-[8px] cursor-pointer'><a href=""></a>Sign Up</li>
            </ul>
        </div>
                
      </div>
    </div>
  )
}

export default Navbar