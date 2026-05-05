import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://linkedin.com/in/adnan-azad"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn - adnan-azad
              </a>
            </p>
            <p>
              <a href="mailto:adnanch902@gmail.com" data-cursor="disable">
                adnanch902@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+923125548713" data-cursor="disable">
                +92-312-5548713
              </a>
            </p>
            <h4>Education</h4>
            <p>
              BS in Computer Science (Software Systems), Federal Urdu University
              of Arts, Science and Technology, Islamabad - Feb 2020
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://linkedin.com/in/adnan-azad"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://github.com/Adnanch902"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="mailto:adnanch902@gmail.com"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
            <a
              href="tel:+923125548713"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Phone <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Senior Software Engineer <br /> <span>Adnan Azad</span>
            </h2>
            <p>
              Leadership Philosophy: build accountable teams, design for
              reliability first, and mentor engineers to ship secure systems
              with measurable business impact.
            </p>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
