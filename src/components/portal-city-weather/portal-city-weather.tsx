
// import styled from "styled-components"
import { ICityWeather } from "../../types/weather-types";
import { getShownTemperature } from "../../utils/utils";

import { ConditionImg, IconStripsBig, IconWind } from "../icon-img/icon-img";
import { BigCard, BigCardCity, BigCardConditions, BigCardContent, BigCardHeader, BigCardTemperature, BigCardWind, BigCardWindInfo } from "../common-styles/big-card";


// const PortalCard = styled(BigCard)`
//   z-index: 10;
// `

export function PortalCityWeather({cityWeather}: {cityWeather: ICityWeather}) {
  const {cityId, cityName, conditions, countryName, direction, temp, windSpeed} = cityWeather

  const temperature = getShownTemperature(temp);
  const conditionElements = conditions.map((item) => <ConditionImg key={item} version={item}/>)


  return (
    <BigCard key={cityId} className="PortalCard">
      <BigCardHeader>
        <IconStripsBig />
        <div>
          <BigCardCity>{cityName}</BigCardCity>
          <BigCardCity>{countryName}</BigCardCity>
        </div>
      </BigCardHeader>
      <BigCardContent >
        <div>
          <BigCardConditions> {conditionElements} </BigCardConditions>
          <BigCardWind>
            <IconWind />
            <BigCardWindInfo>Ветер {direction}, {windSpeed} м/с</BigCardWindInfo>
          </BigCardWind>
        </div>
        <BigCardTemperature>{temperature}</BigCardTemperature>
      </BigCardContent>
    </BigCard>
  )
}
