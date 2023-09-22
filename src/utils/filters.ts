import { EMPTY_CONDITION } from "../const/const";
import { ICityItem } from "../types/city-types";
import { ICityWeather } from "../types/weather-types"


const compareLists = (cityConditions: string[], filterConditions: string[]) => {
  /* eslint-disable-next-line */
  for (const item of filterConditions) {
    if (!cityConditions.includes(item) && !cityConditions.includes(EMPTY_CONDITION)) {
      return false;
    }
  }
  return true;
}

interface ConditionWeatherCityFilter {
  weatherCityList: ICityWeather[],
  filterChecked: string[]
}


/**
 * фильтр. оставляет только города weatherCities со всеми filterConditions и пустой город (с EMPTY_CONDITION)
 * @param param0
 * @returns
 */
export const filterWeatherCitiesByConditions = ({weatherCityList, filterChecked}: ConditionWeatherCityFilter) =>
weatherCityList.filter((item) => compareLists(item.conditions, filterChecked));


export interface FilterCityByWeatherCities {
    cities: ICityItem[],
    cityWeatherIds: number[]
  }

  // export const filterCitiesByWeatherCities = ({cities, weatherCityList}: FilterCityByWeatherCities) => {
  //   const weatherCitiesId = weatherCityList.map((item) => item.cityId);
  //   return cities.filter((item) => !weatherCitiesId.includes(item.id));
  // }


  export const filterCitiesByWeatherCities = ({cities, cityWeatherIds}: FilterCityByWeatherCities) =>
    cities.filter((item) => !cityWeatherIds.includes(item.id))
