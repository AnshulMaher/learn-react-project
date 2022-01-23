import { useNavigate } from 'react-router-dom';

function WithRouter(Component) {

  const WrapperComponent = (props) => {
    const navigate = useNavigate();
    return <Component navigate={navigate} {...props} />;
  };

  return WrapperComponent;
}

export default WithRouter;
