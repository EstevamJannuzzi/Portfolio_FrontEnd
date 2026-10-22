import React from 'react'

const BoxText = ({ text, width, distance, margin, size, position = 'left' }) => {
  // Define se a borda fica à esquerda ou à direita
  const borderSide = position === 'right' 
    ? 'border-r-12' 
    : 'border-l-12'

  return (
    <div className="flex w-full justify-center lg:block lg:w-fit">
      <div
        className={`font-text ${size} text-light-gray
        bg-primary/35 rounded-lg p-4 ${width} ${distance} ${margin} 
        ${borderSide} border-light-blue`}
      >
        {text}
      </div>
    </div>
  )
}

export default BoxText
