import {  DragEventHandler } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ICityWeather } from "../../types/weather-types";
import { getShownTemperature } from "../../utils/utils";
import { ConditionImg } from "../condition-img/condition-img";
import { setDragCityId, setDragCityPosition, setDragElementType } from "../../store/dnd-slice/dnd-slice";
import { CityWeatherPosition, DragArea, ElementType } from "../../const";
import { WeatherItemEmpty } from "../weather-item-empty/weather-item-empty";
import { deleteWeatherCityFromList, resetWeatherCityToEmptySlot, setCurrentWeatherCity } from "../../store/content-slice/content-slice";
import { ReducerType } from "../../store/store";


export function WeatherItem({cityWeather}: {cityWeather: ICityWeather}) {
  const {cityId, cityName, conditions, countryName, direction, id, temp, windSpeed} = cityWeather
  const dispatch = useDispatch();
  const {dragArea} = useSelector((state: ReducerType) => state.dndSlice);

  if (id === -1) {
    return <WeatherItemEmpty/>
  }

  const temperature = getShownTemperature(temp);
  const conditionElements = conditions.map((item) => <ConditionImg key={item} version={item}/>)

  const handleDragEnter: DragEventHandler = (evt) => {
    evt.preventDefault()
      dispatch(setDragCityId(cityId))
  }

  const handleDragTopEnter: DragEventHandler = (evt) => {
    evt.preventDefault()
    dispatch(setDragCityPosition(CityWeatherPosition.Top))
  }

  const handleDragBottomEnter: DragEventHandler = (evt) => {
    evt.preventDefault()
    dispatch(setDragCityPosition(CityWeatherPosition.Bottom))
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

  return (
    <div
      className="big-card"
      onDragEnter={handleDragEnter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      draggable
    >
      <div
        className="big-card__header"
        onDragEnter={handleDragTopEnter}
      >
        <span className="icon icon--strips-big" />
        <div>
          <span className="big-card__city">{cityName}</span>
          <br />
          <span className="big-card__city">{countryName}</span>
        </div>
      </div>
      <div
        className="big-card__content"
        onDragEnter={handleDragBottomEnter}
      >
        <div className="big-card__content-wrapper">
          <div className="big-card__weather-conditions">
            {conditionElements}
          </div>
          <div className="big-card__wind">
            <span className="icon icon--wind" />
            <span className="big-card__wind-info">Ветер {direction}, {windSpeed} м/с</span>
          </div>
        </div>
        <span className="big-card__temperature">{temperature}</span>
      </div>
    </div>
  )
}
