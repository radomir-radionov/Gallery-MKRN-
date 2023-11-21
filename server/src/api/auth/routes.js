import routesData from '../../constants/routes.js';
import authHandlers from './handlers.js';

const {
  authRoutes: { registration, login, auth },
} = routesData;

const routes = [
  {
    path: registration,
    method: 'post',
    action: authHandlers.registration,
  },
  {
    path: login,
    method: 'post',
    action: authHandlers.login,
  },
  {
    path: auth,
    method: 'get',
    action: authHandlers.auth,
  },
];

export default routes;
