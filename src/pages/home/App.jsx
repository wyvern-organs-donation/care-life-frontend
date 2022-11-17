import { Home } from './Components/home/Home'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        </BrowserRouter>
  )
}