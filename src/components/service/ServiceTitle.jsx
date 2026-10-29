const categories = [
    "Toilet Cleaning",
    "Stay Hygienic",
    "News",
    "Cleaning Floor",
    "Cleaning Kitchen",
    "Wash Home",
];

const discountShapes = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png",
    "8.png",
    "5.png",
];

export default function ServiceSidebar() {
    return (
        <div className="col-lg-4 main-service-area blog-side-bar">
            <div className="service-sidebar">

                {/* Search */}
                <form className="search-form">
                    <div className="form-group">

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search"
                        />

                        <button
                            type="submit"
                            className="btn btn-primary"
                        >
                            <i className="icofont-search-1"></i>
                        </button>

                    </div>
                </form>

                {/* Categories */}
                <div className="service-list">
                    <p>Categories</p>

                    <ul>
                        {categories.map((category, index) => (
                            <li key={index}>
                                <a href="/blog-details">
                                    {category}

                                    <i className="icofont-rounded-right"></i>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Discount */}
                <div className="discount-text">

                    <h1>
                        Get <span>15% Discount</span> on your first Service
                    </h1>

                    <div className="theme-button">
                        <a
                            href="/contact"
                            className="default-btn"
                        >
                            Book Now
                        </a>
                    </div>

                    <div className="discount-shapes">
                        {discountShapes.map((shape, index) => (
                            <img
                                key={index}
                                src={`/assets/img/counter/${shape}`}
                                alt="shape"
                            />
                        ))}
                    </div>

                </div>

            </div>
        </div>
    );
} 