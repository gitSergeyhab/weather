import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "@reduxjs/toolkit";
import { DragEventHandler } from "react";
import { ICityItem } from "../../types/city-types";
import { fetchWeather } from "../../store/content-slice/weather-thunk";
import { ReducerType } from "../../store/store";
import { getShownTemperature } from "../../utils/utils";
import { addWeatherCity } from "../../store/content-slice/content-slice";


export function CityItem({city}: {city: ICityItem}) {

  const dispatch = useDispatch();

  const { cityName, countryName, id } = city;

  const {cashCityTemperature, weatherCityList, dragArea} = useSelector((state: ReducerType) => state.citiesSlice);
  const temp = cashCityTemperature[id];
  const temperature = temp !== undefined ? getShownTemperature(temp) : '';

  const handleDragStart = () => {
    dispatch(fetchWeather(city) as unknown as AnyAction)
  }

  // const handleDragEnd = () => {
  //   console.log(dragArea, 'handleDragEnd')
  //   if (!weatherCityList.length && dragArea === DragArea.Weather) {
  //     console.log('handleDragEnd !weatherCityList.length && dragArea === DragArea.Weather')
  //     dispatch(addWeatherCity())
  //   }
  // }

  // const onDrag: DragEventHandler = (evt) => {
  //   console.log(dragArea, 'onDrag')
  // }

  return (
    <div
      className="small-card"
      draggable
      onDragStart={handleDragStart}
      // onDragEnd={handleDragEnd}
      // onDrag={onDrag}
    >
      <span className="small-card__city">
        {cityName}, {countryName}
      </span>
      <span className="small-card__temperature">{temperature}</span>
      <span className="icon icon--strips-small" />
    </div>
)

}
