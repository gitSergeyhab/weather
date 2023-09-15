import { useDispatch, useSelector } from "react-redux"
import { DragEventHandler } from "react";
import { ReducerType } from "../../store/store"
import { CityItem } from "../city-item/city-item";
import { contentSlice } from "../../store/content-slice/content-slice";
import { DragArea } from "../../const";
import { setDragArea } from "../../store/dnd-slice/dnd-slice";
import { filterCitiesByWeatherCities } from "../../utils/filters";


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
