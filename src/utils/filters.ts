import { ICityWeather } from "../types/weather-types"


const compareLists = (cityConditions: string[], filterConditions: string[]) => {
  /* eslint-disable-next-line */
  for (const item of filterConditions) {
    if (!cityConditions.includes(item)) {
      return false;
    }
  }
  return true
}

interface ConditionWeatherCityFilter {
  weatherCities: ICityWeather[],
  filterConditions: string[]
}


export const filterWeatherCitiesByConditions = ({weatherCities, filterConditions}: ConditionWeatherCityFilter) =>
  weatherCities.filter((item) => compareLists(item.conditions, filterConditions) )
