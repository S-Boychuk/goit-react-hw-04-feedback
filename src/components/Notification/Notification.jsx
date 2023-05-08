import css from './Notification.module.css';

const Notification = ({ message }) => {
  return <p className={css['notification-text']}>{message}</p>;
};

export default Notification;
