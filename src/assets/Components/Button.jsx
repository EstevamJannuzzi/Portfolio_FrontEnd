import React from 'react'
import { PiWindowsLogoBold } from "react-icons/pi"

const Button = ({
    text,
    icon,
    onClick,
    width = 'w-[100px] sm:w-[150px] lg:w-[200px] xl:w-[250px]',
    download = false
}) => {
    return (
        <button
            onClick={onClick}
            className={`${width} flex flex-col items-center justify-center font-text text-light-gray bg-primary/35 rounded-lg p-2 text-[14px] sm:text-[18px] lg:text-[20px] xl:text-[22px] border-b-8 border-light-blue hover:border-white hover:scale-105 transition-transform duration-300 cursor-pointer`}
        >
            <div className="flex flex-row items-center gap-1 text-light-blue hover:text-white">
                {/* Se for download, mostra o ícone do Windows */}
                {download ? (
                    <span>
                        <PiWindowsLogoBold className="text-[12px] lg:text-[18px]" />
                    </span>
                ) : (
                    icon && <span>{icon}</span>
                )}
                <span className="font-text text-[12px] xl:text-[16px]">
                    {text}
                </span>
            </div>
        </button>
    )
}

export default Button
