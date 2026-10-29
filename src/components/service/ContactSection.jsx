import { useState } from "react";

export default function ContactSection() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Contact form:", form);
    };

    return (
        <div className="contact-section">
            <div className="container">

                <div className="contact-area">
                    <div className="row align-items-center">

                        <div className="col-lg-6 col-md-6">
                            <div className="contact-img">

                                <img
                                    src="/assets/img/contact-img.png"
                                    alt="contact image"
                                />

                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">

                            <div className="section-head">
                                <h2>
                                    We Love to <span>Hear from You</span>
                                </h2>

                                <p>
                                    Feel free and share it with us.
                                    We will get you
                                </p>
                            </div>

                            <div className="contact-form">

                                <form
                                    id="contactForm"
                                    onSubmit={handleSubmit}
                                    noValidate
                                >

                                    <div className="row">

                                        <div className="col-md-12 col-sm-6">
                                            <div className="form-group">

                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    className="form-control"
                                                    required
                                                    value={form.name}
                                                    onChange={handleChange}
                                                    placeholder="Your Name"
                                                />

                                                <div className="help-block with-errors"></div>

                                            </div>
                                        </div>

                                        <div className="col-md-12 col-sm-6">
                                            <div className="form-group">

                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    className="form-control"
                                                    required
                                                    value={form.email}
                                                    onChange={handleChange}
                                                    placeholder="Your Email"
                                                />

                                                <div className="help-block with-errors"></div>

                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">

                                                <textarea
                                                    name="message"
                                                    className="form-control"
                                                    id="message"
                                                    cols="30"
                                                    rows="5"
                                                    required
                                                    value={form.message}
                                                    onChange={handleChange}
                                                    placeholder="Your Message"
                                                ></textarea>

                                                <div className="help-block with-errors"></div>

                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">

                                            <button
                                                type="submit"
                                                className="default-btn page-btn"
                                            >
                                                Send Message
                                            </button>

                                            <div
                                                id="msgSubmit"
                                                className="h3 text-center hidden"
                                            ></div>

                                            <div className="clearfix"></div>

                                        </div>

                                    </div>

                                </form>

                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
} 