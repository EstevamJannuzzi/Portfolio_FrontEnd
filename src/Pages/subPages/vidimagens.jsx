import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md'
import Iframe from '../../assets/Components/Iframe.jsx'
import Pagination from '../../assets/Components/Pagination.jsx'
import Title from '../../assets/Components/Title.jsx'
import videos from '../../assets/Data/videos.js'
import images from '../../assets/Data/imagens.js'

const VidImagens = () => {
    const [selectedIndex, setSelectedIndex] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const [pageDirection, setPageDirection] = useState(1)
    const [imageDirection, setImageDirection] = useState(1)
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
        setZoomPosition({ x: 50, y: 50 })
    }, [selectedIndex])

    const nextImage = (event) => {
        event.stopPropagation()
        setImageDirection(1)
        setSelectedIndex((previous) => (previous + 1) % images.length)
    }

    const prevImage = (event) => {
        event.stopPropagation()
        setImageDirection(-1)
        setSelectedIndex((previous) => (previous - 1 + images.length) % images.length)
    }

    const changePage = (page) => {
        setPageDirection(page > currentPage ? 1 : -1)
        setCurrentPage(page)
    }

    return (
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
                        className="mt-6 flex flex-col items-center justify-center gap-2 text-center"
                    >
                        <Title
                            text="Imagens"
                            size="text-[28px] sm:text-[32px] lg:text-[36px] xl:text-[44px]"
                        />
                    </div>

                    <div className="relative mt-8 mb-10 grid w-full items-center justify-items-center overflow-hidden">
                        <AnimatePresence initial={false} custom={pageDirection}>
                            <motion.div
                                key={currentPage}
                                custom={pageDirection}
                                variants={{
                                    enter: (direction) => ({
                                        x: direction * 80,
                                        opacity: 0,
                                    }),
                                    center: { x: 0, opacity: 1 },
                                    exit: (direction) => ({
                                        x: direction * -80,
                                        opacity: 0,
                                    }),
                                }}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                className="col-start-1 row-start-1 grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-6"
                            >
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
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={changePage}
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
                                className={`relative grid max-h-[90vh] max-w-[90vw] overflow-hidden rounded-2xl shadow-2xl ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
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
                                <AnimatePresence initial={false} custom={imageDirection}>
                                    <motion.div
                                        key={selectedIndex}
                                        custom={imageDirection}
                                        variants={{
                                            enter: (direction) => ({
                                                x: direction * 80,
                                                opacity: 0,
                                            }),
                                            center: { x: 0, opacity: 1 },
                                            exit: (direction) => ({
                                                x: direction * -80,
                                                opacity: 0,
                                            }),
                                        }}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        className="col-start-1 row-start-1"
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
                                    </motion.div>
                                </AnimatePresence>
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
    )
}

export default VidImagens
