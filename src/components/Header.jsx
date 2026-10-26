export default function Header(){
    return <>
    
        {/* Header Section Start*/}
        <div className="header-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8 col-md-12">
                        <div className="header-widget">
                            <ul>
                                <li>
                                    <i className="icofont-clock-time"></i>
                                    Sun - Thu : 10:00AM - 06:00PM
                                </li>
                                <li>
                                    <i className="icofont-location-pin"></i>
                                    28/A Street, New York City
                                </li>
                                <li>
                                    <i className="icofont-phone"></i>
                                    <a href="tel:+880123456789">
                                        +88 0123 456 789
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="header-social text-end">
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank"><i className="icofont-facebook"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/" target="_blank"><i className="icofont-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" target="_blank"><i className="icofont-linkedin"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/" target="_blank"><i className="icofont-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>              
                </div>
            </div>
        </div>
        
        {/* Header Section End */}
    </>
}