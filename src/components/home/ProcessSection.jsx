const steps = [
    {
        icon: "icofont-touch",
        title: "Choose Services",
        text: "Lorem Ipsum is simply dummied text of the printing and typesetting industry.",
        arrow: true,
    },
    {
        icon: "icofont-world",
        title: "Booking Online",
        text: "Lorem Ipsum is simply dummied text of the printing and typesetting industry.",
        arrow: true,
    },
    {
        icon: "icofont-recycle-alt",
        title: "Enjoy Cleaning",
        text: "Lorem Ipsum is simply dummied text of the printing and typesetting industry.",
        arrow: false,
    },
];

export default function ProcessSection() {
    return (
        <section className="process-section pb-70">
            <div className="container">
                <div className="row">
                    {steps.map((step, index) => (
                        <div
                            className={`col-md-4 col-sm-6 ${index === 2 ? "offset-sm-3 offset-md-0" : ""}`}
                            key={step.title}
                        >
                            <div className="process-card">
                                <i className={step.icon} aria-hidden="true" />
                                <h3>{step.title}</h3>
                                <p>{step.text}</p>
                                {step.arrow && (
                                    <img
                                        src="/assets/img/process-pattern-2.png"
                                        alt=""
                                        loading="lazy"
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
