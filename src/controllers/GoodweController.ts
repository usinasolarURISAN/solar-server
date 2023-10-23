import { Request, Response } from 'express';
import { MainDataSource } from '../database';
import { Goodwe } from '../models';
import {
  AVAILABLE_TIME_INTERVALS_METADATA,
  DefaultErrorPayload,
  granularityChecker,
  validateGetGenericDeviceDataRequestBody,
} from '../utils';
import { WeatherController } from './WeatherController';

const wc = new WeatherController();

class GoodweController {
  async getGenericData(request: Request, response: Response) {
    try {
      const body =
        request.body as GenericDataEndpointDefaultRequestBody<GoodweDataKeys>;

      if (!validateGetGenericDeviceDataRequestBody(body, 'goodwe')) {
        throw new DefaultErrorPayload('VL000000');
      }

      const { dataKeys, deviceId, interval } = body;

      const all = await MainDataSource.manager.find(Goodwe, {
        select: dataKeys,
        where: {
          deviceId,
        },
        take: AVAILABLE_TIME_INTERVALS_METADATA[interval].totalRegistersReturn,
        order: {
          timestamp: 'DESC',
        },
      });

      console.log(
        `[GOODWE CONTROLLER] - Found ${all.length} epever data for device ${deviceId}`
      );

      const appendedData = await wc.appendWeatherData(all, interval);

      const filteredGranularity = appendedData.filter(({ timestamp }) =>
        granularityChecker(
          Number(timestamp),
          AVAILABLE_TIME_INTERVALS_METADATA[interval].granularityMinutes
        )
      );

      console.log(
        `[GOODWE CONTROLLER] - Filtered ${filteredGranularity.length} epever data for device ${deviceId}`
      );

      return response.json(filteredGranularity.reverse());
    } catch (error) {
      response.status(500).send(error);
    }
  }
}

export { GoodweController };
