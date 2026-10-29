import { Link } from "react-router-dom";

const plans = [
    { name: "Basic Plan", price: "60", hours: "5 Hours", frequency: "1 time in a week" },
    { name: "Standard Plan", price: "99", hours: "7 Hours", frequency: "2 time in a week", featured: true },
    { name: "Premium Plan", price: "159", hours: "10 Hours", frequency: "3 time in a week" },
];

const features = [
    "Fully Satisfaction",
    null,
    null,
    "Full Cleaning",
    "All Our Equipment",
];

export default function PricingSection() {
    return (
        <section className="pricing-section pb-70">
            <div className="container">
                <div className="section-head text-center">
                    <h2>Our <span>Pricing Plan</span></h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor contratc ut labore et dolore magna aliqua.
                    </p>
                </div>

                <div className="row">
                    {plans.map((plan) => (
                        <div className="col-lg-4 col-md-6 col-sm-6" key={plan.name}>
                            <div className={`price-card-area ${plan.featured ? "active-price" : ""}`}>
                                <div className="price-head-text">
                                    <h4>{plan.name}</h4>
                                    <h2>$<span>{plan.price}</span>/month</h2>
                                </div>

                                <div className="plan-features">
                                    <ul>
                                        <li><i className="icofont-check-circled" /> Fully Satisfaction</li>
                                        <li><i className="icofont-check-circled" /> {plan.hours}</li>
                                        <li><i className="icofont-check-circled" /> {plan.frequency}</li>
                                        <li><i className="icofont-check-circled" /> Full Cleaning</li>
                                        <li><i className="icofont-check-circled" /> All Our Equipment</li>
                                    </ul>
                                </div>

                                <div className="plan-btn">
                                    <Link to="/contact">Booking Now</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
