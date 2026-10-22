import React from 'react'
import DefaultScreen from '../assets/Components/DefaultScreen.jsx'
import Pictures from '../assets/Components/Pictures.jsx'
import BoxText from '../assets/Components/BoxText.jsx'
import Title from '../assets/Components/Title.jsx'

const Home = () => {
    return (
        <DefaultScreen className='z-30'>

            <div className="w-full overflow-x-clip">
                <div className='flex flex-col items-center justify-center gap-2'>
                    <Title
                        text="Bem-vindo ao Portfólio de"
                        size="text-[20px] sm:text-[32px] lg:text-[36px] xl:text-[50px]"
                    />
                    <Title
                        text="Estevam Jannuzzi"
                        size="text-[26px] sm:text-[38px] lg:text-[42px] xl:text-[56px]"
                        color="text-white"
                    />
                </div>


            {/* BLOCO 1 */}
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
                    src="./pics/dingbo.webp"
                    alt="DingBo"
                    width='w-full max-w-[320px] lg:w-[400px] lg:max-w-none xl:w-[420px]'
                    margin='m-0 lg:ml-0'
                    distance='z-10 relative'
                    special='block'
                />
            </div>

            {/* BLOCO 2 */}
            <div className='mx-auto mt-28 mb-12 flex w-full flex-col items-center justify-center gap-6 px-4 lg:mt-22 lg:px-0 lg:flex-row lg:gap-10'>
                <Pictures
                    src="./pics/carnivor.webp"
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

            {/* BLOCO 3 */}
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
                    src="./pics/gremlin.webp"
                    alt="Gremlin"
                    width='w-full max-w-[320px] lg:w-[460px] lg:max-w-none xl:w-[440px]'
                    margin='m-0 lg:ml-0 lg:mt-0'
                    distance='z-10 relative'
                    special='block'
                />
            </div>

            {/* BLOCO 4 */}
            <div className='mx-auto mt-30 mb-4 flex w-full flex-col items-center justify-center gap-6 px-4 sm:mt-8 lg:px-0 lg:flex-row lg:gap-10'>
                <Pictures
                    src="./pics/joystick.webp"
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

                <div className="flex w-full justify-center mb-[-30px] sm:mb-[-52px] lg:mb-[-42px] xl:mb-[-36px]">
                    <Pictures
                        src="./pics/Gremlin1080_Final.webp"
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
