import { Placemark } from '@pbe/react-yandex-maps';
import { useDispatch } from 'react-redux';
import { setPortalWeather } from '../../store/map-slice/map-slice';
import { ICityWeather } from '../../types/weather-types';
import { MAP_BALLOON_ID, MAP_CITY_OPTIONS } from '../../const';


const getProperties = (cityName: string) => ({
  iconContent: cityName, // пару символов помещается
  hintContent: `Я появляюсь при наведении на метку`,
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
