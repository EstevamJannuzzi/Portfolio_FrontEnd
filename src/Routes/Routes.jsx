import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../Pages/home.jsx'
import Videos from '../Pages/videos.jsx'
import Imagens from '../Pages/imagens.jsx'
import Websites from '../Pages/websites.jsx'
import Canais from '../Pages/canais.jsx'
import Programacao from '../Pages/programacao.jsx'
import Curriculo from '../Pages/curriculo.jsx'
import Contatos from '../Pages/contatos.jsx'
import NotFound from '../Pages/404.jsx'

const AppRoutes = () => {
  return (
    <Router basename={import.meta.env.BASE_URL.replace(/\/$/, '') || '/'}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/imagens" element={<Imagens />} />
        <Route path="/websites" element={<Websites />} />
        <Route path="/canais" element={<Canais />} />
        <Route path="/programacao" element={<Programacao />} />
        <Route path="/curriculo" element={<Curriculo />} />
        <Route path="/contatos" element={<Contatos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
