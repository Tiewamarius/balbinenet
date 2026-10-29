import React from "react";

export default function ServiceSection() {
    const services = [
        {
            icon: "flaticon-medal",
            title: "Top Rated Service",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc.",
        },
        {
            icon: "flaticon-credit-card",
            title: "Low Cost Service",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc.",
            active: true,
        },
        {
            icon: "flaticon-icon-1584892",
            title: "Fastest Service",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc.",
        },
        {
            icon: "flaticon-spray",
            title: "Professional Cleaning",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc.",
        },
        {
            icon: "flaticon-clean-house",
            title: "House Cleaning",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc.",
        },
        {
            icon: "flaticon-wiper",
            title: "Office Cleaning",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc.",
        },
    ];

    const shapes = Array.from({ length: 10 }, (_, index) => index + 1);

    return (
        <section className="service-section pt-100 pb-70">
            <div className="container">

                <div className="section-head text-center">
                    <h2>
                        Viscous Provided <span>Services</span>
                    </h2>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor contratc ut labore et dolore magna aliqua.
                    </p>
                </div>

                <div className="row">
                    {services.map((service, index) => (
                        <div
                            className="col-lg-4 col-md-6 col-sm-6"
                            key={index}
                        >
                            <div
                                className={`service-card ${
                                    service.active ? "active-service" : ""
                                }`}
                            >
                                <i className={service.icon}></i>

                                <h3>{service.title}</h3>

                                <p>{service.text}</p>

                                <div className="theme-button">
                                    <a
                                        href="/service-details"
                                        className="default-btn"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="service-shapes">
                    {shapes.map((shape) => (
                        <img
                            key={shape}
                            src={`/assets/img/service/shapes/${shape}.png`}
                            alt="shape"
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}