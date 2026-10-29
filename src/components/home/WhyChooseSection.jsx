import { useState } from "react";

const reasons = [
    {
        title: "Expert Cleaners",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    },
    {
        title: "Latest Equipment",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    },
    {
        title: "Clean & Fast Service",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    },
    {
        title: "Budget Oriented",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    },
];

export default function WhyChooseSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [phone, setPhone] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        // Branchez ici votre API ou votre service de rappel.
    }

    return (
        <section className="why-choose-section why-choose-bg">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 why-choose-img" />

                    <div className="col-lg-5 offset-lg-6 offset-md-0">
                        <div className="why-choose-text">
                            <div className="section-head">
                                <h2>Why Choose Us</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>

                        <div className="why-choose-accordian">
                            <div className="accordion" id="accordionExample">
                                {reasons.map((reason, index) => {
                                    const isOpen = activeIndex === index;
                                    const headingId = `heading-${index}`;
                                    const panelId = `collapse-${index}`;

                                    return (
                                        <div className="card" key={reason.title}>
                                            <div className="card-header" id={headingId}>
                                                <h2 className="mb-0">
                                                    <button
                                                        type="button"
                                                        className={`btn ${isOpen ? "" : "collapsed"}`}
                                                        aria-expanded={isOpen}
                                                        aria-controls={panelId}
                                                        onClick={() =>
                                                            setActiveIndex(isOpen ? -1 : index)
                                                        }
                                                    >
                                                        {reason.title}
                                                    </button>
                                                </h2>
                                            </div>

                                            <div
                                                id={panelId}
                                                className={`collapse ${isOpen ? "show" : ""}`}
                                                aria-labelledby={headingId}
                                            >
                                                <div className="card-body">{reason.body}</div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="why-choose-contact">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <input
                                            type="tel"
                                            name="phone"
                                            className="form-control"
                                            placeholder="Your Number"
                                            value={phone}
                                            onChange={(event) => setPhone(event.target.value)}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        Request A Call
                                    </button>
                                </form>
                                <p>Get a free call for service</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="why-choose-shape">
                    <img src="/assets/img/why-choose/shape-1.png" alt="" loading="lazy" />
                </div>
            </div>
        </section>
    );
}
