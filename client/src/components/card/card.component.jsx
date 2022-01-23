import { Component } from 'react';
import WithRouter from '../with-router/with-router.hoc';
import './card.styles.css';

class Card extends Component {
  render() {
    const { item, navigate } = this.props;
    return (
      <div className="card-container" onClick={() => navigate(`/detail/${item.id}`)}>
        <img src={`https://robohash.org/${item.id}?set=set2&size=180x180`} alt="monster" />
        <h2>{item.name}</h2>
        <p>UserName: {item.username}</p>
        <p>Email: {item.email}</p>
      </div>
    );
  }
}

// function Card(props) {
//   const { item } = props;
//   const navigate = useNavigate();
//   return (
//     <div className="card-container" onClick={() => navigate(`/detail/${item.id}`)}>
//       <img src={`https://robohash.org/${item.id}?set=set2&size=180x180`} alt="monster" />
//       <h2>{item.name}</h2>
//       <p>
//         UserName: {item.username} Email: {item.email}
//       </p>
//     </div>
//   );
// }

export default WithRouter(Card);
