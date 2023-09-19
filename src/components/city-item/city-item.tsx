import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "@reduxjs/toolkit";
import { ICityItem } from "../../types/city-types";
import { fetchWeather, refetchWeather } from "../../store/content-slice/weather-thunk";
import { ReducerType } from "../../store/store";
import { getShownTemperature } from "../../utils/utils";
import { DragArea } from "../../const/const";
import { setWeatherCityToEmptySlot } from "../../store/content-slice/content-slice";
import { IconStripsSmall } from "../icon-img/icon-img";
import { SmallCard, SmallCardCity, SmallCardTemperature } from "../common-styles/small-card";


export function CityItem({city}: {city: ICityItem}) {
  const dispatch = useDispatch();

  const { cityName, countryName, id } = city;

  const {cashCityTemperature, currentWeatherCity} = useSelector((state: ReducerType) => state.contentSlice);
  const {dragArea} = useSelector((state: ReducerType) => state.dndSlice);
  const temp = cashCityTemperature[id];
  const temperature = temp !== undefined ? getShownTemperature(temp) : '';

  const handleDragStart = () => {
    dispatch(fetchWeather(city) as unknown as AnyAction)
  }

  const handleDragEnd = () => {
    if (dragArea === DragArea.Weather && currentWeatherCity) {
      dispatch(setWeatherCityToEmptySlot())
    } else if (dragArea === DragArea.Weather) {
      dispatch(refetchWeather(city) as unknown as AnyAction)
    }
  }

  return (
    <SmallCard
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <SmallCardCity>
        {cityName}, {countryName}
      </SmallCardCity>
      <SmallCardTemperature>{temperature}</SmallCardTemperature>
      <IconStripsSmall/>
    </SmallCard>
  )
}
