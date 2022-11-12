import Instituicao from './pages/admin/instituicao/instituicao'
import InstituicaoUser from './pages/admin/instituicao_user/page'
import Aplication from './pages/admin/admin_aplicacao/admin_aplicacao';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/admim'element={<Instituicao />} />
          <Route path='/admim-user'element={<InstituicaoUser/>} />
          <Route path='/admim-aplication'element={<Aplication/>} />
        </Routes>
      </BrowserRouter>    
  )
}

export default App
