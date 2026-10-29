import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

/*
|--------------------------------------------------------------------------
| Médias disponibles
|--------------------------------------------------------------------------
| type : image ou video
| src  : chemin depuis le dossier public
|--------------------------------------------------------------------------
*/

const media = [
    { type: "image", src: "/assets/img/blog/2.png" },
    { type: "image", src: "/assets/img/blog/2.png" },
    { type: "image", src: "/assets/img/blog/2.png" },
    { type: "video", src: "/assets/Hero_Accueil/hero-bg.mp4" },
    { type: "video", src: "/assets/Hero_Accueil/hero-bg.mp4" },
];

const VIDEO_POSTER = "/img/Hero-Gallery/Accueil/1.jpg";

/*
|--------------------------------------------------------------------------
| Textes des slides
|--------------------------------------------------------------------------
*/

const slidesContent = [
    {
        title: "Donnez de l'éclat et de la pureté à vos espaces",
        description:
            "BALBINE.NET transforme vos espaces de vie et de travail en lieux sains.",
    },
    {
        title: "Un environnement propre et agréable",
        description:
            "Nous prenons soin de vos espaces pour vous offrir propreté, confort et sérénité.",
    },
    {
        title: "La propreté au cœur de vos espaces",
        description:
            "Découvrez des solutions adaptées à vos besoins de nettoyage.",
    },
];

/*
|--------------------------------------------------------------------------
| Mélange aléatoire
|--------------------------------------------------------------------------
*/

function shuffleArray(array) {
    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
}

const IMAGE_DURATION = 8000;

export default function Homesection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Références des vidéos, une par slide
    const videoRefs = useRef([]);

    /* Mélange les médias une seule fois au montage */
    const randomizedMedia = useMemo(() => shuffleArray(media), []);

    /* Création des slides : un slide par média, textes réutilisés */
    const slides = useMemo(
        () =>
            randomizedMedia.map((mediaItem, index) => ({
                id: index + 1,
                ...slidesContent[index % slidesContent.length],
                media: mediaItem,
            })),
        [randomizedMedia]
    );

    const activeSlide = slides[activeIndex];
    const isVideoSlide = activeSlide?.media.type === "video";

    /*
    |--------------------------------------------------------------------------
    | Navigation
    |--------------------------------------------------------------------------
    */

    const nextSlide = useCallback(() => {
        setActiveIndex((current) => (current + 1) % slides.length);
    }, [slides.length]);

    const previousSlide = () => {
        setActiveIndex(
            (current) => (current - 1 + slides.length) % slides.length
        );
    };

    const goToSlide = (index) => {
        setActiveIndex(index);
    };

    /*
    |--------------------------------------------------------------------------
    | Défilement automatique des images
    |--------------------------------------------------------------------------
    | Image : 8 secondes (en pause au survol).
    | Vidéo : pas de minuterie, on attend la fin de la lecture.
    |--------------------------------------------------------------------------
    */

    useEffect(() => {
        if (isPaused || isVideoSlide) return undefined;

        const timer = window.setTimeout(nextSlide, IMAGE_DURATION);

        return () => window.clearTimeout(timer);
    }, [activeIndex, isPaused, isVideoSlide, nextSlide]);

    /*
    |--------------------------------------------------------------------------
    | Lecture des vidéos
    |--------------------------------------------------------------------------
    | La vidéo active repart du début et se lance automatiquement.
    | Les autres restent en pause. Le survol ne coupe pas la vidéo.
    |--------------------------------------------------------------------------
    */

    useEffect(() => {
        videoRefs.current.forEach((video, index) => {
            if (!video) return;

            if (index === activeIndex) {
                // Obligatoire pour l'autoplay : forcé en propriété DOM
                video.muted = true;
                video.currentTime = 0;

                const playPromise = video.play();

                if (playPromise !== undefined) {
                    playPromise.catch((error) => {
                        console.warn("[Hero] Lecture vidéo impossible :", error);
                        nextSlide();
                    });
                }
            } else {
                video.pause();
            }
        });
    }, [activeIndex, nextSlide]);

    /* Fin ou erreur de vidéo : passer au slide suivant */
    const handleVideoDone = (index) => {
        if (index === activeIndex) {
            nextSlide();
        }
    };

    return (
        <section
            className="home-section hero-slider"
            aria-label="Présentation"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                    setIsPaused(false);
                }
            }}
        >
            <div className="home-slider-area">
                {slides.map((slide, index) => {
                    const isActive = index === activeIndex;

                    return (
                        <div
                            key={slide.id}
                            className={`home-slider-item ${
                                isActive ? "active" : ""
                            }`}
                            aria-hidden={!isActive}
                        >
                            {/* IMAGE */}
                            {slide.media.type === "image" && (
                                <img
                                    src={slide.media.src}
                                    alt=""
                                    className="hero-media"
                                    loading={isActive ? "eager" : "lazy"}
                                    fetchPriority={isActive ? "high" : "auto"}
                                    decoding="async"
                                />
                            )}

                            {/* VIDÉO */}
                            {slide.media.type === "video" && (
                                <video
                                    ref={(element) => {
                                        videoRefs.current[index] = element;
                                    }}
                                    className="hero-media"
                                    src={slide.media.src}
                                    muted
                                    playsInline
                                    preload="metadata"
                                    poster={VIDEO_POSTER}
                                    onEnded={() => handleVideoDone(index)}
                                    onError={() => {
                                        console.warn(
                                            "[Hero] Vidéo introuvable ou illisible :",
                                            slide.media.src
                                        );
                                        handleVideoDone(index);
                                    }}
                                />
                            )}

                            {/* CONTENU */}
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="container">
                                        <div className="home-text">
                                            <h1>{slide.title}</h1>

                                            <p>{slide.description}</p>

                                            <div className="theme-button">
                                                <Link
                                                    to="/about"
                                                    className="default-btn active-btn"
                                                    tabIndex={isActive ? 0 : -1}
                                                >
                                                    Know More
                                                </Link>

                                                <Link
                                                    to="/contact"
                                                    className="default-btn"
                                                    tabIndex={isActive ? 0 : -1}
                                                >
                                                    Get Started
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}

                {/* FLÈCHE PRÉCÉDENTE */}
                <button
                    type="button"
                    className="hero-slider-arrow hero-slider-prev"
                    onClick={previousSlide}
                    aria-label="Diapositive précédente"
                >
                    &#10094;
                </button>

                {/* FLÈCHE SUIVANTE */}
                <button
                    type="button"
                    className="hero-slider-arrow hero-slider-next"
                    onClick={nextSlide}
                    aria-label="Diapositive suivante"
                >
                    &#10095;
                </button>

                {/* INDICATEURS */}
                <div
                    className="hero-slider-dots"
                    aria-label="Choisir une diapositive"
                >
                    {slides.map((slide, index) => (
                        <button
                            key={slide.id}
                            type="button"
                            className={`hero-slider-dot ${
                                index === activeIndex ? "active" : ""
                            }`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Afficher la diapositive ${index + 1}`}
                            aria-current={
                                index === activeIndex ? "true" : undefined
                            }
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}