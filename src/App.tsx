import "./assets/App.css";
import "./assets/Navbar.css";
import "./assets/Hero.css";
import "./assets/Footer.css";
import "./assets/projects.css";


function Navbar(){
  return (
      <header>
        <nav>
          <div id="logo">
            <a href="">
              <h1>SolidStone</h1>
                <hr></hr>
              <h1>Construction</h1>
            </a>
          
          </div>
          
          <div id="nav-links" >
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Services</a>
            <a href="">Projects</a>
            <a href="">Contact Us</a>
          </div>

        </nav>
      </header>
  );
}

function HeroPage() {
  return(
    <section id="Hero">

      <div className="hero-image image1"></div>
      <div className="hero-image image2"></div>
      <div className="hero-image image3"></div>
     
    <div className="hero-content">
        <p>
          When Safety, Stability and Trust are Necessary 
        </p>
    </div>

    </section>
  );
}


function About() {
  return(
    <section id="About">
      <div>
        <h2>About Us</h2>
      </div>
    </section>
  );
}


function Services() {
  return(
    <section id="Services">
      <div>
        <p>Services</p>
      </div>
    </section>
  );
}

function Projects() {
  return(

    <section id="Projects">
      <div id="project-subtext">
        <h1>Projects</h1>
        <p>A showcase of the spaces we’ve built, renovated, and brought to life — 
          each project reflecting our commitment to quality, precision, and lasting results.
        </p>

      </div>
        

        {/* Make the project container itself smaller so that the figures fit better inside it  
        Maybe border radius the edges?
        Work on Header and subtext Heading
        3 x 3 x 2 Doesnt look too bad
        
        Do the import method for the images.*/}

        
        <div id="projects-container">
          <figure className="project-item">
            <img src="src\assets\Images\Projects\build.jpg" alt="Red Corporate building" />
            <figcaption> Demo Information </figcaption>
          </figure>

          <figure className="project-item">
            <img src="src\assets\Images\Projects\corporate 2.jpg" alt="Interior of Corporate Building" />
            <figcaption> Demo Information </figcaption>
          </figure>

          <figure className="project-item">
            <img src="src\assets\Images\Projects\corporate1.jpg" alt="Corporate Building" />
            <figcaption> Demo Information </figcaption>
          </figure>

          <figure className="project-item">
            <img src="src\assets\Images\Projects\elifin.jpg" alt="Corporate Building" />
            <figcaption> Demo Information </figcaption>
          </figure>

          <figure className="project-item">
            <img src="src\assets\Images\Projects\maciej.jpg" alt="Corporate Building" />
            <figcaption> Demo Information </figcaption>
          </figure>

          <figure className="project-item">
            <img src="src\assets\Images\Projects\photo.jpg" alt="Residential Building" />
            <figcaption> Demo Information </figcaption>
          </figure>

          <figure className="project-item">
            <img src="src/assets/Images/Projects/renovation.jpg" alt="Renovated Interior" />
            <figcaption> Demo Information </figcaption>
          </figure>

          <figure className="project-item">
            <img src="src\assets\Images\Projects\residential.jpg" alt="Residential Building" />
            <figcaption> Demo Information </figcaption>
          </figure>

        </div>
    </section>
  );
}


function Contact() {
  return(

    // contact information vs contact form. Options.

    <form action="">
      <label htmlFor=""></label>
      <input type="text" />
    </form>
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
      <HeroPage />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />

    </>
  );
}


export default App;