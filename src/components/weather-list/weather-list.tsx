import { WeatherItem } from "../weather-item/weather-item";


export function WeatherList () {

  // const {cities} = useSelector((state: ReducerType) => state[citiesSlice.name]);

  // const citiesElements = cities.map((item) => <CityItem key={item.id} city={item}/>)


  return (
    <div className="weather-content__big-cards">
      <div className="weather-content__help">
        Перетащите сюда города, погода в которых вам интересна
      </div>

      <WeatherItem/>
      <WeatherItem/>

    </div>
  )
}
