import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Software Engineering Leader and Enterprise Solution Architect with 7+
          years of experience delivering secure, scalable platforms for
          digital banking, fintech, telecom, and trading domains. I specialize
          in Java Spring Boot microservices, payment and billing integrations,
          reconciliation pipelines, and cloud-native delivery on AWS, Docker,
          and Kubernetes.
        </p>
        <h3 className="title">Key Achievements</h3>
        <p className="para">
          Led multi-gateway payment integrations, improved reconciliation
          turnaround with Spring Batch/Scheduler automation, and strengthened
          production reliability through incident response and root-cause
          analysis. Built fraud scoring and transaction decision logic using
          algorithmic and data-driven approaches to support secure, real-time
          operations.
        </p>
      </div>
    </div>
  );
};

export default About;
