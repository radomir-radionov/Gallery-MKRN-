import { useSelector } from 'hooks/useSelector';
import { useDispatch } from 'react-redux';
import { appActions } from 'store/redux/app';
import { Link, NavbarStyled } from './styles';

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.app.isAuth);

  const handleLogoutClick = () => dispatch(appActions.logout());

  return (
    <NavbarStyled>
      {isAuth ? (
        <Link to='/login' onClick={handleLogoutClick}>
          Выход
        </Link>
      ) : (
        <div>
          <Link to='/login'>Войти</Link>
          <Link to='/registration'>Регистрация</Link>
        </div>
      )}
    </NavbarStyled>
  );
};

export default Navbar;
