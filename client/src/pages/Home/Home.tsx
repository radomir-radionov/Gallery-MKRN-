import { useSelector } from 'hooks/useSelector';
import { HomeStyled } from './styles';
import { Gallery } from 'components';
import { Navigate } from 'react-router-dom';

const Home = () => {
  const isAuth = useSelector((state) => state.app.isAuth);

  return (
    <>
      {isAuth ? (
        <HomeStyled>
          <Gallery />
        </HomeStyled>
      ) : (
        <Navigate to={{ pathname: '/login' }} />
      )}
    </>
  );
};

export default Home;
