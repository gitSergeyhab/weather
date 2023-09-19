import { Placemark } from '@pbe/react-yandex-maps';
import { useDispatch } from 'react-redux';
import { AnyAction } from '@reduxjs/toolkit';
import { setPortalWeather } from '../../store/map-slice/map-slice';
import { ICityWeather } from '../../types/weather-types';
import { MAP_BALLOON_ID, MAP_CITY_OPTIONS } from '../../const';
import { openWeatherApi } from '../../api/open-weather-api';
import { fetchCities } from '../../store/content-slice/cities-thunk';
import { fetchForecast } from '../../store/map-slice/weather-thunk';


const getProperties = (cityName: string) => ({
  iconContent: cityName, // пару символов помещается
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

    openWeatherApi.get(`/forecast`, { params: { lat, lon } })
      .then((red) => console.log(red.data) )
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
