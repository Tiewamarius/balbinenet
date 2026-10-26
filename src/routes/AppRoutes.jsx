import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { AuthProvider } from "../contexts/AuthContext";

import MainLayout from "../Layouts/MainLayout";
import AuthLayout from "../Layouts/AuthLayout";

import Home from "../pages/public/Home";
import Services from "../pages/public/Services";
import Formules from "../pages/public/Formules";
import Contact from "../pages/public/Contact";
import Login from "../pages/auth/Login";
import HomeUser from "../pages/auth/compte_user/home";
function AccountPlaceholder() {
  return (
    <section className="public-section">
      <h1>Votre compte</h1>
      <p>La page du compte sera développée après la connexion à l'API.</p>
    </section>
  );
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

          {/* Destination provisoire après connexion */}
          <Route path="/compte" element={<AccountPlaceholder />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </AuthProvider>
  );
}
