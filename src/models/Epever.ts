import { Column, Entity, PrimaryColumn } from 'typeorm';
import { getCurrentEnvironment } from '../utils';

const currentTable = `${getCurrentEnvironment()}-epever`;

@Entity(currentTable)
class Epever {
  @PrimaryColumn()
  id: string;

  @Column()
  deviceId: string;

  @Column()
  overTemperatureInsideTheDevice: boolean;

  @Column()
  isNight: number;

  @Column()
  PVArrayInputVoltage: number;

  @Column()
  PVArrayInputCurrent: number;

  @Column()
  PVArrayInputPowerL: number;

  @Column()
  PVArrayInputPowerH: number;

  @Column()
  loadVoltage: number;

  @Column()
  loadCurrent: number;

  @Column()
  loadPowerL: number;

  @Column()
  loadPowerH: number;

  @Column()
  batteryTemperature: number;

  @Column()
  deviceTemperature: number;

  @Column()
  batterySOC: number;

  @Column()
  batteryRealRatedVoltage: number;

  @Column()
  batteryStatus: string;

  @Column()
  chargingEquipmentStatus: string;

  @Column()
  dischargingEquipmentStatus: string;

  @Column()
  maximumBatteryVoltageToday: number;

  @Column()
  minimumBatteryVoltageToday: number;

  @Column()
  consumedEnergyTodayL: number;

  @Column()
  consumedEnergyTodayH: number;

  @Column()
  consumedEnergyThisMonthL: number;

  @Column()
  consumedEnergyThisMonthH: number;

  @Column()
  consumedEnergyThisYearL: number;

  @Column()
  consumedEnergyThisYearH: number;

  @Column()
  totalConsumedEnergyL: number;

  @Column()
  totalConsumedEnergyH: number;

  @Column()
  generatedEnergyTodayL: number;

  @Column()
  generatedEnergyTodayH: number;

  @Column()
  generatedEnergyThisMonthL: number;

  @Column()
  generatedEnergyThisMonthH: number;

  @Column()
  generatedEnergyThisYearL: number;

  @Column()
  generatedEnergyThisYearH: number;

  @Column()
  totalGeneratedEnergyL: number;

  @Column()
  totalGeneratedEnergyH: number;

  @Column()
  batteryVoltage: number;

  @Column()
  batteryCurrentL: number;

  @Column()
  batteryCurrentH: number;

  @Column()
  ratedChargingCurrent: number;

  @Column()
  ratedLoadCurrent: number;

  @Column()
  batteryType: string;

  @Column()
  batteryCapacity: number;

  @Column()
  temperatureCompensationCoefficient: number;

  @Column()
  chargingLimitVoltage: number;

  @Column()
  overVoltageReconnectVoltage: number;

  @Column()
  equalizeChargingVoltage: number;

  @Column()
  boostChargingVoltage: number;

  @Column()
  floatChargingVoltage: number;

  @Column()
  boostReconnectChargingVoltage: number;

  @Column()
  lowVoltageReconnectVoltage: number;

  @Column()
  underVoltageWarningRecoverVoltage: number;

  @Column()
  underVoltageWarningVoltage: number;

  @Column()
  lowVoltageDisconnectVoltage: number;

  @Column()
  dischargingLimitVoltage: number;

  @Column()
  batteryRatedVoltageLevel: string;

  @Column()
  defaultLoadOnOffInManualMode: boolean;

  @Column()
  equalizeDuration: number;

  @Column()
  boostDuration: number;

  @Column()
  batteryDischarge: number;

  @Column()
  batteryCharge: number;

  @Column()
  chargingMode: boolean;

  @Column()
  nightTimeThresholdVoltageNTTV: number;

  @Column()
  lightSignalStartupNightDelayTime: number;

  @Column()
  dayTimeThresholdVoltageDTTV: number;

  @Column()
  lightSignalCloseDayDelayTime: number;

  @Column()
  loadControlMode: string;

  @Column()
  LightOnTimeTime1: string;

  @Column()
  LightOnTimeTime2: string;

  @Column()
  timingControlTurnOnTime1Second: number;

  @Column()
  timingControlTurnOnTime1Minute: number;

  @Column()
  timingControlTurnOffTime1Second: number;

  @Column()
  timingControlTurnOffTime1Minute: number;

  @Column()
  timingControlTurnOffTime1Hour: number;

  @Column()
  timingControlTurnOnTime2Second: number;

  @Column()
  timingControlTurnOnTime2Minute: number;

  @Column()
  timingControlTurnOnTime2Hour: number;

  @Column()
  timingControlTurnOffTime2Second: number;

  @Column()
  timingControlTurnOffTime2Minute: number;

  @Column()
  timingControlTurnOffTime2Hour: number;

  @Column()
  nightTime: string;

  @Column()
  timingControlTimeChoose: number;

  @Column()
  realTimeClockSecondsMinutes: string;

  @Column()
  realTimeClockHourDay: string;

  @Column()
  realTimeClockMonthYear: string;

  @Column()
  batteryUpperTemperatureLimit: number;

  @Column()
  batteryLowerTemperatureLimit: number;

  @Column()
  deviceOverTemperature: number;

  @Column()
  deviceRecoveryTemperature: number;

  @Column()
  backlightTime: number;

  @Column()
  arrayRatedVoltage: number;

  @Column()
  arrayRatedCurrent: number;

  @Column()
  arrayRatedPowerL: number;

  @Column()
  arrayRatedPowerH: number;

  @Column()
  batteryRatedVoltage: number;

  @Column()
  batteryRatedCurrent: number;

  @Column()
  batteryRatedPowerL: number;

  @Column()
  batteryRatedPowerH: number;

  @Column()
  ratedLoadVoltage: number;

  @Column()
  ratedLoadPowerToL: number;

  @Column()
  ratedLoadPowerToH: number;

  @Column()
  timestamp: number;

  @Column()
  timestamp_minute: number;

  @Column()
  timestamp_hour: number;

  @Column()
  timestamp_date: number;

  @Column()
  timestamp_month: number;

  @Column()
  timestamp_year: number;
}

export { Epever };
