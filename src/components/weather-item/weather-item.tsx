import { DragEventHandler } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ICityWeather } from "../../types/weather-types";
import { getShownTemperature } from "../../utils/utils";
import { setDragCityId, setDragCityPosition, setDragElementType } from "../../store/dnd-slice/dnd-slice";
import { CityWeatherPosition, DragArea, ElementType } from "../../const";
import { deleteWeatherCityFromList, resetWeatherCityToEmptySlot, setCurrentWeatherCity } from "../../store/content-slice/content-slice";
import { ReducerType } from "../../store/store";
import { ConditionImg, IconStripsBig, IconWind } from "../icon-img/icon-img";
import { BigCard, BigCardCity, BigCardConditions, BigCardContent, BigCardEmpty, BigCardHeader, BigCardTemperature, BigCardWind, BigCardWindInfo } from "../common-styles/big-card";
import { setCenter } from "../../store/map-slice/map-slice";
import { BigCardSpinner } from "../spinners/spinners";


export function WeatherItem({cityWeather}: {cityWeather: ICityWeather}) {
  const {cityId, cityName, conditions, countryName, direction, id, temp, windSpeed} = cityWeather
  const dispatch = useDispatch();
  const {dragArea} = useSelector((state: ReducerType) => state.dndSlice);
  const {isCurrentWeatherCityLoading} = useSelector((state: ReducerType) => state.contentSlice);

  if (id === -1 && isCurrentWeatherCityLoading)  {
    return <BigCardSpinner/>
  }
  if (id === -1) {
    return <BigCardEmpty/>
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

  const handleCardDoubleClick = () => {
    dispatch(setCenter(cityWeather.coordinates))
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
    </BigCard>
  )
}
