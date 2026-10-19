import React from "react";
import DefaultScreen from '../assets/Components/DefaultScreen.jsx'
import Pictures from '../assets/Components/Pictures.jsx'
import Title from '../assets/Components/Title.jsx'

const NotFound = () => {
    const base = "/Portfolio_3D_Designer"

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
            <div className="fixed bottom-[90px] left-0 flex w-full justify-center sm:bottom-[44px] lg:bottom-[54px] xl:bottom-[44px]">
                <Pictures
                    src={`${base}/pics/Gremlin1080_Final.webp`}
                    alt="Gremlin"
                    width='w-[150px] sm:w-[210px] lg:w-[220px] xl:w-[390px]'
                    margin='m-0'
                    special='block fill-white drop-shadow-xl/50'
                />
            </div>
        </DefaultScreen>
    );
};

export default NotFound;