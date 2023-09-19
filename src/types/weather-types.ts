export const iconFilterTypes = ['sunny', 'cloudy', 'drizzle', 'mist',  'rainy', 'snowy', 'stormy', 'blizzard'];


export const enum Condition {
  Clear = 'sunny',
  Clouds = 'cloudy',
  Drizzle = 'drizzle',
  Atmosphere = 'mist',
  Rain = 'rainy',
  Snow = 'snowy',
  Thunderstorm = 'stormy',
  AtmosphereTornado = 'blizzard',
}

export interface Clouds {
  all: number;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface Main {
  temp:       number;
  feels_like: number;
  temp_min:   number;
  temp_max:   number;
  pressure:   number;
  humidity:   number;
  sea_level:  number;
  grnd_level: number;
}

export interface Precipitation {
  "1h"?: number;
  "3h"?: number;
}

export interface Sys {
  type:    number;
  id:      number;
  country: string;
  sunrise: number;
  sunset:  number;
}


export interface Weather {
  id:          number;
  main:        string;
  description: string;
  icon:        string;
}

export interface Wind {
  speed: number;
  deg:   number;
  gust:  number;
}

export interface WeatherType {
  coord:      Coord;
  weather:    Weather[];
  base:       string;
  main:       Main;
  visibility: number;
  wind:       Wind;
  rain?:      Precipitation;
  snow?:      Precipitation;
  clouds:     Clouds;
  dt:         number;
  sys:        Sys;
  timezone:   number;
  id:         number;
  name:       string;
  cod:        number;
}


export interface IWeather {
  id: number,
  conditions: string[],
  temp: number,
  windSpeed: string,
  direction: string,
  dt: number
}

export interface ICityWeather extends IWeather {
  cityId: number,
  cityName: string
  countryName: string,
  coordinates: number[],
  speed: number;
  gust:  number;
}

export interface ForecastDate {
  list: WeatherType[]
}



export interface IForecast {
  conditions: string[],
  direction: string,
  id: number,
  temp: number,
  gust: number,
  speed: number,
  stringDate: string,
  pressure: number,
  precipitation: number
}
