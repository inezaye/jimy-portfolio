
import { Mail, MapPin, ArrowUpRight } from 'lucide-react'
import '../styles/Contacts.css'

function Contacts() {
  return (
    <section className="contacts section" id="contact">
      <div className="contacts-container">

        <div className="contacts-heading">
          <p className="section-eyebrow">GET IN TOUCH</p>
          <h2>Let's Connect</h2>
          <div className="heading-line"></div>
          <p>
            I am open to meaningful conversations, learning
            opportunities, collaborations and technology projects.
          </p>
        </div>

        <div className="contacts-content">

          <div className="contacts-message">
            <span className="contacts-small-title">
              HAVE A PROJECT OR AN IDEA?
            </span>

            <h3>
              Let's build something
              <span> meaningful.</span>
            </h3>

            <p>
              Whether you want to discuss technology, share an idea,
              collaborate on a project or simply connect, I would
              be glad to hear from you.
            </p>

            <a
              href="mailto:inezayekamanzijimy@gmail.com"
              className="contact-email-button"
            >
              <Mail size={18} />
              Send Me an Email
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="contacts-details">

            <div className="contact-detail-card">
              <div className="contact-detail-icon">
                <Mail size={21} />
              </div>

              <div>
              <a href="mailto:inezayekamanzijimy@gmail.com">
                <span>Email Me </span>  
                </a>
              </div>
            </div>

            <div className="contact-detail-card">
              <div className="contact-detail-icon">
                <MapPin size={21} />
              </div>

              <div>
                <span>Location</span>
                <p>Rwanda</p>
              </div>
            </div>

            <div className="contact-socials">
              <span>FIND ME ONLINE</span>

              <div className="social-links">
                <a
                  href="https://github.com/inezaye"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/inezaye-kamanzi-jimy-4452b6324/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts
