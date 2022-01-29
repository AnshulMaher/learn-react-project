import { useNavigate } from 'react-router-dom';
import './card.styles.css';

// import { Component } from 'react';
// import WithRouter from '../with-router/with-router.hoc';

function Card({ item: { id, first_name, last_name, avatar, email } }) {
  const navigate = useNavigate();
  return (
    <div className="card-container" onClick={() => navigate(`/detail/${id}`)}>
      <img src={avatar} alt="monster" />
      <h2>{`${first_name} ${last_name}`}</h2>
      <p>Email: {email}</p>
    </div>
  );
}
export default Card;

// class Card extends Component {
//   render() {
//     const {
//       item: { id, first_name, last_name, avatar, email }
//     } = this.props;
//     return (
//       <div className="card-container" onClick={() => this.props.navigate(`/detail/${id}`)}>
//         <img src={avatar} alt="monster" />
//         <h2>{`${first_name} ${last_name}`}</h2>
//         <p>Email: {email}</p>
//       </div>
//     );
//   }
// }
// export default WithRouter(Card);
