
import { useAuth } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function HomeUser() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login", { replace: true });
  }

  return (
    <main className="client-dashboard">
      <h1>Mon compte Balbine.net</h1>

      <p>
        Bienvenue
        {user?.name ? `, ${user.name}` : ""}
        dans votre espace client.
      </p>

      <button type="button" onClick={handleLogout}>
        Se déconnecter
      </button>
    </main>
  );
}
