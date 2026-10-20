import { useState } from "react";
import {Routes, Route, Link} from "react-router";
import { useLocation } from "react-router";

import "./assets/Stylesheets/App.css";
import "./assets/Stylesheets/About.css";
import "./assets/Stylesheets/Footer.css";
import "./assets/Stylesheets/Hero.css";
import "./assets/Stylesheets/Navbar.css";
import "./assets/Stylesheets/contact.css";
import "./assets/Stylesheets/projects.css";
import "./assets/Stylesheets/quote.css";
import "./assets/Stylesheets/services.css";


import Contact from "./pages/Contact";
import Quote from "./pages/Quote";

import redCorporate from "./assets/Images/Projects/build.jpg";
import corporateInterior from "./assets/Images/Projects/corporate 2.jpg";
import corporate1 from "./assets/Images/Projects/corporate1.jpg";
import corporate2 from "./assets/Images/Projects/elifin.jpg";
import corporate3 from "./assets/Images/Projects/maciej.jpg";
import residential1 from "./assets/Images/Projects/photo.jpg";
import renovatedInterior from "./assets/Images/Projects/renovation.jpg";
import residential2 from "./assets/Images/Projects/residential.jpg";





function Navbar(){

  const { pathname } = useLocation();
  const isHomePage = pathname === "/";

  return (
      <header style={{
        position: isHomePage ? "fixed" : "static",
        background: isHomePage ? "none" : "green",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 10,
              }}>
        <nav>
          <div id="logo">
            <a href="">
              <h1>SolidStone</h1>
                <hr></hr>
              <h1>Construction</h1>
            </a>
          
          </div>
          
          <div id="nav-links" >
            <Link to={"/"}>Home</Link>
            <a href="#About">About</a>
            <a href="#Services">Services</a>
            <a href="#Projects">Projects</a>
            <Link to="/Contact">Contact Us</Link>
          </div>

        </nav>
      </header>
  );
}

function HeroPage() {

  const webpageTransition = () => {
    window.location.href = "/Quote";
  };

  return(
    <section id="Hero">

      <div className="hero-image image1"></div>
      <div className="hero-image image2"></div>
      <div className="hero-image image3"></div>
     
    <div className="hero-content">
        <h1>BUILT ON TRUST.</h1>
        <h1>DRIVEN BY COMMITMENT.</h1>

        <h2>No matter the size or scope of the project, we bring <span id="emphasis">100%</span> Reliability, Trust, and Commitment
          to every build.
        </h2>

        <button id="quote-btn" onClick={webpageTransition}>GET A QUOTE NOW</button>
    </div>

    </section>
  );
}


function About() {
  const reasons = [
    {
      number: "01",
      title: "Reliability",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
    },

    {
      number: "02",
      title: "Trust",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
    },

    {
      number: "03",
      title: "Safety",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
    },

    {
      number: "04",
      title: "Experience",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const previosSlideTransition = () => {
    setCurrentSlide((prev) => 
    prev === 0 ? reasons.length - 1 : prev - 1
   );
  };

  const nextSlideTransition = () => {
    setCurrentSlide((prev) => 
    prev === reasons.length -1 ? 0 : prev + 1
   );
  };



  return(
    <section id="About" className="section-style">

      <div id="about-container">

        <div id="about-statement" className="about-column">
          {/* Heading  */}
          <h2>Who we are?</h2>
          
          {/* Introductory statement:  */}
          <p>
            SolidStone Construction is not just a company but a family oriented team, built on trust and respect for each other
            and the clients that we work with. 
          </p>
            
        </div>

        {/* Slide Show of reasons why */}

        <div id="slideshow-container" className="about-column">
          <h2>Why Work with us?</h2>

          <div key={currentSlide}  className="slide">

            <span>{reasons[currentSlide].number}</span>

            <h2>{reasons[currentSlide].title}</h2>

            <p>{reasons[currentSlide].text}</p>

            
          </div>

          <div id="slideshow-nav">

              <button className="nav-btn" onClick={previosSlideTransition}>
                Left</button>

              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>

              <button className="nav-btn" onClick={nextSlideTransition}>
                Right</button>

            </div>

        </div>

      </div>
    
</section>
  );
}


function Services() {
  return(
    <section id="Services" className="section-style">

      <div id="services-container">

        <div id="service-heading">

          <h1>What we do</h1>
          <h2>Offering Services for both your commercial and residential needs.</h2>

        </div>
       

        <div id="services-card-container">
          <div className="service-card">
            {/* Replace with Image potentially */}
            <span className="service-icon">🏗</span>

            <h3>New Construction</h3>
            <p>Complete construction services for residential and commercial properties.</p>

          </div> 

          <div className="service-card">
             {/* Replace with Image potentially */}
            <span className="service-icon">🔨</span>

            <h3>Renovations</h3>
            <p>Modernize existing spaces with professional renovation and remodeling.</p>

          </div>

          <div className="service-card">
             {/* Replace with Image potentially */}
            <span className="service-icon">📐</span>

            <h3>Project Planning</h3>
            <p>Careful planning, consultations, budgeting and coordination before construction begins.</p>

          </div>
        </div>

      </div>
    </section>
  );
}

function Projects() {
  return(

    <section id="Projects" className="section-style">

      <div id="project-container">

            <div id="project-subtext">
              <h1>Projects</h1>
              <p>A showcase of the spaces we’ve built, renovated, and brought to life — 
                each project reflecting our commitment to quality, precision, and lasting results.
              </p>

            </div>

            
            <div id="projects-container">
              <figure className="project-item">
                <img src={redCorporate} alt="Red Corporate building" />
                <figcaption> Demo Information </figcaption>
              </figure>

              <figure className="project-item">
                <img src={corporateInterior} alt="Interior of Corporate Building" />
                <figcaption> Demo Information </figcaption>
              </figure>

              <figure className="project-item">
                <img src={corporate1} alt="Corporate Building" />
                <figcaption> Demo Information </figcaption>
              </figure>

              <figure className="project-item">
                <img src={corporate2} alt="Corporate Building" />
                <figcaption> Demo Information </figcaption>
              </figure>

              <figure className="project-item">
                <img src={corporate3} alt="Corporate Building" />
                <figcaption> Demo Information </figcaption>
              </figure>

              <figure className="project-item">
                <img src={residential1} alt="Residential Building" />
                <figcaption> Demo Information </figcaption>
              </figure>

              <figure className="project-item">
                <img src={renovatedInterior} alt="Renovated Interior" />
                <figcaption> Demo Information </figcaption>
              </figure>

              <figure className="project-item">
                <img src={residential2} alt="Residential Building" />
                <figcaption> Demo Information </figcaption>
              </figure>

            </div>

      </div>


    </section>
  );
}


function Footer() {
  return(
    <footer>
      <div className="footer-content">
        <div>
          <h3>SolidStone Construction</h3>

          <p>
            Reliable construction and renovation services
            for residential and commercial projects.
          </p>
        </div>

        <div>
          <h3>Company</h3>

          <ul>
            <li><a href="">About</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Services</a></li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>

          <ul>
            {/* Add Icons for Address, phone and email */}
            <li>123 Main Street</li>
            <li>(555) 437-1988</li>
            <li>solidstonebuilds@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="copyright">
        © 2026 SolidStone Construction. All rights reserved.
      </div>
    </footer>
  );
}





function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <HeroPage />
            <About />
            <Services />
            <Projects />

          </>
        }/>

        <Route path="/Contact" element={<Contact />} />
        <Route path="/Quote" element={<Quote />} />

      </Routes>

      <Footer />

    </>
    
  );
}


export default App;