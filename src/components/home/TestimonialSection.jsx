import { useEffect, useState } from "react";

const testimonials = [
    {
        image: "1.png",
        name: "Stepheny Mc.man",
        role: "Co-worker of 3S",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do is ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    },
    {
        image: "2.png",
        name: "Jackson",
        role: "Graphics Designer of 3S",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do is ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    },
    {
        image: "1.png",
        name: "Amelia",
        role: "Web Developer of 3S",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do is ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    },
    {
        image: "2.png",
        name: "Stepheny Mc.man",
        role: "Co-worker of 3S",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do is ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    },
    {
        image: "1.png",
        name: "Jahan",
        role: "Co-worker of 3S",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do is ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    },
    {
        image: "2.png",
        name: "Amelia",
        role: "SEO Expert of 3S",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do is ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    },
];

export default function TestimonialSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    // Défilement automatique
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="testimonial-section testimonial-bg ptb-100">
            <div className="testimonial-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 offset-lg-0 col-md-10 offset-md-1 col-sm-10 offset-sm-1">

                            <div className="row">
                                <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">

                                    {/* Images */}
                                    <div className="testimonial-image-slider slider-nav text-center">

                                        <div className="sin-testiImage">

                                            <img
                                                src={`/assets/img/testimonial/${testimonials[activeIndex].image}`}
                                                alt={`${testimonials[activeIndex].name} testimonial`}
                                                loading="lazy"
                                            />

                                        </div>

                                    </div>

                                </div>
                            </div>

                            {/* Texte */}
                            <div className="testimonial-text-slider slider-for text-center">

                                <div className="sin-testiText">

                                    <h2>
                                        {testimonials[activeIndex].name}
                                    </h2>

                                    <span>
                                        {testimonials[activeIndex].role}
                                    </span>

                                    <p>
                                        {testimonials[activeIndex].text}
                                    </p>

                                </div>

                            </div>

                            {/* Navigation */}
                            <div className="testimonial-dots text-center">

                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        className={
                                            index === activeIndex
                                                ? "active"
                                                : ""
                                        }
                                        onClick={() =>
                                            setActiveIndex(index)
                                        }
                                        aria-label={`Afficher le témoignage ${index + 1}`}
                                    />
                                ))}

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 