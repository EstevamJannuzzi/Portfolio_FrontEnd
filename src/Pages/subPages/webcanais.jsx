import React from 'react'
import Pictures from '../../assets/Components/Pictures.jsx'
import Title from '../../assets/Components/Title.jsx'
import Button from '../../assets/Components/Button.jsx'
import websites from '../../assets/Data/websites.js'
import canais from '../../assets/Data/canais.js'
import openExternalLink from '../../utils/openExternalLink.js'

const WebCanais = () => {
    return (
        <section
            id="webcanais"
            className="relative isolate scroll-mt-24 py-24 before:absolute before:inset-y-0 before:left-1/2 before:w-[200vw] before:-translate-x-1/2 before:-z-10 before:[clip-path:polygon(0_14%,100%_0,100%_86%,0_100%)] before:bg-[linear-gradient(35deg,var(--color-purple)_0%,var(--color-secondary)_65%)] before:content-['']"
        >
            <div className="flex flex-col items-center justify-center gap-8">
                <div>
                    <div
                        id="sites"
                        className="flex flex-col items-center justify-center gap-2 text-center"
                    >
                        <Title
                            text="Websites"
                            size="text-[28px] sm:text-[32px] lg:text-[36px] xl:text-[44px]"
                        />
                    </div>

                    <div className="relative mt-6 mb-10 flex items-center justify-center">
                        {websites.map((site) => (
                            <div
                                key={site.id}
                                className="flex flex-col items-center justify-center"
                            >
                                <Pictures
                                    src={site.src}
                                    alt={site.alt}
                                    width="w-[220px] sm:w-[200px] lg:w-[240px] xl:w-[340px]"
                                    margin="mb-4"
                                />

                                <Button
                                    text={site.text}
                                    onClick={() => openExternalLink(site.link)}
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

                    <div className="relative mt-6 mb-10 flex items-center justify-center">
                        {canais.map((canal) => (
                            <div
                                key={canal.id}
                                className="flex flex-col items-center justify-center"
                            >
                                <Pictures
                                    src={canal.src}
                                    alt={canal.alt}
                                    width="w-[220px] sm:w-[200px] lg:w-[240px] xl:w-[340px]"
                                    margin="mb-4"
                                />

                                <Button
                                    text={canal.text}
                                    onClick={() => openExternalLink(canal.link)}
                                    width="w-[140px] xl:w-[180px]"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WebCanais
