import React from 'react'
import { PiLinkedinLogo } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center w-full h-[90px] sm:h-[44px] lg:h-[54px] xl:h-[44px] font-text bg-primary fixed bottom-0 left-0 px-14 pt-2 sm:pt-0 pb-6 sm:pb-0 z-50'>
      <span className='text-center md:text-left text-[10px] sm:text-[14px]'>
        {new Date().getFullYear()} Feito por Estevam Jannuzzi&copy;. Todos os direitos reservados.
      </span>
      <div className='flex gap-4 mt-0 md:ml-auto'>
        <a href='https://www.linkedin.com/in/estevam-jannuzzi-217355bb/' target='_blank' rel='noopener noreferrer' className='cursor-pointer bg-transparent border-none p-0 hover:text-light-blue'>
          <PiLinkedinLogo size={24} />
        </a>
        <a href='https://www.instagram.com/estevam_jannuzzi/' target='_blank' rel='noopener noreferrer' className='cursor-pointer bg-transparent border-none p-0 hover:text-light-blue'>
          <FaInstagram size={24} />
        </a>
      </div>
    </div>
  )
}

export default Footer
