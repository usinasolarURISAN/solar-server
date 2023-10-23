import { DATA_KEYS, KNOWN_DEVICES } from '../consts';
import { isOnlyNumbers, isOnlyNumbersAndLetters, isString } from './string';

/**
 * Validates a given param if is a valid device name.
 * @param device
 * @returns
 */
export const validateDevice = (device: string) => {
  if (!isString(device)) return false;
  if (!isOnlyNumbersAndLetters(device)) return false;

  for (let index = 0; index < KNOWN_DEVICES.length; index++) {
    const element = KNOWN_DEVICES[index];

    if (element === device) return true;
  }

  return false;
};

/**
 * Validates a given param of devices and return if they are all valid.
 * @param devices
 * @returns
 */
export const validateDevices = (devices: string[]) => {
  for (let index = 0; index < devices.length; index++) {
    const element = devices[index];

    if (!validateDevice(element)) return false;
  }

  return true;
};

/**
 * Validates a given param if is a valid device id.
 * @param deviceId
 * @returns
 */
export const validateDeviceId = (deviceId: string) => {
  if (!deviceId) return false;
  if (!isString(deviceId)) return false;
  if (!isOnlyNumbers(deviceId)) return false;
  if (deviceId.length > 15) return false;

  return true;
};

/**
 * Validates a given param of devicesId and return if they are all valid.
 * @param devices
 * @returns
 */
export const validateDeviceIds = (devices: string[]) => {
  for (let index = 0; index < devices.length; index++) {
    const element = devices[index];

    if (!validateDeviceId(element)) return false;
  }

  return true;
};

/**
 * Validates if a given param is a valid data key from a given device.
 * @param dataKey
 * @returns
 */
export const validateDataKey = (dataKey: string, device: Devices) => {
  if (!isString(dataKey)) return false;
  if (!isOnlyNumbersAndLetters(dataKey)) return false;

  for (let index = 0; index < DATA_KEYS[device].length; index++) {
    const deviceDataKey = DATA_KEYS[device][index];

    if (deviceDataKey === dataKey) {
      return true;
    }
  }

  return false;
};

/**
 * Validates if the given array param has all it's items as valid data key.
 * @param dataKeys
 * @returns
 */
export const validateDeviceDataKeys = (
  dataKeys: string[],
  device: Devices
): boolean => {
  if (!dataKeys) return false;

  for (let index = 0; index < dataKeys.length; index++) {
    const dataKey = dataKeys[index];

    if (validateDataKey(dataKey, device) === false) {
      return false;
    }
  }
  return true;
};
