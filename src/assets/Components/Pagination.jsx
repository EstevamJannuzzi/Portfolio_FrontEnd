import React from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

function Pagination({ currentPage, totalPages, onPageChange }) {
    if (totalPages <= 1) return null

    const firstVisiblePage = Math.min(
        Math.max(currentPage - 1, 1),
        Math.max(totalPages - 2, 1)
    )
    const visiblePages = Array.from(
        { length: Math.min(totalPages, 3) },
        (_, index) => firstVisiblePage + index
    )

    return (
        <nav
            className="mx-auto mb-10 flex max-w-[90vw] justify-center gap-2"
            aria-label="Paginação das imagens"
        >
            <button
                type="button"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Página anterior"
                className="flex min-w-10 items-center justify-center rounded-lg bg-primary/35 px-2 py-2 text-light-gray transition-colors hover:bg-light-blue disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
            >
                <MdChevronLeft size={24} />
            </button>

            {visiblePages.map((page) => {
                const isCurrentPage = page === currentPage

                return (
                    <button
                        key={page}
                        type="button"
                        onClick={() => onPageChange(page)}
                        aria-label={`Ir para a página ${page}`}
                        aria-current={isCurrentPage ? 'page' : undefined}
                        className={`min-w-10 rounded-lg px-3 py-2 font-text transition-colors cursor-pointer ${isCurrentPage
                                ? 'bg-light-blue text-white'
                                : 'bg-primary/35 text-light-gray hover:bg-light-blue'
                            }`}
                    >
                        {page}
                    </button>
                )
            })}

            <button
                type="button"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Próxima página"
                className="flex min-w-10 items-center justify-center rounded-lg bg-primary/35 px-2 py-2 text-light-gray transition-colors hover:bg-light-blue disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
            >
                <MdChevronRight size={24} />
            </button>
        </nav>
    )
}

export default Pagination
