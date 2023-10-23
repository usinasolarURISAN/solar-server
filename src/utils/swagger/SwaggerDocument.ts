import swaggerJSDoc from 'swagger-jsdoc';
import { getCurrentVersion } from '../helpers';

export const GenerateSwaggerDocument = () => {
  let options: swaggerJSDoc.Options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Solar API',
        version: getCurrentVersion(),
      },
    },
    apis: ['./src/routes*.ts'],
  };
  return swaggerJSDoc(options);
};
