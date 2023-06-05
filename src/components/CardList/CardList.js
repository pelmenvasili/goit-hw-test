import PropTypes from 'prop-types';
import CardItem from '../CardItem/CardItem';
import css from './CardList.module.css';
import Loader from '../Loader/Loader';

function CardList({ users, addComma, onButtonClick, isLoading }) {

  return (
    <>
  {isLoading && <Loader/>}
    <ul className={css.container}>
      {users.map((user) => (
        <CardItem key={user.id} user={user} addComma={addComma} onButtonClick={onButtonClick} />
      ))}
      </ul>
    </>
  );
}

CardList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      tweets: PropTypes.number.isRequired,
      followers: PropTypes.number.isRequired,
      isFollowing: PropTypes.bool,
    })
  ).isRequired,
  addComma: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default CardList;