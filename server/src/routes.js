import authRoutes from './api/auth/routes.js';
import photosRoutes from './api/photos/routes.js';
import commentsRoutes from './api/comments/routes.js';

const AppRoutes = [...authRoutes, ...photosRoutes, ...commentsRoutes];

export default AppRoutes;
