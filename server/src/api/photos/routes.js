import routesData from '../../constants/routes.js';
import photosHandlers from './handlers.js';
import jwtAuthenticater from '../../middlewares/authMiddleware.js';

const {
  photosRoutes: { photos },
} = routesData;

const routes = [
  {
    path: photos,
    method: 'get',
    action: async (ctx, next) => {
      await jwtAuthenticater(ctx, async () => {
        await photosHandlers.getPhotos(ctx, next);
      });
    },
  },
];

export default routes;
