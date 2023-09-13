import { emptyCityWeather } from "../const";
import { ICityWeather } from "../types/weather-types"

interface InsertEmptyWeatherCardToList {
  originList: ICityWeather[],
  cityId: number,
  underEmptyWeatherCityId: number|null,
  position: string
}

/**
 * удаляет пустой город из ICityWeather[]
 * @param param0
 * @returns
 */
// export const deleteEmptyWeatherCityFromList = ({originList}: {originList: ICityWeather[]}) => {
//   const cityIndex = originList.findIndex((item) => item.cityId === -1);
//   if (cityIndex === -1) return originList;
//   const newList = [...originList.slice(0, cityIndex), ...originList.slice(cityIndex+1)]
//   return newList;
// }

export const deleteEmptyWeatherCityFromList = ({originList}: {originList: ICityWeather[]}) => {
  const newList = originList.filter((item) => item.cityId !== -1)
  return newList;
}



/**
 * вставляет пустой город в ICityWeather[] по cityId
 * @param param0
 * @returns
 */
// export const insertEmptyWeatherCityToList = ({originList, cityId, underEmptyWeatherCityId, position}: InsertEmptyWeatherCardToList) => {
//   const cityIndex = originList.findIndex((item) => item.cityId === cityId);
//   if (cityIndex === -1 || cityId === underEmptyWeatherCityId) return originList;
//   const noEmptyList = deleteEmptyWeatherCityFromList({originList});
//   const insertIndex = position === 'top' ? cityIndex : cityIndex + 1;
//   console.log({insertIndex})
//   const newList = [...noEmptyList.slice(0, insertIndex), emptyCityWeather, ...noEmptyList.slice(insertIndex)]
//   return newList;
// }

export const insertEmptyWeatherCityToList = ({originList, cityId, underEmptyWeatherCityId, position}: InsertEmptyWeatherCardToList) => {
  const noEmptyList = deleteEmptyWeatherCityFromList({originList});
  const cityIndex = noEmptyList.findIndex((item) => item.cityId === cityId);
  if (cityIndex === -1 || cityId === underEmptyWeatherCityId) return originList;

  const insertIndex = position === 'top' ? cityIndex : cityIndex + 1;
  console.log({insertIndex})
  const newList = [...noEmptyList.slice(0, insertIndex), emptyCityWeather, ...noEmptyList.slice(insertIndex)]
  return newList;
}



