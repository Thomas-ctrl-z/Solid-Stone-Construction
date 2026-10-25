import { useState } from "react";
import {Routes, Route, Link} from "react-router";
import { useLocation } from "react-router";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

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
import bankCorporate from "./assets/Images/Projects/Jccb-bank.jpg";

import architects from "./assets/Images/thisisengineering.jpg";






function Navbar(){

  const { pathname, hash } = useLocation();
  const isHomePage = pathname === "/";
  const [isOpen, setisOpen] = useState(false);


  useEffect(() => {

    //Navbar Links proper routing and screen top positioning on new page.
    if (hash) {
      requestAnimationFrame(() => {
        document
        .getElementById(decodeURIComponent(hash.slice(1)))
        ?.scrollIntoView({ behavior: "smooth" });
      }); 
    } else {
      window.scrollTo({ top: 0, behavior: "auto"});
    }



    //header background scroll functionality
    if (!isHomePage) return;

    const header = document.getElementById("header-scroll");
    if (!(header instanceof HTMLElement)) return;


    const handleScroll = () => {
    
    let scroll = Math.min(window.scrollY / 500, 1);

    scroll = 1 - Math.pow(1 - scroll, 3);

    header.style.backgroundColor = `rgba(23, 26, 24, ${scroll})`;

   };
     
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  
  }, [pathname, hash, isHomePage]);

  //Responsive Nav design 

  

  return (
      <header id="header-scroll" style={{
        position: isHomePage ? "fixed" : "static",
        background: isHomePage ? "none" : "#171a18",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 10,
              }}>
        <nav>
          <div id="logo">
            
              <h1>SolidStone</h1>
                <hr></hr>
              <h1>Construction</h1>
    
          </div>
          

          <div id="nav-links" className={isOpen ? "open" : ""} >
            <Link to={"/"} onClick={() => setisOpen(false)}>Home</Link>
            <Link to={"/#About"} onClick={() => setisOpen(false)}>About</Link>
            <Link to={"/#Services"} onClick={() => setisOpen(false)}>Services</Link>
            <Link to={"/#Projects"} onClick={() => setisOpen(false)}>Projects</Link>
            <Link to="/Contact" onClick={() => setisOpen(false)}>Contact Us</Link>
          </div>

          <button className="menu-toggle" id="menu-toggle" onClick={()=> setisOpen(!isOpen)} aria-label="Toggle Navigation" aria-expanded="false">
            {isOpen ? "X" : "☰"}
          </button>

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

        <button id="quote-btn" onClick={webpageTransition}>Request A Quote</button>
    </div>

    </section>
  );
}


function About() {
  const reasons = [
    {
      heading: "",
      number: "",
      title: "Who we are?",
      text: "At SolidStone Construction, we’re more than just a company. We’re a family built on trust, respect, and a shared commitment to our clients. Our work is guided by the core values that define who we are and ensure every project is handled with care, integrity, and professionalism. ",
      stats: [
        { value: "15+", label: "Years Experience"},
        { value: "120+", label: "Projects Completed"},
        { value: "98%", label: "Client Satisfaction"}
      ]
    },

    {
      heading: "Why work with us?",
      number: "01",
      title: "Reliability",
      text: "We take pride in delivering dependable construction services, ensuring every project is completed with care, consistency, and attention to detail. Our team remains committed to meeting deadlines and maintaining the standards our clients deserve."
    },

    {
      heading: "Why work with us?",
      number: "02",
      title: "Trust",
      text: "We believe every successful project begins with honest communication and transparency. From the initial consultation to the final inspection, we keep our clients informed, respect their decisions, and work hard to build lasting relationships."
    },

    {
      heading: "Why work with us?",
      number: "03",
      title: "Safety",
      text: "We prioritize the safety of our workers, clients, and surrounding communities throughout every stage of construction. By following proper procedures, maintaining organized workspaces, and using appropriate equipment, we strive to create a safer environment for everyone."
    },

    {
      heading: "Why work with us?",
      number: "04",
      title: "Experience",
      text: "Our experience allows us to approach every project with practical knowledge, skilled workmanship, and careful planning. We understand the importance of quality results and use our expertise to turn our clients' visions into durable, functional spaces."
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
    <section id="About" className="section-style bg-white">

      <div id="about-container">

        <img src={architects} alt="Construction professionals designing" />



        {/* Slide Show of reasons why */}

        <div id="slideshow-container" className="about-column">

          <div key={currentSlide}  className="slide"> 

            {currentSlide == 0 ? (
              <div className="who-we-are">
                <span className="about-eyebrow">ABOUT SOLIDSTONE</span>

                <h2>{reasons[currentSlide].title}</h2>
                <p>{reasons[currentSlide].text}</p>

                <div className="about-stats">
                  {reasons[currentSlide].stats?.map((stat) => (
                    <div className="stat"key={stat.label}>
                      <span className="stat-number">{stat.value}</span>
                      <span className="stat-label">{stat.label}</span>
                    </div>

                  ))}

                </div>
              </div>
              
            ) : (

              <>
                <h2 className="text-center">{reasons[currentSlide].heading}</h2>
                <span className="text-center block">{reasons[currentSlide].number}</span>
                <h2 className="text-center">{reasons[currentSlide].title}</h2>
                <p className="text-left">{reasons[currentSlide].text}</p>
              </>

            )}
            
          </div>

          <div id="slideshow-nav">

              <button className="nav-btn" onClick={previosSlideTransition}>
                <FontAwesomeIcon icon={faAngleLeft} /> </button>

              <span>
                {currentSlide + 1} / {reasons.length}
              </span>

              <button className="nav-btn" onClick={nextSlideTransition}>
                <FontAwesomeIcon icon={faAngleRight} /> </button>

            </div>

        </div>

      </div>
    
</section>
  );
}


function Services() {
  return(
    <section id="Services" className="section-style ">

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

  const [currentSet, nextSet] = useState(0);

  const projects = [
    {
      image: redCorporate,
      alt: "Red corporate building",
      title: "Corporate Exterior",
      type: "Commercial Construction",
    },
    {
      image: corporateInterior,
      alt: "Corporate building interior",
      title: "Modern Office Interior",
      type: "Commercial Interior",
    },
    {
      image: corporate1,
      alt: "Corporate building",
      title: "Corporate Development",
      type: "Commercial Construction",
    },
    {
      image: corporate2,
      alt: "Corporate building exterior",
      title: "Commercial Property",
      type: "Commercial Construction",
    },
    {
      image: corporate3,
      alt: "Corporate construction project",
      title: "Business Facility",
      type: "Commercial Construction",
    },
    {
      image: residential1,
      alt: "Residential building",
      title: "Modern Residence",
      type: "Residential Construction",
    },
    {
      image: renovatedInterior,
      alt: "Renovated interior",
      title: "Interior Renovation",
      type: "Renovation",
    },
    {
      image: residential2,
      alt: "Residential building exterior",
      title: "Residential Development",
      type: "Residential Construction",
    },
    {
      image: bankCorporate,
      alt: "Corporate bank building",
      title: "Banking Facility",
      type: "Commercial Construction",
    },
  ];


  const totalPages = Math.ceil(projects.length / 3);

  const visibleProjects = projects.slice(
    currentSet * 3,
    currentSet * 3 + 3
  )

  const previousSet = () => {
      nextSet((page) => (page - 1 + totalPages) % totalPages)
  }

  const nextImageSet = () => {
       nextSet((page) => (page + 1) % totalPages)
  }

  return(

    <section id="Projects" className="section-style bg-white">

      <div id="project-container">

            <div id="project-subtext">
              <h1>Projects</h1>

              <p>A showcase of the spaces we’ve built, renovated, and brought to life.</p>

            </div>

            
            <div id="projects-container" key={currentSet} className="slide">
              
              {visibleProjects.map((project) => (
                <figure className="project-item" key={project.image}>
                  <img src={project.image} alt= {project.alt} width={"400"} height={"230"}/>

                  <figcaption className="project-info">
                    <h3> {project.title}</h3>
                    <p>{project.type}</p>
                  </figcaption>

                </figure>
                
              ))}
            </div>

            <div className="project-navigation">
                <button onClick={previousSet} aria-label="Previous Projects">
                  <FontAwesomeIcon icon={faAngleLeft}/>
                </button>

                <span>
                  {currentSet + 1} / {totalPages}
                </span>

                <button onClick={nextImageSet} aria-label="Next Projects">
                  <FontAwesomeIcon icon={faAngleRight}/>
                </button>
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