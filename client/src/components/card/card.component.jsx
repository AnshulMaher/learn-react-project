import { useNavigate } from 'react-router-dom';
import './card.styles.css';

function Card({ item: { id, first_name, last_name, avatar, email } }) {
  const navigate = useNavigate();
  return (
    <div className="card-container" onClick={() => navigate(`/detail/${id}`)}>
      <img src={avatar} className="card-image" alt={first_name} width={100} height={100} />
      <div className="card-content">
        <h2>{`${first_name} ${last_name}`}</h2>
        <p>Email: {email}</p>
      </div>
    </div>
  );
}
export default Card;
