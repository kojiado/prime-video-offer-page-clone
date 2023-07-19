import { prime_logo } from "../assets"

const Footer = () => {
  return (
    <div className='p-[24px] bg-[#222222] flex flex-col items-center'>
        <img src={prime_logo}></img>
        <ul className="flex flex-wrap items-center justify-center">
          <li><a className="text-[15px] font-light text-[#0f79af] mx-[10px]" href="">Terms and Privacy Notice</a></li>
          <li><a className="text-[15px] font-light text-[#0f79af] mx-[10px]" href="">Cookie Notice</a></li>
          <li><a className="text-[15px] font-light text-[#0f79af] mx-[10px]" href="">Send us feedback</a></li>
          <li><a className="text-[15px] font-light text-[#0f79af] mx-[10px]" href="">Help</a></li>
        </ul>
        <p className="text-[15px] text-[#949494] text-center font-light">© 1996-2023, Amazon.com, Inc. or its affiliates</p>
    </div>
  )
}

export default Footer