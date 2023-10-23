import { FindManyOptions } from 'typeorm/find-options/FindManyOptions';
import { WeatherDataSource } from '../database';
import { Weather } from '../models';
import { AVAILABLE_TIME_INTERVALS_METADATA } from '../utils';

class WeatherController {
  async fetchWeatherData(interval: TimeBasedIntervals) {
    /**
     * Remember... data only gets to the production only at 7's and 2's, so be aware that the weather
     * data will be always available before the devices data.
     */
    const thresholdData = 2;

    const defaultOptions: FindManyOptions<Weather> = {
      select: {
        weather_icon: true,
        timestamp_date: true,
        timestamp_hour: true,
        timestamp_minute: true,
        timestamp_month: true,
        timestamp_year: true,
      },
      take:
        AVAILABLE_TIME_INTERVALS_METADATA[interval].totalRegistersReturn +
        thresholdData,
      order: {
        timestamp: 'DESC',
      },
    };
    try {
      const all = await WeatherDataSource.manager.find(Weather, defaultOptions);

      console.log(`[WEATHER CONTROLLER] - Fetched ${all.length} weather data`);

      return all;
    } catch (error) {
      throw error;
    }
  }

  async appendWeatherData(deviceData: any[], interval: TimeBasedIntervals) {
    try {
      const appendData = [];
      const weatherData = await this.fetchWeatherData(interval);

      for (let index = 0; index < deviceData.length; index++) {
        const deviceElement = deviceData[index];
        const device_timestamp_date = new Date(
          Number(deviceElement.timestamp)
        ).getDate();
        const device_timestamp_hour = new Date(
          Number(deviceElement.timestamp)
        ).getHours();
        const device_timestamp_minute = new Date(
          Number(deviceElement.timestamp)
        ).getMinutes();
        const device_timestamp_month =
          new Date(Number(deviceElement.timestamp)).getMonth() + 1;
        const device_timestamp_year = new Date(
          Number(deviceElement.timestamp)
        ).getFullYear();

        for (let index0 = 0; index0 < weatherData.length; index0++) {
          const weatherElement = weatherData[index0];

          if (
            String(device_timestamp_date) ===
              String(weatherElement.timestamp_date) &&
            String(device_timestamp_hour) ===
              String(weatherElement.timestamp_hour) &&
            String(device_timestamp_minute) ===
              String(weatherElement.timestamp_minute) &&
            String(device_timestamp_month) ===
              String(weatherElement.timestamp_month) &&
            String(device_timestamp_year) ===
              String(weatherElement.timestamp_year)
          ) {
            appendData.push({
              weather: weatherElement.weather_icon || '02dw',
              ...deviceElement,
            });
            break;
          }
        }
      }

      console.log(
        `[WEATHER CONTROLLER] - Appended ${appendData.length} weather data`
      );

      return appendData;
    } catch (error) {
      throw error;
    }
  }
}

export { WeatherController };
