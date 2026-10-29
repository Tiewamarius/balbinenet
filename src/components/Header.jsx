
import "../assets/css/header.css";

import {
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
    FaClock,
    FaLocationDot,
    FaPhone,
    FaWhatsapp
} from "react-icons/fa6";

export default function Header() {
    return (
        <>
            {/* Header Section Start */}
            <div className="header-section">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Informations de contact */}
                        <div className="col-lg-8 col-md-12">
                            <div className="header-widget">
                                <ul>
                                    <li>
                                        <FaClock className="header-icon" />
                                        <span>
                                            Lun - Dim : 09H:00 - 19H:00
                                        </span>
                                    </li>

                                    <li>
                                        <FaLocationDot className="header-icon" />
                                        <span>
                                            1725 Rue Lambert Feh-Kesse, Bingerville
                                        </span>
                                    </li>

                                    <li>
                                        <FaPhone className="header-icon" />
                                        <a href="tel:+225 07 09 01 99 99">
                                            +225 07 09 01 99 99
                                        </a>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>

                        {/* Réseaux sociaux */}
                        <div className="col-lg-4 col-md-12">
                            <div className="header-social text-end">
                                <ul>
                                    <li>
                                        <a
                                            href="https://www.facebook.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Facebook"
                                        >
                                            <FaFacebookF />
                                        </a>
                                    </li>

                                    {/* <li>
                                        <a
                                            href="https://x.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="X (Twitter)"
                                        >
                                            <FaXTwitter />
                                        </a>
                                    </li> */}

                                    <li>
                                        <a
                                            href="https://www.linkedin.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="LinkedIn"
                                        >
                                            <FaLinkedinIn />
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="https://www.instagram.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Instagram"
                                        >
                                            <FaInstagram />
                                        </a>
                                    </li><li>
                                        <a
                                            href="https://www.instagram.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Instagram"
                                        >
                                            <FaWhatsapp />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Header Section End */}
        </>
    );
}