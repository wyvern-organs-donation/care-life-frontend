import Admin from './pages/admin/Admin';
import AdminUser from './pages/admin/AdminUser';
import AdminApplication from './pages/admin/AdminApplication';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SecondForm from './form/SecondForm';

import './App.css';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/'element={<SecondForm />} />
          <Route path='/admin'element={<Admin />} />
          <Route path='/admin-user'element={<AdminUser/>} />
          <Route path='/admin-application'element={<AdminApplication/>} />
        </Routes>
      </BrowserRouter>    
  )
}

export default App;
