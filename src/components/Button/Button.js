import PropTypes from 'prop-types';
import css from './Button.module.css';

function Button({ text, isFollowing, onClick }) {
  return (
    <button
      type="button"
      className={`${css.followBtn} ${isFollowing ? css.followingBtn : ''}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default Button;
