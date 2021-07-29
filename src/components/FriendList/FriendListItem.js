import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={s.item}>
      <span
        className={s.status}
        style={{
          backgroundColor: isOnline ? 'green' : 'red',
          display: 'flex',
          height: 8,
          width: 8,
          borderRadius: 4,
        }}
      >
        {isOnline}
      </span>
      <img
        className={s.avatar}
        src={avatar}
        alt="Аватар пользователя"
        width="48"
      />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
