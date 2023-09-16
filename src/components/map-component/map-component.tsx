import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { useSelector } from 'react-redux';
import { MapDiv } from "./map-component-style";
import { ReducerType } from '../../store/store';



const PRESET = 'islands#blackStretchyIcon';
const COLOR = 'black';




const DEFAULT_CENTER = [55, 37]

export function MapComponent () {
  const {weatherCityList} = useSelector((state: ReducerType) => state.citiesSlice);
  const cities = weatherCityList.filter((item) => item.cityId !== -1);
  const center = cities.length ? cities[0].coordinates : DEFAULT_CENTER;

  return (
    <MapDiv>
      <YMaps>
         <Map
          defaultState={{ center, zoom: 4}}
          width="100%"
          height="100%"
          options={{autoFitToViewport: 'always', maxZoom: 10, minZoom: 3}}
         >
            {cities.map((point) => <Placemark
            key={point.cityId}
            geometry={point.coordinates}
            options={{
              preset: PRESET, iconColor: COLOR
            }}

            />)}


         </Map>






      </YMaps>
    </MapDiv>
  )

}
