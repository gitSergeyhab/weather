import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { filterWeatherCitiesByConditions } from "../utils/filters";
import { ICityItem } from "../types/city-types";
import { ICityWeather } from "../types/weather-types";
import { ReducerType } from "../store/store";


export interface UseFilteredCities {
  cities?: ICityItem[],
  weatherCityList: ICityWeather[]
}

export const useFilteredWeatherCities = () => {
  const [filteredWeatherCities, setFilteredWeatherCities] = useState<ICityWeather[]>([])
  const {weatherCityList, filterChecked} = useSelector((state: ReducerType) => state.contentSlice);

  useEffect(() => {
    setFilteredWeatherCities(filterWeatherCitiesByConditions({ weatherCityList,  filterChecked }))
  }, [weatherCityList, filterChecked])

  return filteredWeatherCities
}
