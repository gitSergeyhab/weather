import { useSelector } from "react-redux";
import styled from "styled-components";
import { ReducerType } from "../store/store";
import { geoDbApi } from "../api/geo-db-cities-api";
import { CityResponseData } from "../types/city-types";

const TestBtn = styled.button.attrs({type: 'button'})`
  width: 10px;
  height: 10px;
  position: absolute;
  top: 10px;
  left: 10px;
  /* background-color: green; */
  z-index: 100;
`
export function Test() {
  const {inputCityPrefix} = useSelector((state: ReducerType) => state.citiesSlice)

  const handleClick =() => {
    geoDbApi.get<CityResponseData> (`/cities`, {
      params: { sort: '-population', namePrefix: inputCityPrefix }
    }).then((item) => console.log(item))
  }

  return (
    <TestBtn onClick={handleClick}/>
  )
}
