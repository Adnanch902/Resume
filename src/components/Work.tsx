import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Multi-Gateway Payments Integration",
    category: "PTCL - Financial Integrations",
    challenge:
      "Unify payment acceptance and settlement flows across multiple providers.",
    role: "Led backend design and implementation with Spring Boot services.",
    impact:
      "Standardized integrations for JazzCash, Upaisa, EasyPaisa, Etisalat, and Bank Alfalah with stronger reconciliation control.",
    image: "/images/callhq.png",
    link: "https://linkedin.com/in/adnan-azad",
  },
  {
    title: "Trading and Payment Microservices",
    category: "Avanza Solutions",
    challenge:
      "Build low-latency, secure services for financial operations at scale.",
    role: "Developed event-driven microservices and secure API layers.",
    impact:
      "Improved service reliability and observability using Kafka-backed workflows and hardened auth/transport security.",
    image: "/images/whatsapp.png",
    link: "https://linkedin.com/in/adnan-azad",
  },
  {
    title: "Netflix OSS Microservices",
    category: "Inbox Business Technologies",
    challenge:
      "Deliver scalable and fault-tolerant service communication for high-volume finance traffic.",
    role: "Implemented service discovery, gateway, load balancing, and circuit breaking.",
    impact:
      "Enabled resilient inter-service traffic management with Eureka, Zuul, Ribbon, and Hystrix patterns.",
    image: "/images/broki.png",
    link: "https://linkedin.com/in/adnan-azad",
  },
  {
    title: "Cloud-Native Backend Delivery",
    category: "Vialogic and PEEK International",
    challenge:
      "Accelerate deployment cycles while maintaining reliability and security.",
    role: "Built and deployed cloud-native backend services on AWS with container orchestration.",
    impact:
      "Reduced release friction and improved availability through Docker/Kubernetes pipelines and database optimizations.",
    image: "/images/orrdr.png",
    link: "https://linkedin.com/in/adnan-azad",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Challenge</span>
                          <p>{project.challenge}</p>
                          <span className="tools-label">My Role</span>
                          <p>{project.role}</p>
                          <span className="tools-label">Impact</span>
                          <p>{project.impact}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
