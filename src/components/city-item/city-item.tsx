import styled from "styled-components";
import { ICityItem } from "../../types/city-types";


// const CityItemLi = styled.li.attrs({draggable: true})`
//   border: 4px solid #000;
//   cursor: pointer;
// `

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
