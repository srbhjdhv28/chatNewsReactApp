import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return  <header className={classes.header}>
    <div className={classes.logo}>Chat News</div>
    <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/quotes' activeClassName={classes.active}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to='/new-quote' activeClassName={classes.active}>
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
}

export default Header;