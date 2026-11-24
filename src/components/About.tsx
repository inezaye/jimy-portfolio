
import '../styles/About.css'

function About() {
  return (
    <section className="about section" id="about">
      <div className="about-container">

        <div className="about-heading">
          <p className="section-eyebrow">GET TO KNOW ME</p>
          <h2>About Me</h2>
          <div className="heading-line"></div>
        </div>

        <div className="about-content">

          <div className="about-text">
            <h3>
              Building a foundation for
              <span> meaningful technology.</span>
            </h3>

            <p>
              I am Inezaye Kamanzi Jimy, a Computer Engineering
              student at the University of Rwanda with a strong
              interest in Embedded Systems, the Internet of Things
              (IoT), robotics and automation.
            </p>

            <p>
              My interest in technology developed during my
              secondary education at Ecole des Sciences Byimana,
              where I studied Mathematics, Physics and Computer
              Science (MPC). Through computer science and practical
              exploration, I became increasingly interested in
              understanding how software interacts with hardware.
            </p>

            <p>
              I have explored Arduino programming and robotics,
              participated in technology activities, and developed
              an interest in creating systems that connect the
              digital and physical worlds.
            </p>

            <p>
              My long-term goal is to develop practical engineering
              solutions that address real challenges, particularly
              in areas such as agriculture, healthcare and industry.
            </p>
          </div>

          <div className="about-visual">
            <div className="about-visual-inner">
              <span className="about-symbol">IK</span>
              <h3>Curiosity into Creation.</h3>
              <p>
                Learning, experimenting and building
                technology for real-world applications.
              </p>
              <div className="about-tags">
                <span>Embedded Systems</span>
                <span>IoT</span>
                <span>Robotics</span>
                <span>Automation</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
