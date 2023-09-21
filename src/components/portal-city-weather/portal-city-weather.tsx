
import styled from "styled-components";
import { useSelector } from "react-redux";
import { ICityWeather } from "../../types/weather-types";
import { getShownTemperature } from "../../utils/utils";
import { ConditionImg, IconWind } from "../icon-img/icon-img";
import { ForecastTable } from "../forecast-table/forecast-table";
import { ReducerType } from "../../store/store";
import { ForecastSpinner } from "../spinners/spinners";

export const WeatherPortalWrapper = styled.div`
  width: 500px;
  height: 340px;
  padding: 1rem;
  overflow: hidden;
  opacity: 1;
  transition: all ease-in-out 1s;
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
  const { cityName, conditions, direction, temp, windSpeed} = cityWeather;
  console.log('PortalCityWeather', cityWeather.cityId)

  const {isForecastLoading} = useSelector((state: ReducerType) => state.mapSlice);

  const temperature = getShownTemperature(temp);
  const conditionElements = conditions.map((item) => <ConditionImg key={item} version={item}/>);

  const forecastElement = isForecastLoading ? <ForecastSpinner/> : <ForecastWrapper><ForecastTable/></ForecastWrapper>;

  return (
    <WeatherPortalWrapper>
      <City>{cityName}</City>
      <WeatherWrapper>
           {conditionElements}
          <IconWind />
          <Div>Ветер {direction}, {windSpeed} м/с</Div>
          <Div>{temperature}</Div>
      </WeatherWrapper>
      {forecastElement}
    </WeatherPortalWrapper>
  )
}
