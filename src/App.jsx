import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/user-register";
import DonorRegister from "./pages/donor-register";
import "./pages/login/index";
import "./style/global.css";

export default function App() {
  return (
    <div className="container-auth">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/donor-register" element={<DonorRegister />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
