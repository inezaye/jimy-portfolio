
import '../styles/Hero.css'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-eyebrow">
          COMPUTER ENGINEERING STUDENT
        </p>

        <h1>
          Inezaye Kamanzi
          <span>  Jimy.</span>
        </h1>

        <h2>
          Exploring the world of Embedded Systems,
          IoT & Robotics.
        </h2>

        <p className="hero-description">
          I am a Computer Engineering student at the
          University of Rwanda, interested in building
          practical technology through embedded systems,
          connected devices, robotics and automation.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="hero-button primary">
            Explore My Work
          </a>

          <a href="#contact" className="hero-button secondary">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
