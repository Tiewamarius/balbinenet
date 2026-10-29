
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();

    const services = [
        { label: t("footer.services.lowCost", "Low Cost"), path: "/services" },
        { label: t("footer.services.fast", "Fastest Service"), path: "/services" },
        { label: t("footer.services.professional", "Professional Cleaning"), path: "/services" },
        { label: t("footer.services.home", "Home Cleaning"), path: "/services" },
        { label: t("footer.services.office", "Office Cleaning"), path: "/services" },
    ];

    const quickLinks = [
        { label: t("footer.links.home", "Accueil"), path: "/" },
        { label: t("footer.links.about", "À propos"), path: "/about" },
        { label: t("footer.links.services", "Services"), path: "/services" },
        { label: t("footer.links.formulas", "Nos formules"), path: "/formules" },
        { label: t("footer.links.contact", "Contact"), path: "/contact" },
    ];

    return (
        <footer className="footer-area">
            <div className="container">
                <div className="row">
                    {/* Présentation et newsletter */}
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget">
                            <div className="logo">
                                <Link to="/" aria-label="Balbine.net - Accueil">
                                    <img
                                        src="/assets/img/logo.png"
                                        alt="Balbine.net"
                                    />
                                </Link>
                            </div>

                            <p>
                                {t(
                                    "footer.description",
                                    "Balbine.net vous accompagne avec des services de nettoyage adaptés à vos besoins."
                                )}
                            </p>

                            <div className="email">
                                <form
                                    className="newsletter-form"
                                    onSubmit={(event) => event.preventDefault()}
                                >
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder={t(
                                            "footer.emailPlaceholder",
                                            "Votre adresse e-mail"
                                        )}
                                        name="EMAIL"
                                        autoComplete="email"
                                        aria-label={t(
                                            "footer.emailPlaceholder",
                                            "Votre adresse e-mail"
                                        )}
                                        required
                                    />

                                    <button
                                        className="default-btn electronics-btn"
                                        type="submit"
                                        aria-label={t(
                                            "footer.subscribe",
                                            "S'inscrire à la newsletter"
                                        )}
                                    >
                                        <i className="icofont-location-arrow"></i>
                                    </button>

                                    <div
                                        className="form-result"
                                        aria-live="polite"
                                    ></div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget pl-40">
                            <h3>{t("footer.servicesTitle", "Services")}</h3>

                            <ul>
                                {services.map((service) => (
                                    <li key={service.label}>
                                        <i className="icofont-simple-right"></i>
                                        <Link to={service.path}>
                                            {service.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Liens rapides */}
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget pl-40">
                            <h3>{t("footer.quickLinksTitle", "Liens rapides")}</h3>

                            <ul>
                                {quickLinks.map((link) => (
                                    <li key={link.path}>
                                        <i className="icofont-simple-right"></i>
                                        <Link to={link.path}>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Coordonnées */}
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget">
                            <h3>{t("footer.findUsTitle", "Nous contacter")}</h3>

                            <p className="find-text">
                                {t(
                                    "footer.findUsDescription",
                                    "Contactez notre équipe pour toute demande d'information."
                                )}
                            </p>

                            <ul className="find-us">
                                <li>
                                    <i className="icofont-location-pin"></i>
                                    <span>
                                        {t(
                                            "footer.address",
                                            "Adresse à renseigner"
                                        )}
                                    </span>
                                </li>

                                <li>
                                    <i className="icofont-phone"></i>
                                    <a href="tel:+2250000000000">
                                        {t(
                                            "footer.phone",
                                            "Numéro à renseigner"
                                        )}
                                    </a>
                                </li>

                                <li>
                                    <i className="icofont-ui-message"></i>
                                    <a href="mailto:contact@balbine.net">
                                        {t(
                                            "footer.email",
                                            "contact@balbine.net"
                                        )}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pied de page inférieur */}
            <div className="bottom-footer">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="footer-social">
                                <ul>
                                    <li>
                                        <a
                                            href="https://www.facebook.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Facebook"
                                        >
                                            <i className="icofont-facebook"></i>
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="https://www.linkedin.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="LinkedIn"
                                        >
                                            <i className="icofont-linkedin"></i>
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="https://www.instagram.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Instagram"
                                        >
                                            <i className="icofont-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="copyright-text text-end">
                                <p>
                                    © {new Date().getFullYear()}{" "}
                                    {t(
                                        "footer.copyright",
                                        "Balbine.net. Tous droits réservés."
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
