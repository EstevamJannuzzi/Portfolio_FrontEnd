import React from 'react'
import Pictures from '../../assets/Components/Pictures.jsx'
import Title from '../../assets/Components/Title.jsx'
import Button from '../../assets/Components/Button.jsx'
import programacaos from '../../assets/Data/programacaos.js'

const Programacao = () => {
    const handleDownload = (link) => {
        const anchor = document.createElement('a')
        anchor.href = link
        anchor.download = link.split('/').pop()
        document.body.appendChild(anchor)
        anchor.click()
        document.body.removeChild(anchor)
    }

    return (
        <section id="programming" className="scroll-mt-24 py-12">
            <div className="flex flex-col items-center justify-center gap-2 text-center">
                <Title
                    text="Programação"
                    size="text-[28px] sm:text-[32px] lg:text-[36px] xl:text-[44px]"
                />
            </div>

            <div className="relative mt-8 mb-8 flex items-center justify-center">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
                    {programacaos.map((programacao) => (
                        <div
                            key={programacao.id}
                            className="flex flex-col items-center justify-center"
                        >
                            <Pictures
                                src={programacao.src}
                                alt={programacao.alt}
                                width="w-[160px] sm:w-[140px] lg:w-[180px] xl:w-[200px]"
                                margin="mb-4"
                            />

                            <Button
                                text={programacao.text}
                                onClick={() => handleDownload(programacao.link)}
                                download={true}
                                width="w-[160px] sm:w-[140px] lg:w-[170px] xl:w-[200px]"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Programacao
