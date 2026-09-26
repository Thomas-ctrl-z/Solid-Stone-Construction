import "./assets/App.css";
import "./assets/Navbar.css";
import "./assets/Hero.css";


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
    <div>
      <p>Footer</p>
    </div>
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