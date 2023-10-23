/**
 * You can pass a generic type to define the return type which can be `Environments` or `Devices`
 * @param variable its one of `EnvironmentVariables` type
 * @returns generic type
 */
export const getEnvironmentVariable = <T>(variable: EnvironmentVariables): T =>
  process.env[variable] as unknown as T;

/**
 * Get current environment. Basically calls `getEnvironmentVariable` under de hood.
 * @returns current environment
 */
export const getCurrentEnvironment = () =>
  getEnvironmentVariable<Environments>('NODE_ENV') || 'dev';

export const getCurrentVersion = () =>
  getEnvironmentVariable<Version>('VERSION') || '1.0.0';
