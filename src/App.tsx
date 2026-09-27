import "./assets/App.css";
import "./assets/Navbar.css";
import "./assets/Hero.css";
import "./assets/Footer.css";


function Navbar(){
  return (
    <nav>
      <div id="logo">
        <a href="">
          <h1 className="text-lg font-semibold">SolidStone</h1>
            <hr></hr>
          <h1 className="text-lg font-semibold">Construction</h1>
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


function Services() {
  return(
    <div>
      <p>Services</p>
    </div>
  );
}


function About() {
  return(
    <div>
      <h2>About Us</h2>
    </div>
  );
}


function Projects() {
  return(
    <div>
      <img src="" alt="" />
      <p>Projects we've worked on</p>
    </div>
  );
}


function Contact() {
  return(
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
      <Services />
      <About />
      <Projects />
      <Contact />
      <Footer />

    </>
  );
}


export default App;