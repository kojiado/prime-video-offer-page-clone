import React from 'react'

interface Props {
  label: string;
}

const Button:React.FC<Props> = ({label}) => {
  return (
    <div className='cursor-pointer text-white rounded-[2px] bg-[#0F79AF] md:w-fit p-[16px_18px] text-[17px] md:mt-[48px] table min-w-[280px] text-center font-normal max-w-[450px] md:max-w-0 w-full'><span>{label}</span></div>
  )
}

export default Button