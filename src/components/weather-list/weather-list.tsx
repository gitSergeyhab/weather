import { useDispatch, useSelector } from "react-redux";
import { DragEventHandler, useEffect } from "react";
import { WeatherItem } from "../weather-item/weather-item";
import { ReducerType } from "../../store/store";
import { setDragArea } from "../../store/dnd-slice/dnd-slice";
import { DragArea } from "../../const";
import { setWeatherCityListByDrag } from "../../store/content-slice/content-slice";
// import { DragArea, setCityWeatherDragOverId, setDragArea } from "../../store/content-slice/content-slice";


export function WeatherList () {

  const {cityWeatherOverId, dragArea, dragCardPosition} = useSelector((state: ReducerType) => state.dndSlice)
  const {weatherCityList} = useSelector((state: ReducerType) => state.citiesSlice);

  const dispatch = useDispatch()
  useEffect(() => {
    console.log({cityWeatherOverId, dragArea, dragCardPosition})
    dispatch(setWeatherCityListByDrag({
      cityWeatherOverId, dragCardPosition, dragArea: dragArea as string
    }))
  }, [cityWeatherOverId, dragArea, dragCardPosition, dispatch])





  const citiesElements = weatherCityList.map((item) => <WeatherItem key={item.id} cityWeather={item}/>)

  const handleDragEnter: DragEventHandler = (evt) => {
    evt.preventDefault()
    dispatch(setDragArea(DragArea.Weather))
  }
  // const handleDragLeave: DragEventHandler = (evt) => {
  //   evt.preventDefault()
  //   const { relatedTarget, currentTarget } = evt
  //   if (relatedTarget instanceof Element && !currentTarget.contains(relatedTarget)) {
  //     console.log('dispatch(setCityWeatherDragOverId(null));')
  //     dispatch(setCityWeatherDragOverId(null));
  //   }
  // }

  // const handleDragLeave: DragEventHandler = (evt) => {
  //   evt.preventDefault()
  //   const { relatedTarget, currentTarget } = evt

  //   if (relatedTarget instanceof Element
  //     && !currentTarget.contains(relatedTarget)) {
  //     console.log('dispatch(deleteEmptyCityWeather());')
  //     dispatch(deleteEmptyCityWeather());
  //   }
  // }


  // const handleDragLeave: DragEventHandler = (evt) => {
  //   evt.preventDefault()
  //   const { relatedTarget, currentTarget } = evt
  //   if (relatedTarget instanceof Element && !currentTarget.contains(relatedTarget)) {
  //     dispatch(setDragArea(null))
  //   }
  // }


  return (
    <div
      className="weather-content__big-cards"
      onDragEnter={handleDragEnter}
      // onDragLeave={handleDragLeave}
    >

      <div className="weather-content__help">
        Перетащите сюда города, погода в которых вам интересна
      </div>

      {citiesElements}



    </div>
  )
}
