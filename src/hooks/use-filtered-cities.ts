import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { filterCitiesByWeatherCities } from "../utils/filters";
import { ICityItem } from "../types/city-types";
import { ICityWeather } from "../types/weather-types";
import { ReducerType } from "../store/store";
import { useGetCitiesQuery } from "../store/cities-reducer-api/cities-reducer-api";


export interface UseFilteredCities {
  cities?: ICityItem[],
  weatherCityList: ICityWeather[]
}

export const useFilteredCities = () => {
  const {sortChecked, inputCityPrefix, cityWeatherIds} = useSelector((state: ReducerType) => state.citiesSlice);
  const {data, isError} = useGetCitiesQuery(
    {namePrefix: inputCityPrefix, sortDirection: sortChecked},
    {skip: inputCityPrefix.length < 1}
    )

  const [filteredCities, setFilteredCities] = useState<ICityItem[]>([]);

  useEffect(() => {
    if (data) {
      setFilteredCities(filterCitiesByWeatherCities({cities: data, cityWeatherIds}))
    }
  }, [data, cityWeatherIds])

  return {filteredCities, isError}
}
