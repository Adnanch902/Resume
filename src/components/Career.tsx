import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Manager Development</h4>
                <h5>PTCL, Islamabad</h5>
              </div>
              <h3>Oct 2024 - Present</h3>
            </div>
            <p>
              Leading backend engineering using Java and Spring Boot for payment
              gateway integrations including JazzCash, Upaisa, EasyPaisa,
              Etisalat, and Bank Alfalah. Delivering reconciliation and
              settlement workflows with Spring Batch/Scheduler and supporting
              production systems with fast incident resolution.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Software Engineer</h4>
                <h5>Avanza Solutions, Islamabad</h5>
              </div>
              <h3>Mar 2024 - Oct 2024</h3>
            </div>
            <p>
              Designed microservices-based systems with Java Spring Boot, Kafka,
              and low-latency APIs for trading and payment operations. Implemented
              strong security controls including AES/RSA, TLS/MTLS, OAuth2, and
              JWT while delivering PCI-DSS, HIPAA, and GDPR aligned solutions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Software Engineer</h4>
                <h5>Inbox Business Technologies, Islamabad</h5>
              </div>
              <h3>Jan 2023 - Mar 2024</h3>
            </div>
            <p>
              Built cloud-native microservices using Spring Boot and Netflix OSS
              stack (Eureka, Zuul, Ribbon, Hystrix). Delivered resilient,
              high-throughput financial systems, secure service-to-service
              communication, and robust API lifecycle documentation.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Backend Software Engineer</h4>
                <h5>Vialogic, Islamabad</h5>
              </div>
              <h3>Aug 2021 - Jan 2023</h3>
            </div>
            <p>
              Built scalable Java backend services and REST APIs, deployed on AWS
              with Docker and Kubernetes. Optimized database and payment workflows
              and led cross-functional Scrum delivery.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Software Engineer</h4>
                <h5>PEEK International, Islamabad</h5>
              </div>
              <h3>Feb 2018 - Jul 2021</h3>
            </div>
            <p>
              Engineered end-to-end applications using Java, RESTful APIs,
              Angular, React, and JSF while applying clean architecture, SOLID
              principles, and scalable design patterns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
