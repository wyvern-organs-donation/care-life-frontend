import React, { useState, useEffect } from "react";
import Admin from "./pages/admin/Admin";
import AdminUser from "./pages/admin/AdminUser";
import AdminOrgan from "./pages/admin/AdminOrgan";
import AdminInstitution from "./pages/admin/AdminInstitution";
import User from "./pages/auth/user";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register/user-register";
import ConfirmRegister from "./pages/auth/register/confirm-register";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/home/components/Home";
import "./pages/auth/login";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  const ProtectedRoute = ({ isAllowed, redirectPath = "/", children }) => {
    if (!isAllowed) {
      return <Navigate to={redirectPath} replace />;
    }

    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Routes>
        <Route
          path="/admin"
          element={
            <ProtectedRoute
              redirectPath="/"
              isAllowed={!!user && user.user_types.name == "Administrador"}
            >
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-user"
          element={
            <ProtectedRoute
              redirectPath="/"
              isAllowed={!!user && user.user_types.name == "Administrador"}
            >
              <AdminUser />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-organ"
          element={
            <ProtectedRoute
              redirectPath="/"
              isAllowed={!!user && user.user_types.name == "Administrador"}
            >
              <AdminOrgan />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-institution"
          element={
            <ProtectedRoute
              redirectPath="/"
              isAllowed={!!user && user.user_types.name == "Administrador"}
            >
              <AdminInstitution />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user"
          element={
            <ProtectedRoute redirectPath="/" isAllowed={!!user}>
              <User />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/confirm-register" element={<ConfirmRegister />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
