import { EMPTY_CONDITION } from "../const";
import { ICityItem } from "../types/city-types";
import { ICityWeather } from "../types/weather-types"


const compareLists = (cityConditions: string[], filterConditions: string[]) => {
  /* eslint-disable-next-line */
  for (const item of filterConditions) {
    if (!cityConditions.includes(item) && !cityConditions.includes(EMPTY_CONDITION)) {
      return false;
    }
  }
  return true
}

interface ConditionWeatherCityFilter {
  weatherCities: ICityWeather[],
  filterConditions: string[]
}

/**
 * фильтр. оставляет только города weatherCities со всеми filterConditions и пустой город (с EMPTY_CONDITION)
 * @param param0
 * @returns
 */
export const filterWeatherCitiesByConditions = ({weatherCities, filterConditions}: ConditionWeatherCityFilter) =>
  weatherCities.filter((item) => compareLists(item.conditions, filterConditions) )


  interface FilterCityByWeatherCities {
    cities: ICityItem[],
    weatherCities: ICityWeather[]
  }

  export const filterCitiesByWeatherCities = ({cities, weatherCities}: FilterCityByWeatherCities) => {
    const weatherCitiesId = weatherCities.map((item) => item.cityId)
    return cities.filter((item) => !weatherCitiesId.includes(item.id))
  }
