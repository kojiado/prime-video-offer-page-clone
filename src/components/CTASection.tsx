import React from 'react'
import Button from './Button';

interface Props {
  heading: string;
  description: string;
  className?: string;
  background?: string;
  background_mobile?: string;
  membershipInfo?: boolean;
  sectionColor: string;
  gradientRotation?: boolean;
}

export const CTASection: React.FC<Props> = ({heading,description,className,background,background_mobile,membershipInfo, sectionColor, gradientRotation}) => {
  return (

    <div className='w-full h-[100vh] md:h-auto min-h-[70vh] md:p-[50px_5%] relative flex flex-col md:flex-row items-center overflow-hidden'>
      
        <div className='block md:hidden h-1/2 w-full relative'>
          <div className={`${sectionColor === "black" ? 'gradient-black-mobile' : 'gradient-blue-mobile'} absolute w-full h-full left-0 bottom-[-1px]`}></div>
          <img className='object-cover object-top w-full h-full' src={background_mobile}></img>
        </div>

        <div className={`${sectionColor === "black" ? 'bg-[#000000]' : 'bg-[#b0e5f7]'} w-full h-1/2 relative z-[5] px-[5%] md:px-0 ${className} md:bg-inherit flex flex-col items-center md:items-start text-center md:text-start`}>
          <h1 className={`${sectionColor === "black" ? 'text-white' : 'text-black'} text-[32px] md:text-[40px] leading-[1.2] md:leading-[48px]`}>{heading}</h1>
          <p className={`${sectionColor === "black" ? 'text-white' : 'text-black'} text-[17px] md:text-[21px] md:mt-[24px] font-[300] leading-[27px] max-w-[450px] p-[5%_0] md:p-0`}>{description}</p>
          <Button label="Start your free trial"/>
          <span className={`${membershipInfo ? 'block': 'hidden'} text-white pt-[5%] text-[15px] font-light mb-[14px]`}>Membership renews at € 5.99/month.</span>
        </div>

        <img className='hidden md:block object-cover w-full h-full absolute left-0 top-0' src={background}></img>
        <div className={`${sectionColor === "black" ? 'gradient-black' : 'gradient-blue'} hidden md:block absolute left-0 bottom:0 md:top-0 w-full h-full object-top ${gradientRotation ? 'rotate-180' : ''}`}></div>

    </div>
  )
}
