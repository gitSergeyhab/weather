import { conditionCodes } from "../const"

const CIRCLE_DEG = 360;
const WIND_DIRECTIONS = ['С', 'СВ', 'В', 'ЮВ','Ю', 'ЮЗ','З', 'СЗ',];
const UNKNOWN = 'unknown'

export const round1 = (num: number) => Math.round(num * 10) / 10;

export const getSimpleConditionCode = () => Object.entries(conditionCodes).reduce((acc, [name, list]) => {
    list.forEach((code) => acc[code] = name);
    return acc;
  }, {} as {[key:number]: string})


export const getDirectionFromDeg = (deg?: number) => {
  if (deg === undefined) {
    return UNKNOWN
  }

  const variantsCount = WIND_DIRECTIONS.length;
  for (
    let startDeg = -CIRCLE_DEG / variantsCount / 2, windDirectionIndex = 0;
    startDeg<CIRCLE_DEG && windDirectionIndex < variantsCount;
    startDeg+=CIRCLE_DEG / variantsCount, windDirectionIndex++
  ) {
      if (deg >= startDeg && deg < startDeg + CIRCLE_DEG / variantsCount) {
        return WIND_DIRECTIONS[windDirectionIndex];
      }
    }
  return WIND_DIRECTIONS[0]
}

export const getWindString = (speed?: number, gust?: number) => {
  if (speed === undefined) {
    return UNKNOWN;
  }

  if (gust === undefined) {
    return String(round1(speed));
  }

  return `${round1(speed)} (до ${round1(gust)})`;
}

export const getShownTemperature = (temp: number) => {
  const temperature = round1(temp)
  if (temp < -273) {
    return ''
  }
  if (!temperature) {
    return `${0  }°`;
  }
  return temperature > 0 ? `+${temperature}°` : `-${temperature}°`
}
