import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { getCurrentEnvironment } from '../utils';

const currentTable = `${getCurrentEnvironment()}-weather`;

@Entity(currentTable)
class Weather {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  weather_id: number;

  @Column()
  weather_main: string;

  @Column()
  weather_description: string;

  @Column()
  weather_icon: string;

  @Column()
  main_temp: number;

  @Column()
  main_tempMin: number;

  @Column()
  main_tempMax: number;

  @Column()
  main_pressure: number;

  @Column()
  main_humidity: number;

  @Column()
  visibility: number;

  @Column()
  wind_speed: number;

  @Column()
  wind_deg: number;

  @Column()
  clouds_all: number;

  @Column()
  api_code: number;

  @Column()
  api_message: string;

  @Column()
  readonly timestamp: number;

  @Column()
  readonly timestamp_minute: number;

  @Column()
  readonly timestamp_hour: number;

  @Column()
  readonly timestamp_date: number;

  @Column()
  readonly timestamp_month: number;

  @Column()
  readonly timestamp_year: number;

  constructor() {
    const timestamp = Number(new Date());
    const timestampObject = new Date(timestamp);

    if (!this.id) {
      this.id = uuid();
      this.timestamp = timestamp;
      this.timestamp_minute = timestampObject.getMinutes();
      this.timestamp_hour = timestampObject.getHours();
      this.timestamp_date = timestampObject.getDate();
      this.timestamp_month = timestampObject.getMonth() + 1;
      this.timestamp_year = timestampObject.getFullYear();
    }
  }
}

export { Weather };
