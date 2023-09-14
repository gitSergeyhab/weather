import { useDispatch, useSelector } from "react-redux";
import { DragEventHandler, useEffect } from "react";
import { WeatherItem } from "../weather-item/weather-item";
import { ReducerType } from "../../store/store";
import { setDragArea, setDragCityId, setDragCityPosition } from "../../store/dnd-slice/dnd-slice";
import { CityWeatherPosition, DragArea } from "../../const";
import { setWeatherCityListByDrag } from "../../store/content-slice/content-slice";


export function WeatherList () {
  const {dragArea, dragCityId, dragCityPosition} = useSelector((state: ReducerType) => state.dndSlice)
  const {weatherCityList} = useSelector((state: ReducerType) => state.citiesSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setWeatherCityListByDrag({
      dragArea, dragCityId, dragCityPosition
    }))
  }, [dragArea, dragCityId, dragCityPosition, dispatch])


  const citiesElements = weatherCityList.map((item) => <WeatherItem key={item.id} cityWeather={item}/>)

  const handleDragEnter: DragEventHandler = (evt) => {
    evt.preventDefault()
    dispatch(setDragArea(DragArea.Weather))
  }

  const handleDragLeave: DragEventHandler = (evt) => {
    evt.preventDefault()
    const { relatedTarget, currentTarget } = evt
    if (relatedTarget instanceof Element && !currentTarget.contains(relatedTarget)) {
      dispatch(setDragCityId(null))
      dispatch(setDragCityPosition(CityWeatherPosition.None))
    }
  }

  return (
    <div
      className="weather-content__big-cards"
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
    >
      <div className="weather-content__help">
        Перетащите сюда города, погода в которых вам интересна
      </div>
      {citiesElements}
    </div>
  )
}
