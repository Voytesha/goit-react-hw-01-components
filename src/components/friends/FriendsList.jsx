import friendsCss from './Friends.module.css';
import PropTypes from 'prop-types';

export const FriendsList = ({ friends }) => {
  return (
    <ul className={friendsCss.list}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li className={friendsCss.item} key={id}>
            <span
              className={
                isOnline ? friendsCss.statusGreen : friendsCss.statusRed
              }
            >
              {isOnline}  
            </span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
          </li>
        );
      })}
    </ul>
  );
};
FriendsList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  friends: PropTypes.arrayOf(PropTypes.object),
};
