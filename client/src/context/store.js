import { createContext, useState } from 'react';

let timerId;

const NotificationContext = createContext({
    data: { show: false, message: '' },
    setMessage: function (message) {}
});

export function NotificationContextProvider(props) {
    const [data, setData] = useState({ show: false, message: '' });

    function setMessage(message) {
        timerId = setTimeout(() => {
            clearTimeout(timerId);
            setData({ show: false, message: '' });
        }, 5000);
        setData({ show: true, message });
    }

    const context = { data, setMessage };
    return <NotificationContext.Provider value={context}>{props.children}</NotificationContext.Provider>;
}

export default NotificationContext;
