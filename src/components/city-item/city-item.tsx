import { ICityItem } from "../../types/city-types";


export function CityItem({city}: {city: ICityItem}) {
  const { cityName, countryName, id } = city;
  return (
    <div className="small-card" draggable>
      <span className="small-card__city">
        {cityName}, {countryName}
      </span>
      <span className="small-card__temperature">+17°</span>
      <span className="icon icon--strips-small" />
    </div>
)

}
