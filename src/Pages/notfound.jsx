import React from "react";
import DefaultScreen from '../assets/Components/DefaultScreen.jsx'
import Pictures from '../assets/Components/Pictures.jsx'
import Title from '../assets/Components/Title.jsx'
import { assetUrl } from '../utils/paths.js'

const NotFound = () => {
    return (
        <DefaultScreen className='z-30'>
            <div className="w-full overflow-x-clip">
                <div className='flex flex-col items-center justify-center gap-6'>
                    <Title
                        text="Erro 404"
                        size="text-[20px] sm:text-[32px] lg:text-[36px] xl:text-[50px]"
                    />
                    <Title
                        text="Pagina não encontrada"
                        size="text-[26px] sm:text-[38px] lg:text-[42px] xl:text-[56px]"
                        color="text-white"
                    />
                </div>
            </div>
            <div className="mt-8 flex w-full justify-center">
                <Pictures
                    src={assetUrl('pics/latarefrigerante.webp')}
                    alt="Gremlin"
                    width='w-[140px]'
                    margin='m-0'
                    special='block fill-white drop-shadow-xl/50'
                />
            </div>
        </DefaultScreen>
    );
};

export default NotFound;