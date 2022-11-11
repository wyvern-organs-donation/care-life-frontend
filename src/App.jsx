import Instituicao from './pages/admin/instituicao/instituicao'
import InstituicaoUser from './pages/admin/instituicao_user/page'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <>
    Colocar aqui os components da homePage
    <BrowserRouter>
    
    <Routes>
      <Route path='/admim'element={<Instituicao />} />
      <Route path='/admim-user'element={<InstituicaoUser/>} />
    </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App
