import css from '../Button/Button.module.css';

function LoadMoreButton({ onClick, showLoadMore }) {
  return (
    <>
      {showLoadMore && <button onClick={onClick} className={css.loadMoreBtn}>Load More</button>}
    </>
  );
}

export default LoadMoreButton;