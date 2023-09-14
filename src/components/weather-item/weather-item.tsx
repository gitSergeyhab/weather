import {  DragEventHandler } from "react";
import { useDispatch } from "react-redux";
import { ICityWeather } from "../../types/weather-types";
import { getShownTemperature } from "../../utils/utils";
import { ConditionImg } from "../condition-img/condition-img";
import { setDragCityId, setDragCityPosition } from "../../store/dnd-slice/dnd-slice";
import { CityWeatherPosition } from "../../const";
import { WeatherItemEmpty } from "../weather-item-empty/weather-item-empty";


export function WeatherItem({cityWeather}: {cityWeather: ICityWeather}) {
  const {cityId, cityName, conditions, countryName, direction, id, temp, windSpeed} = cityWeather
  const dispatch = useDispatch();
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

  return (
    <div
      className="big-card"
      onDragEnter={handleDragEnter}
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
