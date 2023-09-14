import { useDispatch, useSelector } from "react-redux"
import { DragEventHandler } from "react";
import { ReducerType } from "../../store/store"
import { CityItem } from "../city-item/city-item";
import { contentSlice } from "../../store/content-slice/content-slice";
import { DragArea } from "../../const";
import { setDragArea } from "../../store/dnd-slice/dnd-slice";
import { ICityItem } from "../../types/city-types";
import { ICityWeather } from "../../types/weather-types";

interface FilterCityByWeatherCities {
  cities: ICityItem[],
  weatherCities: ICityWeather[]
}

export const filterCitiesByWeatherCities = ({cities, weatherCities}: FilterCityByWeatherCities) => {
  const weatherCitiesId = weatherCities.map((item) => item.cityId)
  return cities.filter((item) => !weatherCitiesId.includes(item.id))
}


export function CitiesList () {

  const {cities, weatherCityList} = useSelector((state: ReducerType) => state[contentSlice.name]);
  const citiesElements = filterCitiesByWeatherCities({cities, weatherCities: weatherCityList})
    .map((item) => <CityItem key={item.id} city={item}/>)

  const dispatch = useDispatch()

  const handleDragEnter: DragEventHandler = (evt) => {
    evt.preventDefault()
    dispatch(setDragArea(DragArea.Cities))
  }


  return (
    <div
      className="weather-content__small-cards"
      onDragEnter={handleDragEnter}
    >
      {citiesElements}
    </div>
  )
}
