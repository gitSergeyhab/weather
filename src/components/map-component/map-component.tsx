import { YMaps, Map, ZoomControl } from '@pbe/react-yandex-maps';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { MapDiv } from "./map-component-style";
import { ReducerType } from '../../store/store';
import { setCenter } from '../../store/map-slice/map-slice';
import { Portal } from '../map-portal/map-portal';
import { MapCityPoint } from '../map-city-point/map-city-point';
import { MAP_BALLOON_ID, mapSetting } from '../../const/map-settings';
import { ForecastCityWeather } from '../forecast-city-weather/forecast-city-weather';


const {modules, options, zoom} = mapSetting;

export function MapComponent () {
  const {center, mapWeatherCityList} = useSelector((state: ReducerType) => state.mapSlice);
  const dispatch = useDispatch();
  console.log('MAP____________')


  useEffect(() => {
    if (mapWeatherCityList.length) {
      const {lat, lon} = mapWeatherCityList[0]
      dispatch(setCenter([lat, lon]))
    }
  }, [])

  const points = useMemo(() => mapWeatherCityList.map((item) => <MapCityPoint point={item} key={item.cityId} />), [mapWeatherCityList])

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
      <Portal elementId={MAP_BALLOON_ID}><ForecastCityWeather /></Portal>
    </MapDiv>
  )
}
