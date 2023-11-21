import { useSelector } from 'hooks/useSelector';
import { HomeStyled } from './styles';
import { Gallery } from 'components';
import { Navigate } from 'react-router-dom';
import { useGetPhotosQuery } from 'store/api/authApi';

const Home = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  const { data } = useGetPhotosQuery();

  return (
    <>
      {isAuth ? (
        <HomeStyled>
          <Gallery photos={data} />
        </HomeStyled>
      ) : (
        <Navigate to={{ pathname: '/login' }} />
      )}
    </>
  );
};

export default Home;
