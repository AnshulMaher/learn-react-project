import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Card from '../../components/card/card.component';
import "./card-detail.styles.css";

function CardDetailPage() {
  const params = useParams();
  const [data, setData] = useState(null);
  
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`).then((response) => setData(response.data));
  }, []);

  return (
    <>
      <h1>Card Detail Page</h1>
      <div className="card-detail">{!data ? <p>Loading....</p> : <Card item={data} />}</div>
    </>
  );
}

export default CardDetailPage;
