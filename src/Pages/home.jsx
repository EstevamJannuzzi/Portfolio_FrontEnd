import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import DefaultScreen from '../assets/Components/DefaultScreen.jsx'
import Pictures from '../assets/Components/Pictures.jsx'
import Apresentacao from './subPages/apresentacao.jsx'
import Programacao from './subPages/programacao.jsx'
import VidImagens from './subPages/vidimagens.jsx'
import WebCanais from './subPages/webcanais.jsx'
import Curriculo from './subPages/curriculo.jsx'
import Contatos from './subPages/contatos.jsx'
import { assetUrl } from '../utils/paths.js'
import { sectionRoutes } from '../utils/sectionRoutes.js'

const Home = () => {
    const location = useLocation()

    useEffect(() => {
        const targetId = sectionRoutes[location.pathname] || location.hash.slice(1)

        if (!targetId) return

        if (targetId === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            return
        }

        document.getElementById(targetId)?.scrollIntoView({
            behavior: 'smooth',
        })
    }, [location.pathname, location.hash])

    return (
        <DefaultScreen className='z-30'>

            <div className="w-full">
                {/* Home */}
                <Apresentacao />

                {/* Programação */}
                <Programacao />

                {/* Websites e canais */}
                <WebCanais />

                {/* Vídeos e imagens */}
                <VidImagens />

                {/* Currículo */}
                <Curriculo />

                {/* Contatos */}
                <Contatos />

                <div className="flex w-full justify-center mt-8 mb-[-30px] sm:mb-[-52px] lg:mb-[-42px] xl:mb-[-36px]">
                    <Pictures
                        src={assetUrl('pics/Gremlin1080_Final.webp')}
                        alt="Gremlin"
                        width='w-[150px] sm:w-[210px] lg:w-[220px] xl:w-[390px]'
                        margin='m-0'
                        special='block fill-white drop-shadow-xl/50'
                    />
                </div>
            </div>

        </DefaultScreen>
    )
}

export default Home
