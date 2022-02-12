import { useContext } from 'react';
// import { useSelector } from 'react-redux';
import NotificationContext from '../../context/store';
import './notification.styles.css';

function Notification() {
    // const {show, message} = useSelector((state) => state.notification);
    // if (!show) return null;
    // return (
    //   <div className="notification notification-success">
    //     <span>{message}</span>
    //   </div>
    // );

    const { data } = useContext(NotificationContext);

    if (!data.show) return null;

    return (
        <div className="notification notification-success">
            <span>{data.message}</span>
        </div>
    );
}

export default Notification;
