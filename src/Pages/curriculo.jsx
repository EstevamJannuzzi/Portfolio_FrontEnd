import React, { useState } from 'react'
import DefaultScreen from '../assets/Components/DefaultScreen.jsx'
import Title from '../assets/Components/Title.jsx'
import Pictures from '../assets/Components/Pictures.jsx'
import Button from '../assets/Components/Button.jsx'
import Accordion from '../assets/Components/Accordion.jsx'
import { assetUrl } from '../utils/paths.js'

const Curriculo = () => {
  const [openAccordion, setOpenAccordion] = useState(null)

  const handleDownloadPresentation = () => {
    const link = document.createElement('a')
    link.href = assetUrl('ppt/Apresentacao_Portfolio_Estevam_V2.ppsx')
    link.download = 'Apresentacao_Portfolio_Estevam_V2.ppsx'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <DefaultScreen className='z-30'>
      <div className='flex flex-col items-center justify-center gap-2 text-center'>

        <Title
          text="Currículo"
          size="text-[32px] sm:text-[34px] lg:text-[38px] xl:text-[44px]"
        />

        <div className='flex flex-col items-center justify-center gap-4 mt-4 mb-4'>

          {/* Foto do Usuário */}
          <Pictures
            src={assetUrl('pics/User.webp')}
            alt="Estevam Jannuzzi"
            width='w-20 sm:w-28 lg:w-26 xl:w-40'
            special='rounded-full outline-2 outline-offset-6 outline-solid outline-light-blue'
          />

         <Button
            text="Baixar Apresentação"
            onClick={handleDownloadPresentation}
            width='w-[160px] xl:w-[200px]'
          />
        </div>

        <div className="fixed top-24 sm:top-26 lg:top-38 xl:top-30 -right-6 sm:-right-8 lg:-right-14 xl:-right-18">
          <Pictures
            src={assetUrl('pics/frog_smart.webp')}
            alt="Frog Smart"
            width='w-[130px] sm:w-[200px] lg:w-[240px] xl:w-[380px]'
            margin='m-0'
            special='block fill-white drop-shadow-xl/50'
          />
        </div>

        <div className='flex flex-col items-center justify-center gap-y-4 z-20'>

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
            onToggle={() =>
              setOpenAccordion(openAccordion === 0 ? null : 0)
            }
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
            onToggle={() =>
              setOpenAccordion(openAccordion === 1 ? null : 1)
            }
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
            onToggle={() =>
              setOpenAccordion(openAccordion === 2 ? null : 2)
            }
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
                <ul className="list-disc space-y-2 pl-10 mb-4">
                  <li>Modelagem 3D de personagens e objetos</li>
                  <li>Modelagem de cenários e elementos para games</li>
                  <li>Texturização</li>
                  <li>Animação 3D</li>
                  <li>Animação 2D</li>
                  <li>Preparação e configuração de personagens</li>
                  <li>Desenvolvimento de assets para projetos de games</li>
                  <li>Criação e preparação de conteúdo visual para integração aos projetos</li>
                </ul><br />

                <p><strong>LUBRIN</strong></p>
                <p><strong>DESIGNER GRÁFICO</strong></p>
                <p className="pl-4">04/2011 - 12/2014</p>
                <p className="pl-4">Atuação na criação de projetos visuais e conteúdos digitais para uma empresa da área de engenharia.</p>
                <p className="pl-4">Principais atividades:</p>
                <ul className="list-disc space-y-2 pl-10 mb-4">
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
            onToggle={() =>
              setOpenAccordion(openAccordion === 3 ? null : 3)
            }
          />

          <Accordion
            title="Cursos Complementares:"
            description={
              <>
                <p>Computação Gráfica: Autodesk Maya, Pixologic Zbrush, Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Adobe After Effects, Adobe Premiere, Adobe Media Encore, Adobe Substance 3D Painter, Luxion Keyshot, Figma.</p>
                <p>Programação: Python, HTML5, CSS3, JavaScript (Intro), WordPress, ReactJS e Tailwind CSS.</p>
                <p>Sistemas Operacionais: Windows 8.1, 10, 11, Linux Mint, Linux Ubuntu e Linux Fedora.</p>
              </>
            }
            isOpen={openAccordion === 4}
            onToggle={() =>
              setOpenAccordion(openAccordion === 4 ? null : 4)
            }
          />

          <Accordion
            title="Participações:"
            description={
              <p>Experiência em eventos e competições do setor: Big Festival, Campus Party, Game Jam (campeão em 2019) e mentor no Game Jam+.</p>
            }
            isOpen={openAccordion === 5}
            onToggle={() =>
              setOpenAccordion(openAccordion === 5 ? null : 5)
            }
          />

        </div>

      </div>
    </DefaultScreen>
  )
}

export default Curriculo