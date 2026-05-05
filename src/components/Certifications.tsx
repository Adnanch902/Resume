import "./styles/Certifications.css";

const certifications = [
  "Oracle Certified Associate Java Programmer (OCAJP)",
  "AWS Cloud Practitioner",
  "Master Microservices with Spring Boot, Docker & Kubernetes",
  "Master Spring Boot Microservices with CQRS Event Sourcing",
  "AWS Cloud Computing",
];

const Certifications = () => {
  return (
    <section className="certifications-section section-container" id="certifications">
      <div className="certifications-container">
        <h2>
          Certifications <span>& Credentials</span>
        </h2>
        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <div className="cert-card" key={index}>
              <h4>{cert}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
