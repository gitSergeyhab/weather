import { ICityWeather } from "./types/weather-types";

export const GEO_DB_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
export const GEO_DB_API_KEY = 'eb1ae116f7msh7396973c512dd66p16b1c6jsn92a17afd11e5';
export const GEO_DB_API_HOST = 'wft-geo-db.p.rapidapi.com';
export const  OPEN_WEATHER_API_KEY = 'fc0aefbd1cdb4db096f3791ebe1a7687';
export const OPEN_WEATHER_API_URL = 'http://api.openweathermap.org/data/2.5'

export const MIN_CITY_POPULATION = 400000;

export const iconSortTypes = ['arrow-down', 'arrow-up']
// export const iconFilterTypes = ['rainy','sunny', 'cloudy', 'snowy', 'stormy', 'blizzard', /* 'meteorite', */ 'mist', 'drizzle'];
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

export const EMPTY_CONDITION = 'EMPTY_CONDITION'

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


// MAP
export const MAP_BALLOON_ID = `balloon-id`;

export const MAP_CITY_OPTIONS = {
  minHeight: 200,
  minWidth: 300,
  preset: 'islands#nightStretchyIcon', // список темплейтов на сайте яндекса
}

export const mapSetting = {
  options: { maxZoom: 10, minZoom: 3},
  modules: [
    'geoObject.addon.balloon',
    'geoObject.addon.hint'
  ],
  zoom: 4
}

export const Color = {
  SupperLow: `rgb(103, 1, 140)`,
  Lowest: `rgb(25, 1, 110)`,
  Low: `rgb(1, 14, 110)`,
  MiddleLow: `rgb(1, 54, 110)`,
  Middle: 'rgb(1, 110, 114)',
  MiddleHigh: 'rgb(37, 148, 0)',
  High: 'rgb(242, 250, 0)',
  Highest: 'rgb(255, 170, 0)',
  Supper: 'rgb(179, 30, 0)',
}


export const RED = [100, 25, 1, 1, 1, 35, 240, 255, 180];
export const GREEN = [1, 1, 1, 1, 110, 150, 250, 170, 30];
export const BLUE = [180, 150, 120, 90, 60, 30, 0, 0, 0];


const getMeddleDigit = (max: number, min: number, fraction: number) => {
  const range = max - min;
  return Math.round(min + fraction * range);
}

const getMaxMinDigit = (numbers: number[], minPoint: number, maxPoint: number) => {
  const [minDigit, maxDigit] = [numbers[minPoint], numbers[maxPoint]];
  return {minDigit, maxDigit}

}

const getOneColor = (min: number, max: number, current: number, digits: number[], length: number) => {
  if (current < min) return digits[0];
  if (current > max) return digits[length-1];
  const range = max - min;
  const value = current - min;
  const point = value / range * length;
  const [minPoint, maxPoint] = [Math.floor(point), Math.ceil(point)];
  const {maxDigit, minDigit} = getMaxMinDigit(digits, minPoint, maxPoint);
  const fraction = point - minPoint;
  const middleDigit = getMeddleDigit(maxDigit, minDigit, fraction);
  return middleDigit;
}


interface GetRGB {
  min: number,
  max: number,
  current: number,
  red: number[],
  green: number[],
  blue: number[]
}
export const getRGB = ({min, max, current, blue, green, red}: GetRGB) => {
  const colorDigits = [red, green, blue]
    .map((item) => getOneColor(min, max, current, item, blue.length));
  return `rgb(${colorDigits.join(', ')})`
}
