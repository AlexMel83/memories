import uploadsRouteInit from './uploads.routes.js';
import authRouteInit from './auth.routes.js';
import memoriesRouteInit from './memories.routes.js';

const routeInit = (app, express) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  authRouteInit(app);
  memoriesRouteInit(app);
  uploadsRouteInit(app);
};

export default routeInit;
