
import { createContext, useContext, useState } from "react";
import { loginRequest } from "../services/api/authApi";

const AuthContext = createContext(null);

function readSession() {
  try {
    const saved = sessionStorage.getItem("balbinenet_session");
    return saved ? JSON.parse(saved) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [session, setSession] = useState(readSession);

  async function login(credentials) {
    const response = await loginRequest(credentials);

    const token =
      response.access_token ??
      response.token ??
      response.data?.access_token ??
      response.data?.token;

    const user =
      response.user ??
      response.client ??
      response.data?.user ??
      response.data?.client ??
      null;

    if (!token) {
      throw new Error(
        "Connexion reçue, mais aucun token reconnu dans la réponse de l’API."
      );
    }

    const newSession = { token, user };

    sessionStorage.setItem(
      "balbinenet_session",
      JSON.stringify(newSession)
    );

    setSession(newSession);

    return user;
  }

  function logout() {
    sessionStorage.removeItem("balbinenet_session");
    setSession(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user: session?.user ?? null,
        token: session?.token ?? null,
        isAuthenticated: Boolean(session?.token),
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth doit être utilisé à l’intérieur de AuthProvider."
    );
  }

  return context;
}
