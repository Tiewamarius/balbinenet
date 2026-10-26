import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function HomeUser() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <>
       
    </>
  );
}