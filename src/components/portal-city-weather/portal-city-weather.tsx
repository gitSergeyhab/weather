
import styled from "styled-components";
import { ICityWeather } from "../../types/weather-types";
import { getShownTemperature } from "../../utils/utils";
import { ConditionImg, IconWind } from "../icon-img/icon-img";
import { ForecastTable } from "../forecast-table/forecast-table";

const WeatherPortalWrapper = styled.div`
  width: 500px;
  height: 340px;
  padding: 1rem;
  overflow: hidden;
`;

const ForecastWrapper = styled.div`
  overflow-x: scroll;
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

export function PortalCityWeather({cityWeather}: {cityWeather: ICityWeather}) {
  const { cityName, conditions, direction, temp, windSpeed} = cityWeather

  const temperature = getShownTemperature(temp);
  const conditionElements = conditions.map((item) => <ConditionImg key={item} version={item}/>)

  return (
    <WeatherPortalWrapper>
      <City>{cityName}</City>
      <WeatherWrapper>
           {conditionElements}
          <IconWind />
          <Div>Ветер {direction}, {windSpeed} м/с</Div>
          <Div>{temperature}</Div>
      </WeatherWrapper>
      <ForecastWrapper><ForecastTable/></ForecastWrapper>
    </WeatherPortalWrapper>
  )
}
