import { DragEventHandler } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ICityWeather } from "../../types/weather-types";
import { setDragCityId, setDragCityPosition, setDragElementType } from "../../store/dnd-slice/dnd-slice";
import { CityWeatherPosition, DragArea, ElementType } from "../../const/const";
import { deleteWeatherCityFromList, resetWeatherCityToEmptySlot, setCurrentWeatherCity } from "../../store/content-slice/content-slice";
import { ReducerType } from "../../store/store";
import { IconStripsBig } from "../icon-img/icon-img";
import { BigCard, BigCardCity, BigCardEmpty, BigCardHeader } from "../common-styles/big-card";
import { setCenter } from "../../store/map-slice/map-slice";
import { BigCardSpinner } from "../spinners/spinners";
import { CardContent } from "../card-content/card-content";


export function WeatherItem({cityWeather}: {cityWeather: ICityWeather}) {
  const {cityId, cityName, countryName, id, lat, lon} = cityWeather
  const dispatch = useDispatch();
  const {dragArea} = useSelector((state: ReducerType) => state.dndSlice);
  const {isCurrentWeatherCityLoading} = useSelector((state: ReducerType) => state.contentSlice);
  console.log('WeatherItem', {cityId});

  if (id === -1 && isCurrentWeatherCityLoading)  {
    return <BigCardSpinner/>
  }
  if (id === -1) {
    return <BigCardEmpty/>
  }

  const handleDragEnter: DragEventHandler = (evt) => {
    evt.preventDefault()
    dispatch(setDragCityId(cityId))
  }

  const handleDragTopEnter: DragEventHandler = (evt) => {
    evt.preventDefault()
    dispatch(setDragCityPosition(CityWeatherPosition.Top))
  }

  const handleDragStart = () => {
    dispatch(setDragElementType(ElementType.Weather));
    dispatch(setCurrentWeatherCity(cityWeather));
  }

  const handleDragEnd = () => {
    if (dragArea === DragArea.Weather) {
      dispatch(resetWeatherCityToEmptySlot());
    }
    if (dragArea === DragArea.Cities) {
      dispatch(deleteWeatherCityFromList());
    }
  }

  const handleCardDoubleClick = () => {
    dispatch(setCenter([lat, lon]))
  }

  return (
    <BigCard
      onDragEnter={handleDragEnter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDoubleClick={handleCardDoubleClick}
    >
      <BigCardHeader  onDragEnter={handleDragTopEnter}>
        <IconStripsBig />
        <div>
          <BigCardCity>{cityName}</BigCardCity>
          <BigCardCity>{countryName}</BigCardCity>
        </div>
      </BigCardHeader>
      <CardContent cityWeather={cityWeather}/>
    </BigCard>
  )
}

// export const WeatherItem = memo(WeatherItemProto, )
