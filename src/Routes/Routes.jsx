import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../Pages/home.jsx'
import NotFound from '../Pages/notfound.jsx'
import { BASE_URL } from '../utils/paths.js'

const AppRoutes = () => {
  return (
    <Router basename={BASE_URL.replace(/\/$/, '') || '/'}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programacao" element={<Home />} />
        <Route path="/webcanais" element={<Home />} />
        <Route path="/vidimagens" element={<Home />} />
        <Route path="/curriculo" element={<Home />} />
        <Route path="/contatos" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
