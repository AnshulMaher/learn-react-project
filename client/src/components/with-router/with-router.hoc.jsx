import { useNavigate, useParams } from 'react-router-dom';

function WithRouter(Component) {

  const WrapperComponent = (props) => {
    const navigate = useNavigate();
    const params = useParams();
    return <Component navigate={navigate} params={params} {...props} />;
  };

  return WrapperComponent;
}

export default WithRouter;
