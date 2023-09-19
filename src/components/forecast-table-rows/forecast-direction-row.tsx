import { IForecast } from "../../types/weather-types"


export function ForecastDirectionRow ({forecasts}: {forecasts: IForecast[]})  {

  const tdDirections = [
    <td key="first-direction">направление</td>,
    ...forecasts.map(({direction, id}) => <td key={id}>{direction}</td> )
  ]

  return <tr>{tdDirections}</tr>
}
