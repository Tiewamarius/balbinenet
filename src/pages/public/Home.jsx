import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Homesection from "../../components/home/Homesection";
import ServiceSection from "../../components/home/Servicesection";
import WhyChooseSection from "../../components/home/WhyChooseSection";
import ProcessSection from "../../components/home/ProcessSection";
import PricingSection from "../../components/home/PricingSection";
import CounterSection from "../../components/home/CounterSection";
import TeamSection from "../../components/home/TeamSection";
import TestimonialSection from "../../components/home/TestimonialSection";
import BlogSection from "../../components/home/BlogSection";
import ContactSection from "../../components/home/ContactSection";

export default function HomeUser() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <>
      <Homesection />

      <ServiceSection />

      <WhyChooseSection />

      <ProcessSection />
      <PricingSection />

      {/* Section About */}

      <section class="about-style-two about-style-three pt-100 pb-70">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-lg-6 p-0">
              <div class="about-img">
                <img src="assets/img/about-two.png" alt="about image" />
              </div>
            </div>

            <div class="col-lg-6">
              <div class="about-text">
                <div class="section-head">
                  <h2>We have been doing projects since 2008.</h2>
                  <p>It is a long fact that a reader will be distracted by the readable content.</p>
                </div>

                <ul>
                  <li>
                    <i class="icofont-check-circled"></i>
                    100% Secured
                  </li>
                  <li>
                    <i class="icofont-check-circled"></i>
                    Fast &amp; Clean Service
                  </li>
                  <li>
                    <i class="icofont-check-circled"></i>
                    Well Disciplined
                  </li>
                  <li>
                    <i class="icofont-check-circled"></i>
                    24/7 Services
                  </li>
                  <li>
                    <i class="icofont-check-circled"></i>
                    Budget Oriented
                  </li>
                  <li>
                    <i class="icofont-check-circled"></i>
                    Online Payment
                  </li>
                </ul>

                <div class="theme-button">
                  <a href="about.html" class="default-btn">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* End section abour */}

      <CounterSection />

      <TeamSection />

      <TestimonialSection />

      <BlogSection />

      <ContactSection />
    </>
  );
}
