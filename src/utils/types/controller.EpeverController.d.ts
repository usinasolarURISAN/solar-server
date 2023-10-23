/**
 * Defines the default type of payload for a generic data endpoint.
 *
 * On front, this model type is primarily used on chart rendering.
 */
declare type GenericDataEndpointDefaultResponseBody = {
  timestamp: number;
  weather: string;
};

/**
 * Defines the default request body to be handled on a generic endponit
 */
declare type GenericDataEndpointDefaultRequestBody<DataKeys = string> = {
  deviceId: string;
  dataKeys: DataKeys[];
  interval: TimeBasedIntervals;
};
