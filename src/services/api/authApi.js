const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL || ""
).replace(/\/+$/, "");

const LOGIN_ENDPOINT =
  import.meta.env.VITE_API_LOGIN_ENDPOINT || "/auth/login";

export async function loginRequest(credentials) {
  if (!API_BASE_URL) {
    throw new Error(
      "L'URL de l'API est absente. Vérifie VITE_API_BASE_URL dans .env."
    );
  }

  const endpoint = `${API_BASE_URL}/${LOGIN_ENDPOINT.replace(/^\/+/, "")}`;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(
      data.message || `Erreur de connexion : HTTP ${response.status}`
    );
  }

  return data;
}