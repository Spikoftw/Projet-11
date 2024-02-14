function FeatureCard({ title, src, text }) {
  return (
    <div className="feature-item">
      <img src={src} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default FeatureCard;
