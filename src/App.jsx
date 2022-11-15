import Admin from './pages/admin/Admin';
import AdminUser from './pages/admin/AdminUser';
import AdminApplication from './pages/admin/AdminApplication';
import Login from "./pages/login";
import Register from "./pages/register/user-register";
import DonorRegister from "./pages/register/donor-register";
import ConfirmRegister from "./pages/register/confirm-register";
import "./pages/login/index";
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
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/donor-register" element={<DonorRegister />}></Route>
          <Route path="/confirm-register" element={<ConfirmRegister />}></Route>
        </Routes>
      </BrowserRouter>    
  )
}

export default App;