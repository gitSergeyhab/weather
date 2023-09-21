import { YMaps, Map, ZoomControl } from '@pbe/react-yandex-maps';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { MapDiv } from "./map-component-style";
import { ReducerType } from '../../store/store';
import { setCenter } from '../../store/map-slice/map-slice';
import { Portal } from '../map-portal/map-portal';
import { PortalCityWeather } from '../portal-city-weather/portal-city-weather';
import { MapCityPoint } from '../map-city-point/map-city-point';
import { filterWeatherCitiesByConditions } from '../../utils/filters';
import { MAP_BALLOON_ID, mapSetting } from '../../const/map-settings';


const {modules, options, zoom} = mapSetting;

export function MapComponent () {
  const {weatherCityList, filterChecked} = useSelector((state: ReducerType) => state.contentSlice);
  const {center, portalWeather} = useSelector((state: ReducerType) => state.mapSlice);
  const dispatch = useDispatch();
  console.log('MapComponent')

  const filteredWeatherCities = filterWeatherCitiesByConditions({ weatherCityList,  filterChecked })

  useEffect(() => {
    if (filteredWeatherCities.length) {
      const {lat, lon} = filteredWeatherCities[0]
      dispatch(setCenter([lat, lon]))
    }
  }, [])

  const points = filteredWeatherCities.map((item) => <MapCityPoint point={item} key={item.cityId} />)
  const balloon = portalWeather ?
    <Portal elementId={MAP_BALLOON_ID}><PortalCityWeather cityWeather={portalWeather}/></Portal> : null

  return (
    <MapDiv>
      <YMaps>
         <Map
          width="100%"
          height="100%"
          state={{center, zoom}}
          options={options}
          modules={modules}
         >
          {points}
          <ZoomControl />
         </Map>
      </YMaps>
      {balloon}
    </MapDiv>
  )
}
