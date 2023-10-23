import 'reflect-metadata';
import { initializeAllDatabases } from '../../database';
import './environment';

const bootstrap = async () => {
  await initializeAllDatabases();
};

export default bootstrap;
