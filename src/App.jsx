import React, { useState, useEffect } from "react";
import Admin from './pages/admin/Admin';
import AdminUser from './pages/admin/AdminUser';
import AdminApplication from './pages/admin/AdminApplication';
import Login from "./pages/login";
import Register from "./pages/register/user-register";
import DonorRegister from "./pages/register/donor-register";
import ConfirmRegister from "./pages/register/confirm-register";
import "./pages/login/index";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SecondForm from './form/SecondForm';

import './App.css';

function App() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  const ProtectedRoute = ({
    isAllowed,
    redirectPath = '/',
    children,
  }) => {
    if (!isAllowed) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return children;
  };

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/'element={<SecondForm />} />
          <Route path='/admin'element={
            <ProtectedRoute
              redirectPath="/"
              isAllowed={
                !!user
              }
            >
              <Admin />
            </ProtectedRoute>
          } />
          <Route path='/admin-user'element={
            <ProtectedRoute
              redirectPath="/"
              isAllowed={!!user}
            >
              {console.log(!!user)}
              <AdminUser />
            </ProtectedRoute>
          } />
          <Route path='/admin-application'element={
            <ProtectedRoute
              redirectPath="/"
              isAllowed={
                !!user
              }
            >
              <AdminApplication />
            </ProtectedRoute>
          } />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/donor-register" element={<DonorRegister />}></Route>
          <Route path="/confirm-register" element={<ConfirmRegister />}></Route>
        </Routes>
      </BrowserRouter>    
  )
}

export default App;