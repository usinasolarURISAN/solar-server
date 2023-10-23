import { validateDeviceDataKeys, validateDeviceId } from './devices';
import { validateTimeBasedInterval } from './time';

export const validateGetGenericDeviceDataRequestBody = (
  body: Partial<GenericDataEndpointDefaultRequestBody>,
  device: Devices
) => {
  if (!body) return false;

  if (!validateDeviceId(body.deviceId)) return false;

  if (!validateDeviceDataKeys(body.dataKeys, device)) return false;

  if (!validateTimeBasedInterval(body.interval)) return false;

  return true;
};
