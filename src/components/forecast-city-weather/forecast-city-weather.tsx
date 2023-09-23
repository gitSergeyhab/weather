
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getShownTemperature } from "../../utils/utils";
import { ConditionImg, IconWind } from "../icon-img/icon-img";
import { ForecastTable } from "../forecast-table/forecast-table";
import { ReducerType } from "../../store/store";

export const WeatherPortalWrapper = styled.div`
  width: 500px;
  height: 340px;
  padding: 1rem;
  overflow: hidden;
  opacity: 1;
  transition: all ease-in-out 1s;
`;


const WeatherWrapper = styled.div`
  width: 460px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-light-grey);
  padding: .25rem;
  margin-bottom: .25rem;
`;

const City = styled.h3`
  font-size: 1rem;
  width: 100%;
  margin: 0;
  margin-bottom: 8px;
`;

const Div = styled.div`
  font-size: .8rem;
`;



export function ForecastCityWeather() {
  const  {portalWeather} = useSelector((state: ReducerType) => state.mapSlice);

  if (!portalWeather) {
    return null
  }

  const { cityName, conditions, direction, temp, windSpeed } = portalWeather;
  const temperature = getShownTemperature(temp);
  const conditionElements = conditions.map((item) => <ConditionImg key={item} version={item}/>);

  return (
    <WeatherPortalWrapper>
      <City>{cityName}</City>
      <WeatherWrapper>
           {conditionElements}
          <IconWind />
          <Div>Ветер {direction}, {windSpeed} м/с</Div>
          <Div>{temperature}</Div>
      </WeatherWrapper>
      <ForecastTable/>
    </WeatherPortalWrapper>
  )
}
