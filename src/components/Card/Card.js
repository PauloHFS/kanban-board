import "./Card.css";

const Card = (props) => {
  const { children, avatar, label, labelColor = "blue" } = props;
  return (
    <div className="card">
      <h2 className="card-text">{children}</h2>
      <div className="card-info">
        <div className="card-info-avatar">{avatar}</div>
        <div className={`card-info-label card-info-label__${labelColor}`}>
          <p className="card-info-label-text">{label}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
