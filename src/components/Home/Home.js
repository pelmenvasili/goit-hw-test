import { Link } from 'react-router-dom';
import css from './Home.module.css';

function Home() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Welcome to Twitter</h1>
      <p className={css.description}>
        This is an application where you can share your thoughts, follow
        interesting people, and stay updated on various events happening in your
        locality and around the world.
      </p>
      <Link to="/tweets" className={css.button}>
        View Tweets
      </Link>
    </div>
  );
}

export default Home;
