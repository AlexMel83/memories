import uploadsRouteInit from './uploads.routes.js';
import authRouteInit from './auth.routes.js';

const routeInit = (app, express) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  authRouteInit(app);
  uploadsRouteInit(app);
};

export default routeInit;
