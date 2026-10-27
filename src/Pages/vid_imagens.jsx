import React, { useState, useEffect } from 'react'
import DefaultScreen from '../assets/Components/DefaultScreen.jsx'
import Title from '../assets/Components/Title.jsx'
import Iframe from '../assets/Components/Iframe.jsx'
import videos from '../assets/Data/videos.js'
import Pagination from '../assets/Components/Pagination.jsx'
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md'
import images from '../assets/Data/imagens.js'

function VidImagens() {
    const [selectedIndex, setSelectedIndex] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 })
    const [isZoomed, setIsZoomed] = useState(false)
    const imagesPerPage = 6
    const totalPages = Math.ceil(images.length / imagesPerPage)
    const currentImages = images.slice(
        (currentPage - 1) * imagesPerPage,
        currentPage * imagesPerPage
    )

    useEffect(() => {
        document.body.style.overflow = selectedIndex !== null ? 'hidden' : 'auto'
        return () => { document.body.style.overflow = 'auto' }
    }, [selectedIndex])

    useEffect(() => {
        setIsZoomed(false)
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

    return (
        <DefaultScreen>
            <div className='flex flex-col justify-center items-center -mt-20 lg:-mt-30 gap-8'>
                <div>
                    <div
                        id="videos"
                        className="flex flex-col items-center justify-center gap-2 text-center"
                    >
                        <Title
                            text="Vídeos"
                            size="text-[28px] sm:text-[32px] lg:text-[36px] xl:text-[44px] mt-24 sm:mt-20 lg:mt-40 xl:mt-40"
                        />
                    </div>

                    <div className="relative mt-8 mb-10 px-4 sm:px-6">
                        <div className="flex flex-wrap justify-center items-center gap-4">
                            {videos.map((video, index) => (
                                <Iframe
                                    key={index}
                                    src={video.src}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        id="images"
                        className="flex flex-col items-center justify-center gap-2 text-center"
                    >
                        <Title
                            text="Imagens"
                            size="text-[28px] sm:text-[32px] lg:text-[36px] xl:text-[44px]"
                        />
                    </div>

                    <div className="relative flex justify-center items-center mt-8 mb-10">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-6">
                            {currentImages.map((src, index) => {
                                const imageIndex = (currentPage - 1) * imagesPerPage + index

                                return (
                                    <button
                                        key={imageIndex}
                                        onClick={() => setSelectedIndex(imageIndex)}
                                        className="transition-transform hover:scale-105 cursor-pointer"
                                    >
                                        <img
                                            src={src}
                                            alt="Imagem"
                                            className="rounded-[12px] w-[220px] sm:w-[200px] lg:w-[240px] xl:w-[340px]"
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
                            className="fixed inset-0 bg-black/80 flex justify-center items-center z-[9999] cursor-zoom-out"
                            onClick={() => setSelectedIndex(null)}
                        >
                            <button
                                onClick={prevImage}
                                className="absolute left-6 z-10 text-white hover:text-light-blue px-1 py-1 bg-black/40 rounded-full hover:bg-black/60 cursor-pointer"
                            >
                                <MdNavigateBefore size={50} />
                            </button>

                            <div
                                className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-2xl shadow-2xl cursor-zoom-in"
                                onClick={(event) => event.stopPropagation()}
                                onMouseEnter={() => setIsZoomed(true)}
                                onMouseLeave={() => {
                                    setIsZoomed(false)
                                    setZoomPosition({ x: 50, y: 50 })
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
                                className="absolute right-6 z-10 text-white hover:text-light-blue px-1 py-1 bg-black/40 rounded-full hover:bg-black/60 cursor-pointer"
                            >
                                <MdNavigateNext size={50} />
                            </button>

                            <button
                                onClick={(event) => {
                                    event.stopPropagation()
                                    setSelectedIndex(null)
                                }}
                                className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-light-blue cursor-pointer"
                            >
                                ✕
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </DefaultScreen>
    )
}

export default VidImagens
