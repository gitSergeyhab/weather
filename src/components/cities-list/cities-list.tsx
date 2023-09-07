// import { CityData } from "../../types/city-types";

import { useSelector } from "react-redux"
// import styled from "styled-components";
import { citiesSlice } from "../../store/cities-slice/cities-slice"
import { ReducerType } from "../../store/store"
import { CityItem } from "../city-item/city-item";

// const CityUl = styled.ul`
//   list-style: none;
//   margin: 0;
//   padding: 1rem;
//   display: flex;
//   flex-direction: column;
//   row-gap: 0.5rem;
//   cursor: pointer;
//   width: 25rem;
// `


export function CitiesList () {

  const {cities} = useSelector((state: ReducerType) => state[citiesSlice.name]);

  const citiesElements = cities.map((item) => <CityItem key={item.id} city={item}/>)


  return (
    <div className="weather-content__small-cards">
      {citiesElements}
    </div>
  )
}
