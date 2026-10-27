import React from 'react'
import DefaultScreen from '../assets/Components/DefaultScreen.jsx'
import Title from '../assets/Components/Title.jsx'
import Pictures from '../assets/Components/Pictures.jsx'
import Button from '../assets/Components/Button.jsx'
import websites from '../assets/Data/websites.js'
import canais from '../assets/Data/canais.js'

function Web_Canais() {
    const handleButtonClick = (link) => {
        window.open(link, '_blank', 'noopener noreferrer')
    }

    return (
        <DefaultScreen>
            <div className='flex flex-col justify-center items-center -mt-20 lg:-mt-30 gap-8'>
                <>
                    <div>
                        <div
                            id="sites"
                            className="flex flex-col items-center justify-center gap-2 text-center"
                        >
                            <Title
                                text="Websites"
                                size="text-[28px] sm:text-[32px] lg:text-[36px] xl:text-[44px] mt-24 sm:mt-20 lg:mt-40 xl:mt-40"
                            />
                        </div>

                        <div className="relative flex justify-center items-center mt-6 mb-10">
                            {websites.map((site) => (
                                <div
                                    key={site.id}
                                    className="flex flex-col justify-center items-center"
                                >
                                    <Pictures
                                        src={site.src}
                                        alt={site.alt}
                                        width="w-[220px] sm:w-[200px] lg:w-[240px] xl:w-[340px]"
                                        margin="mb-4"
                                    />

                                    <Button
                                        text={site.text}
                                        onClick={() => handleButtonClick(site.link)}
                                        width="w-[140px] xl:w-[180px]"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div
                            id="channels"
                            className="flex flex-col items-center justify-center gap-2 text-center"
                        >
                            <Title
                                text="Canais"
                                size="text-[28px] sm:text-[32px] lg:text-[36px] xl:text-[44px]"
                            />
                        </div>

                        <div className="relative flex justify-center items-center mt-6 mb-10">
                            {canais.map((canal) => (
                                <div
                                    key={canal.id}
                                    className="flex flex-col justify-center items-center"
                                >
                                    <Pictures
                                        src={canal.src}
                                        alt={canal.alt}
                                        width="w-[220px] sm:w-[200px] lg:w-[240px] xl:w-[340px]"
                                        margin="mb-4"
                                    />

                                    <Button
                                        text={canal.text}
                                        onClick={() => handleButtonClick(canal.link)}
                                        width="w-[140px] xl:w-[180px]"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            </div>
        </DefaultScreen>
    )
}

export default Web_Canais
