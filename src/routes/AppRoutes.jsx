
import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";

import { AuthProvider, useAuth } from "../contexts/AuthContext";

import MainLayout from "../Layouts/MainLayout";
import AuthLayout from "../Layouts/AuthLayout";

import Home from "../pages/public/Home";
import Services from "../pages/public/Services";
import Formules from "../pages/public/Formules";
import Contact from "../pages/public/Contact";
import Login from "../pages/auth/Login";
import HomeUser from "../pages/auth/compte_user/home";

function ProtectedRoute() {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location }}
      />
    );
  }

  return <Outlet />;
}

export default function AppRoutes() {
  return (
    <AuthProvider>
      <Routes>
        {/* Pages publiques */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/formules" element={<Formules />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Authentification */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Espace client protégé */}
        <Route element={<ProtectedRoute />}>
          <Route path="/compte" element={<HomeUser />} />
        </Route>

        {/* Route inconnue */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  );
}
