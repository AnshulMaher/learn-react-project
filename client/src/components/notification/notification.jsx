import { useSelector } from 'react-redux';
import './notification.styles.css';

function Notification() {
  const {show, message} = useSelector((state) => state.notification);
  if (!show) return null;

  return (
    <div className="notification notification-success">
      <span>{message}</span>
    </div>
  );
}

export default Notification;
