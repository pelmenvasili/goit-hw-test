import PropTypes from 'prop-types';
import css from './CardItem.module.css';
import Button from '../Button/Button';
import logoImage from './images/logo.svg';
import backgroundImage from './images/background-picture.png';
import elipseImage from './images/elipse.png';
import rectangleImage from './images/rectangle.png';

function CardItem({ user, addComma, onButtonClick }) {
  return (
    <li key={user.id} className={css.cardContainer}>
    <img src={logoImage} alt="logo" className={css.logo} />
      <img src={backgroundImage} alt="background" />
      <img src={rectangleImage} alt="rectangle" className={css.rectangle} />
      <img src={elipseImage} alt="elipse" className={css.elipse} />
      <img src={user.avatar} alt="avatar" width="62" height="62" className={css.avatar} />
      <p className={`${css.text} ${css.nickname}`}>{user.user}</p>
      <p className={css.text}>{user.tweets} tweets</p>
      <p className={css.text}>{addComma(user.followers)} followers</p>
      <Button
        text={user.isFollowing ? 'Following' : 'Follow'}
        isFollowing={user.isFollowing}
        onClick={() => onButtonClick(user.id)}
      />
    </li>
  );
}

CardItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    isFollowing: PropTypes.bool,
  }).isRequired,
  addComma: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default CardItem;