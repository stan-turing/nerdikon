import './NerdikonCard.css';

const NerdikonCard = ({ title, category }) => (
  <div className="card">
    <h2 className="card-title">{title}</h2>
    <span className="card-category">{category}</span>
  </div>
);

export default NerdikonCard;
