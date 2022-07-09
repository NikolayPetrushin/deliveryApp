import style from "./Header.module.css";
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className={style.header}>
        <ul>
           <li><NavLink to='/'>Shop</NavLink></li>
           <li><NavLink to='cart'>Shopping Cart</NavLink></li>
           </ul>
    </header>
  );
};

export default Header;
