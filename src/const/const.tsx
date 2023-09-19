import { ICityWeather } from "../types/weather-types";


export const iconFilterTypes = ['sunny', 'cloudy', 'drizzle', 'mist', 'rainy','snowy', 'stormy', 'blizzard'];

export const enum CitySort {
  Name = 'population',
  NameReverse = '-population'
}

export const enum Condition {
  Clear = 'sunny',
  Clouds = 'cloudy',
  Drizzle = 'drizzle',
  Atmosphere = 'mist',
  Rain = 'rainy',
  Snow = 'snowy',
  Thunderstorm = 'stormy',
  Tornado = 'blizzard',
}


export const conditionCodes = {
  Thunderstorm: [200, 201, 202, 210, 211, 212, 221, 230, 231, 232],
  Drizzle: [300,301,302,310,311,312,313,314,321],
  Rain: [500,501, 502, 503,504,511,520,521,522,531],
  Snow: [600,601,602,611,612,613,615,616,620,621,622],
  Atmosphere: [701,711,721,731,741,751,761,762,771,781],
  Clear: [800],
  Clouds: [801,802,803,804],
  AtmosphereTornado: [771, 781]
}

export const enum DragArea {
  Cities = 'cities',
  Weather = 'weather',
  WeatherContainer = 'WeatherContainer',
  None = 'none'
}


export const enum  CityWeatherPosition {
  Top = 'top',
  Bottom = 'bottom',
  None = 'none'
}

export const enum ElementType {
  City = 'city',
  Weather = 'weather',
  None = 'none'
}

export const EMPTY_CONDITION = 'EMPTY_CONDITION';

export const emptyCityWeather: ICityWeather = {
  cityId: -1,
  cityName: '',
  conditions: [EMPTY_CONDITION],
  countryName: '',
  direction: '',
  id: -1,
  temp: -1000,
  windSpeed: '',
  coordinates: [],
  dt: 0,
  gust: 0,
  speed: 0
};


export const RED = [100, 25, 1, 1, 1, 35, 240, 255, 180];
export const GREEN = [1, 1, 1, 1, 110, 150, 250, 170, 30];
export const BLUE = [180, 150, 120, 90, 60, 30, 0, 0, 0];

