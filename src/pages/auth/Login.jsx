
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function Login() {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (isAuthenticated) {
    return (
      <main className="balbine-auth-page">
        <div className="auth-form-wrapper">
          <div className="auth-box">
            <h1>Vous êtes déjà connecté</h1>
            <button
              type="button"
              className="auth-submit"
              onClick={() => navigate("/compte", { replace: true })}
            >
              Accéder à mon compte
            </button>
          </div>
        </div>
      </main>
    );
  }

  async function handleLogin(event) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login({ email, password });

      const destination =
        location.state?.from?.pathname || "/compte";

      navigate(destination, { replace: true });
    } catch (err) {
      setError(
        err.message || "Une erreur est survenue lors de la connexion."
      );
    } finally {
      setLoading(false);
    }
  }

  function handleRegister(event) {
    event.preventDefault();
    setError(
      "L'inscription doit être reliée à son endpoint PHP avant de pouvoir créer un compte."
    );
  }

  return (
    <main className="balbine-auth-page">
      <div className="container-fluid auth-container">
        <div className="row auth-row">
          {/* PARTIE VISUELLE - GAUCHE */}
          <div className="col-lg-6 auth-visual-column">
            <div className="auth-visual">
              <div className="visual-circle visual-circle-one"></div>
              <div className="visual-circle visual-circle-two"></div>
              <div className="visual-dots"></div>

              <div className="visual-content">
                <div className="visual-badge">
                  <i className="fa-solid fa-sparkles"></i>
                  <span>NETTOYAGE PROFESSIONNEL</span>
                </div>

                <h2>
                  Un environnement <span>propre.</span>
                  {" "}Un service <span>professionnel.</span>
                </h2>

                <p>
                  BALBINE vous accompagne dans l'entretien,
                  le nettoyage et la propreté de vos espaces
                  professionnels et résidentiels.
                </p>

                <div className="service-list">
                  <div className="service-item">
                    <div className="service-icon">
                      <i className="fa-solid fa-building"></i>
                    </div>
                    <div>
                      <strong>Nettoyage professionnel</strong>
                      <span>Des espaces propres et impeccables.</span>
                    </div>
                  </div>

                  <div className="service-item">
                    <div className="service-icon">
                      <i className="fa-solid fa-leaf"></i>
                    </div>
                    <div>
                      <strong>Entretien des espaces</strong>
                      <span>Des solutions adaptées à vos besoins.</span>
                    </div>
                  </div>

                  <div className="service-item">
                    <div className="service-icon">
                      <i className="fa-solid fa-shield-heart"></i>
                    </div>
                    <div>
                      <strong>Qualité &amp; confiance</strong>
                      <span>
                        Un service pensé pour votre tranquillité.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="visual-bottom">
                  <span className="visual-line"></span>
                  <span>BALBINE.NET</span>
                </div>
              </div>
            </div>
          </div>

          {/* FORMULAIRE - DROITE */}
          <div className="col-lg-6 auth-form-column">
            <div className="auth-form-wrapper">
              {/* LOGO */}
              <div className="balbine-logo">
                <div className="balbine-logo-text">
                  <strong>
                    <Link to="/" className="logo">
                      <img
                        src="/logobalbine.png"
                        alt="Logo Balbine"
                        style={{
                          width: "190px",
                          maxWidth: "100%",
                          height: "auto",
                        }}
                      />
                    </Link>
                  </strong>
                </div>
              </div>

              <div className="auth-box">
                {/* TITRE */}
                <div className="auth-heading">
                  {mode === "login" ? (
                    <div className="auth-heading-login">
                      <span className="auth-eyebrow">ESPACE CLIENT</span>
                      <h1>Bienvenue</h1>
                      <p>
                        Connectez-vous à votre espace BALBINE.NET.
                      </p>
                    </div>
                  ) : (
                    <div className="auth-heading-register">
                      <span className="auth-eyebrow">NOUVEAU CLIENT</span>
                      <h1>Créer un compte</h1>
                      <p>
                        Rejoignez BALBINE.NET et gérez facilement
                        vos demandes de services.
                      </p>
                    </div>
                  )}
                </div>

                {/* MESSAGE */}
                {error && (
                  <div className="auth-alert" role="alert">
                    <i className="fa-solid fa-circle-exclamation"></i>
                    <span>{error}</span>
                  </div>
                )}

                {/* CONNEXION */}
                {mode === "login" && (
                  <form
                    id="loginForm"
                    className="auth-form login-form"
                    method="POST"
                    onSubmit={handleLogin}
                    noValidate
                  >
                    <div className="input-group-balbine">
                      <label htmlFor="loginEmail">Adresse e-mail</label>

                      <div className="input-container">
                        <i className="fa-regular fa-envelope"></i>
                        <input
                          type="email"
                          id="loginEmail"
                          name="email"
                          placeholder="votre@email.com"
                          autoComplete="email"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="input-group-balbine">
                      <div className="input-label-row">
                        <label htmlFor="loginPassword">Mot de passe</label>
                        <button
                          type="button"
                          className="forgot-password"
                          onClick={() =>
                            setError(
                              "La récupération du mot de passe n'est pas encore configurée."
                            )
                          }
                        >
                          Mot de passe oublié ?
                        </button>
                      </div>

                      <div className="input-container">
                        <i className="fa-solid fa-lock"></i>
                        <input
                          type={showPassword ? "text" : "password"}
                          id="loginPassword"
                          name="password"
                          placeholder="Votre mot de passe"
                          autoComplete="current-password"
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                          required
                        />

                        <button
                          type="button"
                          className="password-toggle"
                          aria-label={
                            showPassword
                              ? "Masquer le mot de passe"
                              : "Afficher le mot de passe"
                          }
                          onClick={() => setShowPassword((value) => !value)}
                        >
                          <i
                            className={
                              showPassword
                                ? "fa-regular fa-eye"
                                : "fa-regular fa-eye-slash"
                            }
                          ></i>
                        </button>
                      </div>
                    </div>

                    <div className="remember-row">
                      <label>
                        <input type="checkbox" id="rememberMe" />
                        <span>Se souvenir de moi</span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="auth-submit"
                      id="loginButton"
                      disabled={loading}
                    >
                      <span className="button-text">
                        <i className="fa-solid fa-arrow-right-to-bracket"></i>
                        {loading ? "Connexion en cours..." : "Se connecter"}
                      </span>

                      {loading && (
                        <span className="button-loader">
                          <i className="fa-solid fa-spinner fa-spin"></i>
                        </span>
                      )}
                    </button>
                  </form>
                )}

                {/* INSCRIPTION */}
                {mode === "register" && (
                  <form
                    id="registerForm"
                    className="auth-form register-form"
                    onSubmit={handleRegister}
                    noValidate
                  >
                    <div className="input-group-balbine">
                      <label htmlFor="registerName">Nom complet</label>
                      <div className="input-container">
                        <i className="fa-regular fa-user"></i>
                        <input
                          type="text"
                          id="registerName"
                          name="name"
                          placeholder="Votre nom complet"
                          autoComplete="name"
                          required
                        />
                      </div>
                    </div>

                    <div className="input-group-balbine">
                      <label htmlFor="registerEmail">Adresse e-mail</label>
                      <div className="input-container">
                        <i className="fa-regular fa-envelope"></i>
                        <input
                          type="email"
                          id="registerEmail"
                          name="email"
                          placeholder="votre@email.com"
                          autoComplete="email"
                          required
                        />
                      </div>
                    </div>

                    <div className="input-group-balbine">
                      <label htmlFor="registerPhone">Téléphone</label>
                      <div className="input-container">
                        <i className="fa-solid fa-phone"></i>
                        <input
                          type="tel"
                          id="registerPhone"
                          name="phone"
                          placeholder="+225 07 00 00 00 00"
                          autoComplete="tel"
                          required
                        />
                      </div>
                    </div>

                    <div className="input-group-balbine">
                      <label htmlFor="registerPassword">Mot de passe</label>
                      <div className="input-container">
                        <i className="fa-solid fa-lock"></i>
                        <input
                          type="password"
                          id="registerPassword"
                          name="password"
                          placeholder="Minimum 8 caractères"
                          autoComplete="new-password"
                          minLength={8}
                          required
                        />
                      </div>
                    </div>

                    <div className="input-group-balbine">
                      <label htmlFor="registerPasswordConfirmation">
                        Confirmer le mot de passe
                      </label>
                      <div className="input-container">
                        <i className="fa-solid fa-lock"></i>
                        <input
                          type="password"
                          id="registerPasswordConfirmation"
                          name="password_confirmation"
                          placeholder="Confirmez votre mot de passe"
                          autoComplete="new-password"
                          minLength={8}
                          required
                        />
                      </div>
                    </div>

                    <div className="terms-row">
                      <label>
                        <input type="checkbox" id="acceptTerms" required />
                        <span>
                          J'accepte les <a href="/conditions">conditions d'utilisation</a>
                        </span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="auth-submit"
                      id="registerButton"
                    >
                      <span className="button-text">
                        <i className="fa-solid fa-user-plus"></i>
                        Créer mon compte
                      </span>
                    </button>
                  </form>
                )}

                {/* BASCULEMENT */}
                <div className="auth-switch">
                  {mode === "login" ? (
                    <div className="switch-login">
                      <span>Vous n'avez pas encore de compte ?</span>
                      <button
                        type="button"
                        id="showRegister"
                        onClick={() => {
                          setError("");
                          setMode("register");
                        }}
                      >
                        Créer un compte
                      </button>
                    </div>
                  ) : (
                    <div id="registerSwitch" className="switch-register">
                      <span>Vous avez déjà un compte ?</span>
                      <button
                        type="button"
                        id="showLogin"
                        onClick={() => {
                          setError("");
                          setMode("login");
                        }}
                      >
                        Se connecter
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* FOOTER */}
              <div className="auth-footer">
                <span>2026 BALBINE.NET</span>
                <span className="footer-separator"></span>
                <span>Solutions professionnelles de nettoyage</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
