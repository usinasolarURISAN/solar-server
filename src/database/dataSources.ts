import { DataSource } from 'typeorm';
import { Epever, Goodwe, Weather } from '../models';

export const MainDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'solar_reader',
  password: '87g2387geg7qr38a7h276rg9763rg',
  database: 'solar',
  entities: [Epever, Goodwe],
  logging: true,
});

export const WeatherDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'weather_reader',
  password: 'zsa87rg30a387uygdf9a763gadusyflkjnrj2np3r3fqff98nag4',
  database: 'solar',
  entities: [Weather],
  logging: true,
});
