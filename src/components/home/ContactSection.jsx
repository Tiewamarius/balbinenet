import { useState } from "react";

export default function ContactSection() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;
        setForm((current) => ({ ...current, [name]: value }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        // Ce formulaire est prêt côté interface, mais doit être relié à une API.
        setSubmitted(true);
    }

    return (
        <section className="contact-section">
            <div className="container">
                <div className="contact-area">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="contact-img">
                                <img
                                    src="/assets/img/contact-img.png"
                                    alt="Contact"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="contact-text">
                                <div className="section-head">
                                    <h2>We Love to <span>Hear from You</span></h2>
                                    <p>Feel free and share with us. We will get you</p>
                                </div>

                                <div className="contact-form">
                                    <form id="contactForm" onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-12 col-sm-6">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        className="form-control"
                                                        required
                                                        placeholder="Your Name"
                                                        value={form.name}
                                                        onChange={handleChange}
                                                    />
                                                    <div className="help-block with-errors" />
                                                </div>
                                            </div>

                                            <div className="col-md-12 col-sm-6">
                                                <div className="form-group">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        className="form-control"
                                                        required
                                                        placeholder="Your Email"
                                                        value={form.email}
                                                        onChange={handleChange}
                                                    />
                                                    <div className="help-block with-errors" />
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <textarea
                                                        name="message"
                                                        className="form-control"
                                                        cols="30"
                                                        rows="5"
                                                        required
                                                        placeholder="Your Message"
                                                        value={form.message}
                                                        onChange={handleChange}
                                                    />
                                                    <div className="help-block with-errors" />
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12">
                                                <button type="submit" className="default-btn page-btn">
                                                    Send Message
                                                </button>
                                                {submitted && (
                                                    <p role="status">
                                                        Formulaire rempli. L'envoi doit encore être relié au serveur.
                                                    </p>
                                                )}
                                                <div className="clearfix" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
