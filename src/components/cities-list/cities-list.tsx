import { useDispatch, useSelector } from "react-redux"
import { DragEventHandler } from "react";
import { ReducerType } from "../../store/store"
import { CityItem } from "../city-item/city-item";
import { DragArea } from "../../const/const";
import { setDragArea } from "../../store/dnd-slice/dnd-slice";
import { ContentCards } from "../common-styles/content-cards";
import { filterCitiesByWeatherCities } from "../../utils/filters";


export function CitiesList () {
  const {weatherCityList} = useSelector((state: ReducerType) => state.contentSlice);
  const {cities} = useSelector((state: ReducerType) => state.citiesSlice);

  console.log('_________________CitiesList')
  const citiesElements = filterCitiesByWeatherCities({cities, weatherCities: weatherCityList})
    .map((item) => <CityItem key={item.id} city={item}/>)


  const dispatch = useDispatch()

  const handleDragEnter: DragEventHandler = (evt) => {
    evt.preventDefault()
    dispatch(setDragArea(DragArea.Cities))
  }

  return (
    <ContentCards onDragEnter={handleDragEnter} >
      {citiesElements}
    </ContentCards>
  )
}


