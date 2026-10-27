import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../Pages/home.jsx'
import VidImagens from '../Pages/vid_imagens.jsx'
import WebCanais from '../Pages/web_canais.jsx'
import Programacao from '../Pages/programacao.jsx'
import Curriculo from '../Pages/curriculo.jsx'
import Contatos from '../Pages/contatos.jsx'
import NotFound from '../Pages/notfound.jsx'
import { BASE_URL } from '../utils/paths.js'

const AppRoutes = () => {
  return (
    <Router basename={BASE_URL.replace(/\/$/, '') || '/'}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vidimagens" element={<VidImagens />} />
        <Route path="/webcanais" element={<WebCanais />} />
        <Route path="/programacao" element={<Programacao />} />
        <Route path="/curriculo" element={<Curriculo />} />
        <Route path="/contatos" element={<Contatos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
