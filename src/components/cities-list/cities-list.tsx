import { useSelector } from "react-redux"
import { citiesSlice } from "../../store/cities-slice/cities-slice"
import { ReducerType } from "../../store/store"
import { CityItem } from "../city-item/city-item";



export function CitiesList () {

  const {cities} = useSelector((state: ReducerType) => state[citiesSlice.name]);
  const citiesElements = cities.map((item) => <CityItem key={item.id} city={item}/>)

  return (
    <div className="weather-content__small-cards">
      {citiesElements}
    </div>
  )
}
