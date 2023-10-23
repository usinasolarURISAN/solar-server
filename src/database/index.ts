export * from './dataSources';
import { MainDataSource, WeatherDataSource } from './dataSources';

export const initializeAllDatabases = async () => {
  try {
    await MainDataSource.initialize();
    await WeatherDataSource.initialize();
  } catch (err) {
    console.log('Error on initializeAllDatabases:');
    console.log(err);
  }
};
