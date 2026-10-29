import ServiceTitle from "../../components/service/ServiceTitle";
import ServiceList from "../../components/service/ServiceList";
import ServiceSidebar from "../../components/service/ServiceSidebar";
import ContactSection from "../../components/service/ContactSection";

export default function Services() {
    return (
        <>
            {/* Service Title */}
            <div class="service-title service-title-bg">
                <div class="d-table">
                    <div class="d-table-cell">
                        <div class="container">
                            <div class="service-title-text">
                                <h2>Nos services</h2>
                                <ul>
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li>
                                        <i class="icofont-rounded-double-right"></i>
                                        Services
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Services */}
            <div className="main-service-area single-service-page pt-100">

                <div className="container">

                    <div className="row">

                        {/* Services list */}
                        <div className="col-lg-8">
                            <ServiceList />
                        </div>

                        {/* Sidebar */}
                        <ServiceSidebar />

                    </div>

                </div>

            </div>

            {/* Contact */}
            <ContactSection />
        </>
    );
} 