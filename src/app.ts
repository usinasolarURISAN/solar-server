import express from 'express';
import cors from 'cors';
import { CustomRouter } from './routes';
import { GenerateSwaggerDocument } from './utils';
import bootstrap from './utils/config/bootstrap';

bootstrap();
const app = express();
const swaggerDocument = GenerateSwaggerDocument();

app.use(express.json());

app.use(
  cors({
    origin: '*',
  })
);

app.use(
  CustomRouter({
    swagger: {
      enable: true,
      swaggerDoc: swaggerDocument,
    },
  })
);

export { app };
