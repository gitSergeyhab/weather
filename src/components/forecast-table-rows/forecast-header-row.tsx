import styled from "styled-components";
import { IForecast } from "../../types/weather-types";


const ForecastTH = styled.th`
  background-color: var(--color-label-active);
  color: #FFF;
`

export const FirstTH = styled.th``

function ForecastHeaderItem ({stringDate}: {stringDate: string}) {
  return <ForecastTH>{stringDate}</ForecastTH>
}


export function ForecastHeaderRow ({forecastList}: {forecastList: IForecast[]}) {

  const thElements = [ <FirstTH key="first-head"/>, ...forecastList.map(({id, stringDate}) => <ForecastHeaderItem key={id} stringDate={stringDate}/>)]
  return (
    <thead>
      <tr>
        {thElements}
      </tr>
    </thead>
  )
}
