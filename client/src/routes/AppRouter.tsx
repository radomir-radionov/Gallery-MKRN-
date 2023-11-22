import {
  BrowserRouter as Router,
  Routes,
  Route,
  redirect,
} from 'react-router-dom';
import { Home, Login, Loyaut, Registration } from 'pages';
import { useSelector } from 'hooks/useSelector';
import { useEffect } from 'react';
import { useAuthQuery } from 'store/api/api';

const AppRouter = () => {
  const isAuth = useSelector((state) => state.app.isAuth);
  const token = localStorage.getItem('token') || '';

  const authQuery = useAuthQuery(undefined, {
    skip: !token,
  });

  useEffect(() => {
    if (!isAuth) redirect('/login');

    if (token && !authQuery.data) {
      authQuery.refetch();
    }
  }, [isAuth, token]);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Loyaut />}>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
