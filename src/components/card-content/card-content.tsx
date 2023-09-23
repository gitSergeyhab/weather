import { useDispatch } from "react-redux";
import { DragEventHandler } from "react";
import { ICityWeather } from "../../types/weather-types";
import { getShownTemperature } from "../../utils/utils";
import { BigCardConditions, BigCardContent, BigCardTemperature, BigCardWind, BigCardWindInfo } from "../common-styles/big-card";
import { ConditionImg, IconWind } from "../icon-img/icon-img";
import { setDragCityPosition } from "../../store/dnd-slice/dnd-slice";
import { CityWeatherPosition } from "../../const/const";


export function CardContent({cityWeather}: {cityWeather: ICityWeather}) {
  const {direction, windSpeed, temp, conditions} = cityWeather;
  const dispatch = useDispatch()

  const temperature = getShownTemperature(temp);
  const conditionElements = conditions.map((item) => <ConditionImg key={item} version={item}/>)

  const handleDragBottomEnter: DragEventHandler = (evt) => {
    evt.preventDefault()
    dispatch(setDragCityPosition(CityWeatherPosition.Bottom))
  }

  return (
    <BigCardContent onDragEnter={handleDragBottomEnter}>
      <div>
        <BigCardConditions> {conditionElements} </BigCardConditions>
        <BigCardWind>
          <IconWind />
          <BigCardWindInfo>Ветер {direction}, {windSpeed} м/с</BigCardWindInfo>
        </BigCardWind>
      </div>
      <BigCardTemperature>{temperature}</BigCardTemperature>
    </BigCardContent>
  )
}
