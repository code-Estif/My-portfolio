import heroImg from '../assets/profile.png'
import { FaLocationDot } from "react-icons/fa6";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Hi, I’m <span>Estif</span></h1>
        <h2>Frontend Developer</h2>
        <p>
          I build fast, clean and modern frontend websites that help 
          businesses look professional and convert better.
        </p>
        <div className="hero-location">
          <FaLocationDot />
          <span>Location: D.Markos, Ethiopia</span>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImg} alt="Estif profile" />
      </div>
    </section>
  );
}


export default Hero;