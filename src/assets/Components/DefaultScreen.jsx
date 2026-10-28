import React from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import ScrollToTop from './ScrollToTop.jsx'

const DefaultScreen = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[linear-gradient(65deg,var(--color-secondary),var(--color-primary))] transition-colors">
      <Header />

      <main className="mb-30 flex-grow overflow-x-clip pt-[72px] sm:mb-24 lg:mb-24 xl:mb-20">
        <div className="container mx-auto pt-8 sm:pt-10 xl:pt-16">
          {children}
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default DefaultScreen
