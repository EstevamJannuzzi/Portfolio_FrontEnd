import React from 'react'

const Accordion = ({
  title,
  description,
  size = "text-[12px] sm:text-[18px]",
  isOpen,
  onToggle
}) => {
  return (
    <div
      className={`rounded-lg py-8 px-6 mb-4 w-90 sm:w-164 lg:w-180 xl:w-190 border-l-12 border-light-blue bg-primary/35`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left cursor-pointer"
        aria-expanded={isOpen}
      >
        <h2
          className={`text-[${size}] text-left text-light-gray`}
        >
          {title}
        </h2>

        <span
          className="ml-4 shrink-0 flex items-center justify-center w-7 h-7 rounded-full border-2 border-light-blue text-light-gray transition-all duration-300"
          aria-hidden="true"
        >
          <span className="relative w-3 h-3">
            <span className="absolute left-0 top-1/2 w-3 h-[2px] -translate-y-1/2 bg-current rounded-full" />

            <span
              className={`absolute left-1/2 top-0 w-[2px] h-3 -translate-x-1/2 bg-current rounded-full transition-all duration-300 ${
                isOpen
                  ? 'rotate-90 opacity-0'
                  : 'rotate-0 opacity-100'
              }`}
            />
          </span>
        </span>
      </button>

      <hr className="w-1/2 border-t-2 my-4 border-light-blue" />

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div
            className={`space-y-4 text-left font-text ${size} text-light-gray`}
          >
            {description}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accordion