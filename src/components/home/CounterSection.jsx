import { Link } from "react-router-dom";

const counters = [
    { value: "1", suffix: "K", label: "Job Done" },
    { value: "989", suffix: "", label: "Happy Clients" },
    { value: "45", suffix: "", label: "Experts" },
    { value: "12", suffix: "", label: "Years of Experience" },
];

const shapes = [
    "1.png", "2.png", "3.png", "4.png", "5.png", "6.png",
    "7.png", "1.png", "8.png", "4.png", "shape-1.png", "shape-1.png",
];

export default function CounterSection() {
    return (
        <section className="counter-section pt-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="offer-text">
                            <h2>Get <span>15% Discount</span> on your first Service</h2>
                            <div className="theme-button">
                                <Link to="/pricing" className="default-btn">Book Now</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="counter-area">
                            <div className="row">
                                {counters.map((counter, index) => (
                                    <div
                                        className={`col-lg-5 col-md-3 col-6 ${index % 2 === 0 ? "offset-lg-1" : ""}`}
                                        key={counter.label}
                                    >
                                        <div className="counter-text">
                                            <h2>
                                                <span className="counter">{counter.value}</span>
                                                {counter.suffix}
                                            </h2>
                                            <p>{counter.label}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="counter-shape">
                    {shapes.map((shape, index) => (
                        <img
                            key={`${shape}-${index}`}
                            src={`/assets/img/counter/${shape}`}
                            alt=""
                            loading="lazy"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
