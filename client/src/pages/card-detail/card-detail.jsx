import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api_call, REQUEST_TYPE } from '../../api';
import { USERS } from '../../api/routes';
import Card from '../../components/card/card.component';
import Loader from '../../components/loader/loader';
import './card-detail.styles.css';

// import React, { Component } from 'react';
// import WithRouter from '../../components/with-router/with-router.hoc';

function CardDetailPage() {
  const params = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    api_call(`${USERS}/${params.id}`, REQUEST_TYPE.GET).then((response) => setData(response.data));
  }, [params.id]);

  return (
    <>
      <h1>Card Detail Page</h1>
      <div className="card-detail">{!data ? <Loader /> : <Card item={data} />}</div>
    </>
  );
}

export default CardDetailPage;

// class CardDetailPage extends Component {
//   state = { data: null };
//   componentDidMount() {
//     api_call(`${USERS}/${this.props.params.id}`, REQUEST_TYPE.GET).then((response) => this.setStatesetData({ data: response.data }));
//   }

//   render() {
//     const { data } = this.state;
//     return (
//       <>
//         <h1>Card Detail Page</h1>
//         <div className="card-detail">{!data ? <Loader /> : <Card item={data} />}</div>
//       </>
//     );
//   }
// }
// export default WithRouter(CardDetailPage);
