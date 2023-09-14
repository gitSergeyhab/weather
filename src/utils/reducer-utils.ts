import { CityWeatherPosition, emptyCityWeather } from "../const";
import { ICityWeather } from "../types/weather-types"


/**
 * удаляет пустой город из ICityWeather[]
 * @param param0
 * @returns
 */
export const deleteEmptyWeatherCityFromList = ({originList}: {originList: ICityWeather[]}) => {
  const newList = originList.filter((item) => item.cityId !== -1)
  return newList;
}


interface InsertEmptyWeatherCardToList {
  originList: ICityWeather[],
  dragCityId: number,
  dragCityPosition: CityWeatherPosition
  prevCityId: number|null,
  prevCityPosition: CityWeatherPosition,
}

/**
 * вставляет пустой город в ICityWeather[] по cityId
 * @param param0
 * @returns
 */
export const insertEmptyWeatherCityToList = ({originList, dragCityId, dragCityPosition, prevCityId, prevCityPosition}: InsertEmptyWeatherCardToList) => {
  const noEmptyList = deleteEmptyWeatherCityFromList({originList});
  const cityIndex = noEmptyList.findIndex((item) => item.cityId === dragCityId);
  if (cityIndex === -1 || (dragCityId === prevCityId && dragCityPosition === prevCityPosition)) return originList;

  const insertIndex = dragCityPosition === CityWeatherPosition.Top ? cityIndex : cityIndex + 1;
  console.log({insertIndex})
  const newList = [...noEmptyList.slice(0, insertIndex), emptyCityWeather, ...noEmptyList.slice(insertIndex)]
  return newList;
}


