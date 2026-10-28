import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'
import DefaultScreen from '../assets/Components/DefaultScreen.jsx'
import Pictures from '../assets/Components/Pictures.jsx'
import BoxText from '../assets/Components/BoxText.jsx'
import Title from '../assets/Components/Title.jsx'
import Button from '../assets/Components/Button.jsx'
import Iframe from '../assets/Components/Iframe.jsx'
import Pagination from '../assets/Components/Pagination.jsx'
import Accordion from '../assets/Components/Accordion.jsx'
import Charts from '../assets/Components/Charts.jsx'
import programacaos from '../assets/Data/programacaos.js'
import websites from '../assets/Data/websites.js'
import canais from '../assets/Data/canais.js'
import videos from '../assets/Data/videos.js'
import images from '../assets/Data/imagens.js'
import { assetUrl } from '../utils/paths.js'

const Home = () => {
    const location = useLocation()
    const [selectedIndex, setSelectedIndex] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 })
    const [isZoomed, setIsZoomed] = useState(false)
    const [openAccordion, setOpenAccordion] = useState(null)
    const imagesPerPage = 6
    const totalPages = Math.ceil(images.length / imagesPerPage)
    const currentImages = images.slice(
        (currentPage - 1) * imagesPerPage,
        currentPage * imagesPerPage
    )

    useEffect(() => {
        const routeSections = {
            '/programacao': 'programming',
            '/webcanais': 'webcanais',
            '/vidimagens': 'vidimagens',
            '/curriculo': 'curriculo',
            '/contatos': 'contatos',
        }
        const targetId = routeSections[location.pathname] || location.hash.slice(1)

        if (!targetId) return

        document.getElementById(targetId)?.scrollIntoView({
            behavior: 'smooth',
        })
    }, [location.pathname, location.hash])

    useEffect(() => {
        document.body.style.overflow = selectedIndex !== null ? 'hidden' : 'auto'
        return () => { document.body.style.overflow = 'auto' }
    }, [selectedIndex])

    useEffect(() => {
        setZoomPosition({ x: 50, y: 50 })
    }, [selectedIndex])

    const nextImage = (event) => {
        event.stopPropagation()
        setSelectedIndex((previous) => (previous + 1) % images.length)
    }

    const prevImage = (event) => {
        event.stopPropagation()
        setSelectedIndex((previous) => (previous - 1 + images.length) % images.length)
    }

    const handleDownload = (link) => {
        const anchor = document.createElement('a')
        anchor.href = link
        anchor.download = link.split('/').pop()
        document.body.appendChild(anchor)
        anchor.click()
        document.body.removeChild(anchor)
    }

    const handleOpenLink = (link) => {
        window.open(link, '_blank', 'noopener noreferrer')
    }

    const handleContactClick = (link) => {
        if (link.startsWith('mailto:')) {
            window.location.href = link
        } else {
            window.open(link, '_blank', 'noopener noreferrer')
        }
    }

    const handleDownloadPresentation = () => {
        const anchor = document.createElement('a')
        anchor.href = assetUrl('ppt/Apresentacao_Portfolio_Estevam_V2.ppsx')
        anchor.download = 'Apresentacao_Portfolio_Estevam_V2.ppsx'
        document.body.appendChild(anchor)
        anchor.click()
        document.body.removeChild(anchor)
    }

    return (
        <DefaultScreen className='z-30'>

            <div className="w-full">
                {/* Home */}
                <div className='flex flex-col items-center justify-center gap-2'>
                    <Title
                        text="Bem-vindo ao Portfólio de"
                        size="text-[14px] sm:text-[20px] lg:text-[24px] xl:text-[32px]"
                    />
                    <Title
                        text="Estevam Jannuzzi"
                        size="text-[26px] sm:text-[38px] lg:text-[42px] xl:text-[56px]"
                        color="text-white"
                    />
                </div>

                <div className="relative mx-auto mt-20 mb-8 flex w-full flex-col items-center justify-center gap-6 px-4 lg:ml-26 lg:px-0 lg:flex-row lg:gap-10 xl:ml-14">
                    <BoxText
                        text={
                            <>
                                <p>Olá! Sou Estevam Jannuzzi, desenvolvedor web com foco em React.js e JavaScript, apaixonado por criar interfaces, experiências interativas e soluções digitais.</p><br />
                                <p>Minha trajetória profissional começou no design gráfico e na computação gráfica, com experiência em modelagem 3D, texturização, animação, composição e criação de experiências visuais. Hoje, utilizo essa bagagem junto à programação para desenvolver aplicações web que combinam código, usabilidade e qualidade visual.</p>
                            </>
                        }
                        width="w-full lg:w-auto lg:max-w-80 xl:max-w-90"
                        distance="z-20 relative"
                        margin="m-0 md:mb-0 lg:mb-0 lg:mr-0"
                        size="text-[12px] sm:text-[18px]"
                    />
                    <Pictures
                        src={assetUrl('pics/dingbo.webp')}
                        alt="DingBo"
                        width='w-full max-w-[320px] lg:w-[400px] lg:max-w-none xl:w-[420px]'
                        margin='m-0 lg:ml-0'
                        distance='z-10 relative'
                        special='block'
                    />
                </div>

                <div className='mx-auto mt-28 mb-12 flex w-full flex-col items-center justify-center gap-6 px-4 lg:mt-22 lg:px-0 lg:flex-row lg:gap-10'>
                    <Pictures
                        src={assetUrl('pics/carnivor.webp')}
                        alt="Carnivor"
                        width='w-full max-w-[320px] lg:w-[400px] lg:max-w-none xl:w-[480px]'
                        margin='m-0 lg:ml-0'
                        distance='z-10 relative'
                        special='block'
                    />
                    <BoxText
                        text={
                            <>
                                <h3 className="mb-2"><strong>O que faço</strong></h3>
                                <ul className="list-disc space-y-1 pl-5">
                                    <li>Desenvolvimento de aplicações web com React.js</li>
                                    <li>Desenvolvimento de interfaces responsivas e interativas</li>
                                    <li>JavaScript e integração com APIs</li>
                                    <li>Desenvolvimento com Python</li>
                                    <li>Criação de experiências visuais e interativas para a web</li>
                                    <li>Integração entre desenvolvimento web e computação gráfica</li>
                                    <li>Modelagem, animação e elementos 3D para experiências digitais</li>
                                </ul>
                            </>
                        }
                        width="w-full lg:w-auto lg:max-w-80 xl:max-w-90"
                        distance="z-20 relative"
                        position='right'
                        margin="m-0 lg:mt-0 lg:ml-0"
                        size="text-[12px] sm:text-[18px]"
                    />
                </div>

                <div className="relative mx-auto mt-8 mb-8 flex w-full flex-col items-center justify-center gap-6 px-4 sm:mt-16 lg:ml-26 lg:px-0 lg:flex-row lg:gap-10 xl:ml-18">
                    <BoxText
                        text={
                            <>
                                <h3 className="mb-2"><strong>Meu diferencial</strong></h3>
                                <p>Acredito que uma boa aplicação não precisa escolher entre tecnologia e criatividade.</p><br />
                                <p>Minha experiência em computação gráfica me permite olhar para uma interface não apenas como código, mas também como uma experiência visual. Isso me ajuda a pensar em composição, animação, interação, iluminação, profundidade e narrativa visual — conhecimentos que hoje levo para o desenvolvimento web.</p><br />
                                <p>Código + Design + 3D</p><br />
                                <p>É nessa interseção que quero continuar evoluindo como desenvolvedor.</p>
                            </>
                        }
                        width="w-full lg:w-auto lg:max-w-80 xl:max-w-90"
                        distance="z-20 relative"
                        margin="m-0 md:mb-0 lg:mb-0 lg:mr-0"
                        size="text-[12px] sm:text-[18px]"
                    />
                    <Pictures
                        src={assetUrl('pics/gremlin.webp')}
                        alt="Gremlin"
                        width='w-full max-w-[320px] lg:w-[460px] lg:max-w-none xl:w-[440px]'
                        margin='m-0 lg:ml-0 lg:mt-0'
                        distance='z-10 relative'
                        special='block'
                    />
                </div>

                <div className='mx-auto mt-30 mb-4 flex w-full flex-col items-center justify-center gap-6 px-4 sm:mt-8 lg:px-0 lg:flex-row lg:gap-10'>
                    <Pictures
                        src={assetUrl('pics/joystick.webp')}
                        alt="Joystick"
                        width='w-full max-w-[320px] lg:w-[420px] lg:max-w-none xl:w-[400px]'
                        margin='m-0 lg:ml-0'
                        distance='z-10 relative'
                        special='block'
                    />
                    <BoxText
                        text={
                            <>
                                <h3 className="mb-2"><strong>Atualmente</strong></h3>
                                <p>Estou direcionando minha carreira para desenvolvimento web, com foco em oportunidades como Desenvolvedor Front-end / React.js, enquanto continuo explorando a aplicação da computação gráfica e do 3D na web.</p><br />
                                <p>Estou aberto a oportunidades profissionais, projetos e colaborações.</p><br />
                                <p>Vamos criar algo?</p>
                            </>
                        }
                        width="w-full lg:w-auto lg:max-w-80 xl:max-w-90"
                        distance="z-20 relative"
                        position='right'
                        margin="m-0 lg:mt-0 lg:ml-0"
                        size="text-[12px] sm:text-[18px]"
                    />
                </div>

                {/* Programação */}
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

                {/* Websites e canais */}
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
                                            onClick={() => handleOpenLink(site.link)}
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
                                            onClick={() => handleOpenLink(canal.link)}
                                            width="w-[140px] xl:w-[180px]"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Vídeos e imagens */}
                <section id="vidimagens" className="scroll-mt-24 py-12">
                    <div className="flex flex-col items-center justify-center gap-8">
                        <div>
                            <div
                                id="videos"
                                className="flex flex-col items-center justify-center gap-2 text-center"
                            >
                                <Title
                                    text="Vídeos"
                                    size="text-[28px] sm:text-[32px] lg:text-[36px] xl:text-[44px]"
                                />
                            </div>

                            <div className="relative mt-8 mb-10 px-4 sm:px-6">
                                <div className="flex flex-wrap items-center justify-center gap-4">
                                    {videos.map((video, index) => (
                                        <Iframe key={index} src={video.src} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="rounded-[30px] border-1 border-light-blue bg-linear-to-br from-purple/24 to-dark-red/24 px-6 py-2">
                            <div
                                id="images"
                                className="flex flex-col items-center justify-center gap-2 text-center"
                            >
                                <Title
                                    text="Imagens"
                                    size="text-[28px] sm:text-[32px] lg:text-[36px] xl:text-[44px]"
                                />
                            </div>

                            <div className="relative mt-8 mb-10 flex items-center justify-center">
                                <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-6">
                                    {currentImages.map((src, index) => {
                                        const imageIndex = (currentPage - 1) * imagesPerPage + index

                                        return (
                                            <button
                                                key={imageIndex}
                                                onClick={() => setSelectedIndex(imageIndex)}
                                                className="cursor-pointer transition-transform hover:scale-105"
                                            >
                                                <img
                                                    src={src}
                                                    alt="Imagem"
                                                    className="w-[220px] rounded-[12px] sm:w-[200px] lg:w-[240px] xl:w-[340px]"
                                                />
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>

                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={setCurrentPage}
                            />

                            {selectedIndex !== null && (
                                <div
                                    className="fixed inset-0 z-[9999] flex cursor-zoom-out items-center justify-center bg-black/80"
                                    onClick={() => setSelectedIndex(null)}
                                >
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-6 z-10 cursor-pointer rounded-full bg-black/40 px-1 py-1 text-white hover:bg-black/60 hover:text-light-blue"
                                    >
                                        <MdNavigateBefore size={50} />
                                    </button>

                                    <div
                                        className={`relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-2xl shadow-2xl ${
                                            isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
                                        }`}
                                        onClick={(event) => {
                                            event.stopPropagation()
                                            setIsZoomed((zoomed) => !zoomed)
                                        }}
                                        onMouseMove={(event) => {
                                            const bounds = event.currentTarget.getBoundingClientRect()
                                            setZoomPosition({
                                                x: ((event.clientX - bounds.left) / bounds.width) * 100,
                                                y: ((event.clientY - bounds.top) / bounds.height) * 100,
                                            })
                                        }}
                                    >
                                        <img
                                            src={images[selectedIndex]}
                                            alt="Imagem ampliada"
                                            className="block max-h-[90vh] max-w-[90vw] object-contain transition-transform duration-150"
                                            style={{
                                                transform: isZoomed ? 'scale(2)' : 'scale(1)',
                                                transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                                            }}
                                        />
                                    </div>

                                    <button
                                        onClick={nextImage}
                                        className="absolute right-6 z-10 cursor-pointer rounded-full bg-black/40 px-1 py-1 text-white hover:bg-black/60 hover:text-light-blue"
                                    >
                                        <MdNavigateNext size={50} />
                                    </button>

                                    <button
                                        onClick={(event) => {
                                            event.stopPropagation()
                                            setSelectedIndex(null)
                                        }}
                                        className="absolute top-6 right-6 cursor-pointer text-3xl font-bold text-white hover:text-light-blue"
                                    >
                                        ✕
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Currículo */}
                <section id="curriculo" className="scroll-mt-24 py-12">
                    <div className="flex flex-col items-center justify-center gap-2 text-center">
                        <Title
                            text="Currículo"
                            size="text-[32px] sm:text-[34px] lg:text-[38px] xl:text-[44px]"
                        />

                        <div className="mt-4 mb-4 flex flex-col items-center justify-center gap-4">
                            <Pictures
                                src={assetUrl('pics/User.webp')}
                                alt="Estevam Jannuzzi"
                                width="w-20 sm:w-28 lg:w-26 xl:w-40"
                                special="rounded-full outline-2 outline-offset-6 outline-solid outline-light-blue"
                            />

                            <Button
                                text="Baixar Apresentação"
                                onClick={handleDownloadPresentation}
                                width="w-[160px] xl:w-[200px]"
                            />
                        </div>

                        <div className="z-20 flex flex-col items-center justify-center gap-y-4">
                            <Accordion
                                title="Resumo Profissional:"
                                description={
                                    <>
                                        <p>Sou Designer Gráfico formado pela Universidade Paulista (UNIP) em 2011, com sólida experiência em design visual, modelagem 3D, animação e desenvolvimento de soluções digitais. Ao longo da minha trajetória profissional, construí uma visão multidisciplinar que une criatividade, tecnologia e atenção aos detalhes, e atualmente direciono essa experiência para a área de Desenvolvimento Front-end Web.</p>
                                        <p>Iniciei minha carreira na empresa de engenharia Lubrin, atuando na criação de projetos tridimensionais de motores, redutores e componentes técnicos. Nesse período, também desenvolvi materiais gráficos, gerenciei o site institucional e trabalhei com edição de vídeos e imagens, adquirindo experiência prática na criação e manutenção de conteúdos para ambientes digitais.</p>
                                        <p>Posteriormente, atuei como freelancer no estúdio de desenvolvimento de games IzotonicStudios, contribuindo com modelagem 3D, texturização e animações 2D e 3D para personagens e cenários. Essa experiência ampliou minha capacidade de trabalhar com projetos digitais, compreender diferentes etapas de produção e transformar conceitos visuais em experiências interativas.</p>
                                        <p>Atualmente, atuo como Designer na MentalPlus®, empresa responsável pelo aplicativo homônimo voltado à área neuropsicológica. Sou responsável pela modelagem e animação do mascote Dr. Brainy, além da manutenção do site da empresa, experiência que fortaleceu meu interesse pelo desenvolvimento web e pela criação de interfaces digitais.</p>
                                        <p>Minha formação e experiência em design me proporcionam uma forte base em composição visual, tipografia, cores, hierarquia de informação, usabilidade e experiência do usuário, competências que considero fundamentais para o desenvolvimento de interfaces web eficientes e visualmente consistentes.</p>
                                        <p>Tenho grande interesse por tecnologia e inovação e busco constantemente aprimorar meus conhecimentos em desenvolvimento Front-end e novas ferramentas. Sou um profissional colaborativo, proativo, objetivo e determinado, com forte atenção aos detalhes e facilidade para unir visão criativa e pensamento técnico na resolução de problemas.</p>
                                        <p>Busco uma oportunidade na área de Desenvolvimento Front-end, onde possa unir minha experiência consolidada em design à programação e ao desenvolvimento de interfaces web, contribuindo para a criação de produtos digitais funcionais, responsivos e com excelente experiência para o usuário.</p>
                                    </>
                                }
                                isOpen={openAccordion === 0}
                                onToggle={() => setOpenAccordion(openAccordion === 0 ? null : 0)}
                            />

                            <Accordion
                                title="Formação Acadêmica:"
                                description={
                                    <>
                                        <p>Graduado em Design Gráfico - Faculdade UNIP – Concluído 12/2011</p>
                                        <p>Ensino Médio Técnico em Eletrônica – Colégio S.A.A. – Concluído 12/1997</p>
                                    </>
                                }
                                isOpen={openAccordion === 1}
                                onToggle={() => setOpenAccordion(openAccordion === 1 ? null : 1)}
                            />

                            <Accordion
                                title="Idiomas:"
                                description={
                                    <>
                                        <p>Inglês - Intermediário</p>
                                        <p>Espanhol - Básico</p>
                                    </>
                                }
                                isOpen={openAccordion === 2}
                                onToggle={() => setOpenAccordion(openAccordion === 2 ? null : 2)}
                            />

                            <Accordion
                                title="Experiência Profissional:"
                                description={
                                    <>
                                        <p><strong>MENTALPLUS®</strong></p>
                                        <p><strong>DESENVOLVEDOR Front-End (Freelancer)</strong></p>
                                        <p className="pl-4">01/2022 - Atual</p>
                                        <p className="pl-4">Desenvolvimento e manutenção de aplicações web utilizando React.js, JavaScript e Python.</p>
                                        <p className="pl-4 mb-4">Desenvolvimento de interfaces e funcionalidades para aplicações web.</p>
                                        <p className="pl-4 mb-4">Integração e manutenção de componentes e funcionalidades existentes.</p>
                                        <p className="pl-4 mb-4">Manutenção e evolução do site da empresa.</p>
                                        <p className="pl-4 mb-4">Colaboração na criação de soluções digitais combinando desenvolvimento de software, design e conteúdo visual.</p>
                                        <br />
                                        <p><strong>IZOTONIC STUDIOS</strong></p>
                                        <p><strong>ARTISTA 3D / 3D ARTIST (Freelancer)</strong></p>
                                        <p className="pl-4">01/2016 - Atual</p>
                                        <p className="pl-4">Atuação como freelancer em projetos de desenvolvimento de games, produzindo conteúdo visual e assets 3D para jogos.</p>
                                        <p className="pl-4 mb-4">Principais atividades:</p>
                                        <ul className="mb-4 list-disc space-y-2 pl-10">
                                            <li>Modelagem 3D de personagens e objetos</li>
                                            <li>Modelagem de cenários e elementos para games</li>
                                            <li>Texturização</li>
                                            <li>Animação 3D</li>
                                            <li>Animação 2D</li>
                                            <li>Preparação e configuração de personagens</li>
                                            <li>Desenvolvimento de assets para projetos de games</li>
                                            <li>Criação e preparação de conteúdo visual para integração aos projetos</li>
                                        </ul>
                                        <br />
                                        <p><strong>LUBRIN</strong></p>
                                        <p><strong>DESIGNER GRÁFICO</strong></p>
                                        <p className="pl-4">04/2011 - 12/2014</p>
                                        <p className="pl-4">Atuação na criação de projetos visuais e conteúdos digitais para uma empresa da área de engenharia.</p>
                                        <p className="pl-4">Principais atividades:</p>
                                        <ul className="mb-4 list-disc space-y-2 pl-10">
                                            <li>Criação de projetos e modelos 3D de motores, redutores e componentes</li>
                                            <li>Modelagem e apresentação de projetos de engenharia</li>
                                            <li>Criação de materiais gráficos</li>
                                            <li>Desenvolvimento de flyers e folders</li>
                                            <li>Edição de imagens</li>
                                            <li>Edição e produção de vídeos</li>
                                            <li>Manutenção e atualização de conteúdo do site</li>
                                            <li>Desenvolvimento de materiais digitais para comunicação da empresa</li>
                                        </ul>
                                        <p className="pl-4">Essa experiência proporcionou contato com projetos técnicos e a aplicação de computação gráfica em ambientes de engenharia.</p>
                                    </>
                                }
                                isOpen={openAccordion === 3}
                                onToggle={() => setOpenAccordion(openAccordion === 3 ? null : 3)}
                            />

                            <Accordion
                                title="Participações:"
                                description={
                                    <p>Experiência em eventos e competições do setor: Big Festival, Campus Party, Game Jam (campeão em 2019) e mentor no Game Jam+.</p>
                                }
                                isOpen={openAccordion === 4}
                                onToggle={() => setOpenAccordion(openAccordion === 4 ? null : 4)}
                            />
                        </div>
                    </div>

                    <div className="mt-10 flex justify-center px-4">
                        <Charts
                            title="Minhas Skills"
                            size={96}
                            data={[
                                { category: 'Programação', label: 'Python', value: 45 },
                                { category: 'Programação', label: 'HTML5', value: 75 },
                                { category: 'Programação', label: 'CSS3', value: 75 },
                                { category: 'Programação', label: 'JavaScript', value: 45 },
                                { category: 'Programação', label: 'WordPress', value: 50 },
                                { category: 'Programação', label: 'ReactJS', value: 65 },
                                { category: 'Programação', label: 'Tailwind CSS', value: 75 },
                                { category: 'Sistemas Operacionais', label: 'Windows 8.1', value: 70 },
                                { category: 'Sistemas Operacionais', label: 'Windows 10', value: 85 },
                                { category: 'Sistemas Operacionais', label: 'Windows 11', value: 85 },
                                { category: 'Sistemas Operacionais', label: 'Linux Mint', value: 65 },
                                { category: 'Sistemas Operacionais', label: 'Linux Ubuntu', value: 65 },
                                { category: 'Sistemas Operacionais', label: 'Linux Fedora', value: 60 },
                                { category: 'Computação Gráfica', label: 'Maya', value: 85 },
                                { category: 'Computação Gráfica', label: 'ZBrush', value: 65 },
                                { category: 'Computação Gráfica', label: 'Photoshop', value: 85 },
                                { category: 'Computação Gráfica', label: 'Illustrator', value: 70 },
                                { category: 'Computação Gráfica', label: 'InDesign', value: 60 },
                                { category: 'Computação Gráfica', label: 'After Effects', value: 65 },
                                { category: 'Computação Gráfica', label: 'Premiere', value: 85 },
                                { category: 'Computação Gráfica', label: 'Media Encore', value: 90 },
                                { category: 'Computação Gráfica', label: 'Substance 3D Painter', value: 75 },
                                { category: 'Computação Gráfica', label: 'KeyShot', value: 65 },
                                { category: 'Computação Gráfica', label: 'Figma', value: 60 },
                            ]}
                        />
                    </div>
                </section>

                {/* Contatos */}
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
