import { Router } from 'express';
import { EpeverController, GoodweController } from './controllers';
import * as SwaggerUi from 'swagger-ui-express';

interface ICustomRouterOptions {
  swagger: {
    swaggerDoc: Object;
    enable: boolean;
  };
}

const CustomRouter = (options: ICustomRouterOptions) => {
  const router = Router();

  if (options.swagger.enable) {
    router.use('/swagger', SwaggerUi.serve);
    router.get('/swagger', SwaggerUi.setup(options.swagger.swaggerDoc));
  }
  const epeverController = new EpeverController();
  const goodweController = new GoodweController();

  // GET
  router.post('/data/epever/generic', epeverController.getGenericData);
  router.post('/data/goodwe/generic', goodweController.getGenericData);

  /**
   * @openapi
   * /:
   *   get:
   *     description: Welcome to swagger-jsdoc!
   *     responses:
   *       200:
   *         description: Returns a mysterious string.
   */
  router.get('/surveys', () => console.log('mysterious string'));
  return router;
};
export { CustomRouter };
