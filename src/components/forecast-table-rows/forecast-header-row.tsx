import styled from "styled-components";
import { IForecast } from "../../types/weather-types";


const ForecastTH = styled.th`
  background-color: var(--color-label-active);
  color: #FFF;
`;

export const FirstTH = styled.th``

export function ForecastHeaderRow ({forecastList}: {forecastList: IForecast[]}) {
  console.log('ForecastHeaderRow')
  const times = forecastList.map(({id, stringDate}) => <ForecastTH key={id}>{stringDate}</ForecastTH>);
  const thElements = [ <FirstTH key="first-head"/>, ...times];

  return (
    <thead>
      <tr>
        {thElements}
      </tr>
    </thead>
  )
}
