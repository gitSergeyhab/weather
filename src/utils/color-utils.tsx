import { BLUE, GREEN, RED } from "../const";

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

export const getTemperatureColor = ({value} : {value: number}) => {
  const rgb = getRGB({min: -40, max: 50, current: value, blue: BLUE, green: GREEN, red: RED})
  return rgb;
}

export const getWindColor = ({value} : {value: number}) => {
  const rgb = getRGB({min: 0, max: 15, current: value,
    blue: [255, ...BLUE.slice(4)],
    green: [255, ...GREEN.slice(4)],
    red: [255, ...RED.slice(4)]})
  return rgb;
}

export const getGustColor = ({value} : {value: number}) => {
  const rgb = getRGB({min: 0, max: 25, current: value,
    blue: [255, ...BLUE.slice(4)],
    green: [255, ...GREEN.slice(4)],
    red: [255, ...RED.slice(4)]})
  return rgb;
}



export const getPressuresColor = ({value} : {value: number}) => {
  const rgb = getRGB({min: 700, max: 800, current: value,
    blue: BLUE,
    green: GREEN,
    red: RED})
  return rgb;
}

export const getPrecipitationsColor = ({value} : {value: number}) => {
  const rgb = getRGB({min: 0, max: 20, current: value,
    blue: [255, ...BLUE.slice(5)],
    green: [255, ...GREEN.slice(5)],
    red: [255, ...RED.slice(5)]})
  return rgb;
}
