import routesData from '../../constants/routes.js';
import jwtAuthenticater from '../../middlewares/authMiddleware.js';
import commentsHandlers from './handlers.js';

const {
  commentsRoutes: { comments, comment },
} = routesData;

const routes = [
  {
    path: comments,
    method: 'post',
    action: async (ctx, next) => {
      await jwtAuthenticater(ctx, async () => {
        await commentsHandlers.addComment(ctx, next);
      });
    },
  },
  {
    path: comment,
    method: 'delete',
    action: async (ctx, next) => {
      await jwtAuthenticater(ctx, async () => {
        await commentsHandlers.deleteComment(ctx, next);
      });
    },
  },
];

export default routes;
