import styled from "styled-components";
import { IForecast } from "../../types/weather-types"
import { ConditionImg } from "../icon-img/icon-img";

export const ConditionDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: min-content;
  padding: 0;
  overflow: hidden;
`;

function ConditionSlot({conditions}: {conditions: string[]}) {
  const conditionsElements = conditions.map((item) => <ConditionImg key={item} version={item} small/> )
  return  <td><ConditionDiv>{conditionsElements}</ConditionDiv></td>
}


export function ForecastConditionsRow ({forecasts}: {forecasts: IForecast[]})  {
  const tdConditions = [<td key="first-conditions">явления</td>, ...forecasts.map(({conditions, id}) => <ConditionSlot key={id} conditions={conditions}/> )]
  return <tr>{tdConditions}</tr>
}
