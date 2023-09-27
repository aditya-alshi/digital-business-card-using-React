export default function Head() {
    return (
      <>
        <img src="\dp.jpg" alt="A hand against window" />
        <div className="container compo">
          <div className="info-section">
            <h3 id="name">Aditya Alshi</h3>
            <p className="designation">Frontend Developer</p>
            <p className="site-link">adityaalshi website</p>
          </div>
          <div className="contact-me">
            <button id="email">
              <p>
                <a href="mailto:alshiaditya55@gmail.com">
                  <img className='contact-me-icon' src='\email-Icon.png' alt="icon representing email" />
                </a>
              </p>
              <p>Email</p>
            </button>
            <button id="linkedIn">
              <p>
              <a href="https://www.linkedin.com/in/your-linkedin-profile-url" target="_blank" rel="noopener noreferrer">
      <img className='contact-me-icon' src="\linkedIn.png" alt="LinkedIn icon" />
    </a>
              </p>
              <p>LinkedIn</p>
            </button>
          </div>
        </div>
      </>
    )
  }
  