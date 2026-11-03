import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import Pictures from '../../assets/Components/Pictures.jsx'
import Title from '../../assets/Components/Title.jsx'
import Button from '../../assets/Components/Button.jsx'
import { assetUrl } from '../../utils/paths.js'
import openExternalLink from '../../utils/openExternalLink.js'

const Contatos = () => {
    const handleContactClick = (link) => {
        if (link.startsWith('mailto:')) {
            window.location.href = link
        } else {
            openExternalLink(link)
        }
    }

    return (
        <section id="contatos" className="relative isolate scroll-mt-24 py-24 before:absolute before:inset-y-0 before:left-1/2 before:w-[200vw] before:-translate-x-1/2 before:-z-10 before:[clip-path:polygon(0_14%,100%_0,100%_86%,0_100%)] before:bg-[linear-gradient(35deg,var(--color-dark-red)_0%,var(--color-secondary)_65%)] before:content-['']">
            <div className="flex flex-col items-center justify-center gap-2 text-center">
                <Title
                    text="Contato"
                    size="text-[32px] sm:text-[34px] lg:text-[38px] xl:text-[44px]"
                />
            </div>

            <div className="mt-10 mb-2 flex items-center justify-center">
                <Pictures
                    src={assetUrl('pics/ContatosDing.webp')}
                    alt="Contatos Ding"
                    width="w-[200px] sm:w-[180px] lg:w-[260px] xl:w-[280px]"
                />
            </div>

            <div className="relative mt-8 flex items-center justify-center">
                <div className="grid grid-cols-1 gap-4">
                    <Button
                        icon={<FaWhatsapp size={30} />}
                        text="WhatsApp"
                        width="w-[110px] lg:w-[120px] xl:w-[130px]"
                        onClick={() => handleContactClick("https://wa.me/5511952029128?text=Olá! Como posso te ajudar?")}
                    />
                </div>
            </div>
        </section>
    )
}

export default Contatos
