

import "./assets/css/base.css";
import "./assets/css/home-one.css";
import "./assets/css/home-two.css";
import "./assets/css/home-three.css";
import "./assets/css/about.css";
import "./assets/css/blog.css";
import "./assets/css/contact.css";
import "./assets/css/services.css";
import "./assets/css/team.css";
import "./assets/css/team-two.css";
import "./assets/css/404.css";
import "./assets/css/testimonial.css";
import "./assets/css/pricing.css";
import "./assets/css/projects.css";
import "./assets/css/service-details.css";
import "./assets/css/blog-details.css";
import "./assets/css/blog-two.css";
import "./assets/css/login.css";

import { BrowserRouter } from "react-router-dom";
import { StrictMode } from 'react' ;
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
    <StrictMode>
    <BrowserRouter>
          <App />
        </BrowserRouter>
  </StrictMode>,
);