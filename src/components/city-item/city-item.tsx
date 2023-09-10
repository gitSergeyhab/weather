import { useDispatch } from "react-redux";
import { AnyAction } from "@reduxjs/toolkit";
import { useDebounce } from "../../hooks/use-debounce";
import { fetchWeather } from "../../store/weather-slice/weather-thunk";
import { ICityItem } from "../../types/city-types";


export function CityItem({city}: {city: ICityItem}) {

  const dispatch = useDispatch()

  const handleDragStart = () => {
    dispatch(fetchWeather(city) as unknown as AnyAction)
  }
  const { cityName, countryName, id } = city;
  return (
    <div className="small-card" draggable onDragStart={handleDragStart}>
      <span className="small-card__city">
        {cityName}, {countryName}
      </span>
      <span className="small-card__temperature">+17°</span>
      <span className="icon icon--strips-small" />
    </div>
)

}
