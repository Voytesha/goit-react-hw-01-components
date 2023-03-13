import profileCSS from './Profile.module.css';
import PropTypes from 'prop-types';
export const Profile = ({ username, tag, location, avatar, stats }) => {
    return <div className={profileCSS.profile}>
        <div className={profileCSS.description}>
            <img
                src={avatar}
                alt="User avatar"
                className={profileCSS.avatar}
            />
            <p className={profileCSS.name}>{username}</p>
            <p className={profileCSS.tag}>@{tag}</p>
            <p className={profileCSS.location}>{location}</p>
        </div>

        <ul className={profileCSS.stats}>
            <li>
                <span className={profileCSS.label}>Followers</span>
                <span className={profileCSS.quantity}>{stats.followers}</span>
            </li>
            <li>
                <span className={profileCSS.label}>Views</span>
                <span className={profileCSS.quantity}>{stats.views}</span>
            </li>
            <li>
                <span className={profileCSS.label}>Likes</span>
                <span className={profileCSS.quantity}>{stats.likes}</span>
            </li>
        </ul>
    </div>
}

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.object
}