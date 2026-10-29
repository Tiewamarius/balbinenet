const services = [
    {
        icon: "flaticon-medal",
        title: "Top Rated Service",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contract.",
    },
    {
        icon: "flaticon-credit-card",
        title: "Fastest Service",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contract.",
    },
    {
        icon: "flaticon-clean-house",
        title: "House Cleaning",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contract.",
    },
    {
        icon: "flaticon-spray",
        title: "Professional Cleaning",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contract.",
    },
    {
        icon: "flaticon-wiper",
        title: "Office Cleaning",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contract.",
    },
    {
        icon: "flaticon-clean-house",
        title: "Low-Cost Service",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contract.",
    },
];

const shapes = [
    "service-pattern-6.png",
    "service-pattern-7.png",
    "service-pattern-8.png",
    "service-pattern-9.png",
    "service-pattern-10.png",
];

export default function ServiceList() {
    return (
        <div className="row">
            {services.map((service, index) => (
                <div className="col-md-6" key={index}>
                    <div className="service-item">

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

                        <div className="service-shape">
                            {shapes.map((shape, shapeIndex) => (
                                <img
                                    key={shapeIndex}
                                    src={`/assets/img/service/shapes/${shape}`}
                                    alt="shape"
                                />
                            ))}
                        </div>

                    </div>
                </div>
            ))}
        </div>
    );
} 