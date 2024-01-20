import './styles.scss';
import arrow from '../../images/arrow.png';
import logo from '../../images/avocado.png';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  console.log(location);

  const locationPath = () => {
    if (location.pathname === '/physical') {
      return '/destructive';
    } else
    if (location.pathname === '/destructive') {
      return '/weight';
    } else
    if (location.pathname === '/weight') {
      return '/';
    } else
    if (location.pathname === '/') {
      return '/';
    }
  }

  return (
    <header className='header'>
      <div className='header__content'>
        <Link to={`${locationPath()}`} className='header__link'>
          <img className='header__arrow' src={arrow} alt="arrow" />
        </Link>
        <img className='header__logo' src={logo} alt="logo" />
        <p className="header__desc">Food Mentor</p>
      </div>
    </header>
  )
}

export default Header;
