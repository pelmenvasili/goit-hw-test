import { Link } from 'react-router-dom';
import css from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={css.navbar}>
      <ul className={css.navbarNav}>
        <li className={css.navItem}>
          <Link to="/" className={css.navLink}>
            Home
          </Link>
        </li>
        <li className={css.navItem}>
          <Link to="/tweets" className={css.navLink}>
            Tweets
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
