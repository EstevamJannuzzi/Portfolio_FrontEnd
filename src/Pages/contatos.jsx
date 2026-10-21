import React from 'react'
import DefaultScreen from '../assets/Components/DefaultScreen.jsx'
import Title from '../assets/Components/Title.jsx'
import Button from '../assets/Components/Button.jsx'
import Pictures from '../assets/Components/Pictures.jsx'
import { FaWhatsapp } from 'react-icons/fa'
import { assetUrl } from '../utils/paths.js'

const Contatos = () => {
  const contacts = [
    { icon: <FaWhatsapp size={30} />, text: "WhatsApp", link: "https://wa.me/5511952029128?text=Olá! Como posso te ajudar?" },
  ]

  const handleButtonClick = (link) => {
    if (link.startsWith('mailto:')) {
      window.location.href = link
    } else {
      window.open(link, '_blank', 'noopener noreferrer')
    }
  }

  return (
    <DefaultScreen className='z-30'>

      {/* Títulos */}
      <div className='flex flex-col items-center justify-center gap-2 text-center'>
        <Title
          text="Contato"
          size="text-[32px] sm:text-[34px] lg:text-[38px] xl:text-[44px]"
        />
      </div>

      {/* Imagem Superior */}
      <div className="flex justify-center items-center mt-10 mb-2">
        <Pictures
          src={assetUrl('pics/ContatosDing.webp')}
          alt="Contatos Ding"
          width="w-[200px] sm:w-[180px] lg:w-[260px] xl:w-[280px]"
        />
      </div>

      {/* Grid de contatos */}
      <div className="relative flex justify-center items-center mt-8">
        <div className="grid grid-cols-1 gap-4">
          {contacts.map((contact, index) => (
            <Button
              key={index}
              icon={contact.icon}
              text={contact.text}
              width="w-[110px] lg:w-[120px] xl:w-[130px]"
              onClick={() => handleButtonClick(contact.link)}
            />
          ))}
        </div>
      </div>
    </DefaultScreen>
  )
}

export default Contatos
