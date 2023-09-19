import { Placemark } from '@pbe/react-yandex-maps';
import { useDispatch } from 'react-redux';
import { AnyAction } from '@reduxjs/toolkit';
import { setPortalWeather } from '../../store/map-slice/map-slice';
import { ICityWeather } from '../../types/weather-types';
import { fetchForecast } from '../../store/map-slice/weather-thunk';
import { MAP_BALLOON_ID, MAP_CITY_OPTIONS } from '../../const/map-settings';


const getProperties = (cityName: string) => ({
  iconContent: cityName,
  hintContent: `кликните, чтобы увидеть прогноз`,
  // создаём пустой элемент с заданными размерами
  balloonContent: `<div id=${MAP_BALLOON_ID}></div>`,
})

export function MapCityPoint({point}: {point:ICityWeather}) {
  const {cityName, coordinates} = point;
  const dispatch = useDispatch();
  const properties = getProperties(cityName)

  const handlePointClick = () => {
    dispatch(setPortalWeather(null))
    setTimeout(() => {dispatch(setPortalWeather(point))}, 0)
    const [lat, lon] = coordinates;
    dispatch(fetchForecast({lat, lon}) as unknown as AnyAction)
  }

  return (
    <Placemark
        geometry={ coordinates }
        options={MAP_CITY_OPTIONS}
        properties={properties}
        onClick={handlePointClick}
      />
  )
}
