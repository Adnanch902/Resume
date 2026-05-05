import "./styles/TechHighlights.css";

const groups = [
  {
    title: "Architecture",
    items: "Microservices, Event-Driven, CQRS, Saga, API Gateway, DDD",
  },
  {
    title: "Security",
    items: "OAuth2, JWT, MTLS, AES/RSA, PCI-DSS, KYC, GDPR, HIPAA",
  },
  {
    title: "Cloud & DevOps",
    items: "AWS, EKS, ECS, Docker, Kubernetes, CI/CD, ELK, Nginx",
  },
  {
    title: "Data & Messaging",
    items: "Kafka, ActiveMQ, SNS/SQS, Oracle, PostgreSQL, MySQL, MongoDB",
  },
];

const TechHighlights = () => {
  return (
    <section className="tech-highlights section-container" id="tech-highlights">
      <h2>
        Tech <span>Highlights</span>
      </h2>
      <div className="tech-highlight-grid">
        {groups.map((group) => (
          <div className="tech-highlight-card" key={group.title}>
            <h4>{group.title}</h4>
            <p>{group.items}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechHighlights;
