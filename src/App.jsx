import Instituicao from './pages/admin/instituicao/instituicao'
import InstituicaoUser from './pages/admin/instituicao_user/page'
import Aplication from './pages/admin/admin_aplicacao/admin_aplicacao';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SecondForm from './form/SecondForm'

import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'element={<SecondForm />} />
          <Route path='/admim'element={<Instituicao />} />
          <Route path='/admim-user'element={<InstituicaoUser/>} />
          <Route path='/admim-aplication'element={<Aplication/>} />
        </Routes>
      </BrowserRouter>    
      </div>
  )
}

export default App
