import {
  createContext,
  useContext,
  useState,
} from "react";

import { loginRequest } from "../services/api/authApi";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  async function login(credentials) {
    const response = await loginRequest(credentials);

    const accessToken =
      response.access_token ??
      response.token ??
      response.data?.access_token ??
      response.data?.token;

    const authenticatedUser =
      response.user ?? response.data?.user ?? null;

    if (!accessToken) {
      throw new Error(
        "La réponse de l'API ne contient aucun token reconnu."
      );
    }

    setToken(accessToken);
    setUser(authenticatedUser);

    return authenticatedUser;
  }

  function logout() {
    setUser(null);
    setToken(null);
  }

  const value = {
    user,
    token,
    isAuthenticated: Boolean(token),
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth doit être utilisé à l'intérieur de AuthProvider."
    );
  }

  return context;
}