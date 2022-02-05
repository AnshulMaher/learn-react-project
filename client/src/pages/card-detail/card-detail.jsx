import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from '../../components/loader/loader';
import './card-detail.styles.css';

function CardDetailPage() {
  const params = useParams();
  const data = useSelector((state) => state.user.user_list.find((userDetail) => userDetail.id === parseInt(params.id)));

  return !data ? (
    <Loader />
  ) : (
    <div className="card-detail">
      <img src={data.avatar} className="card-image" alt={data.first_name} />
      <div className="card-content">
        <h2>{`${data.first_name} ${data.last_name}`}</h2>
        <span className="card-detail-email">Email: {data.email}</span>
      </div>
    </div>
  );
}

export default CardDetailPage;