import { IForecast } from "../../types/weather-types"
import { ForecastCommonColorRow } from "./forecast-common-color-row"
import { PrecipitationTD } from "./forecast-table-rows-style"


export function ForecastPrecipitationRow ({forecasts}: {forecasts: IForecast[]})  {
  const precipitations = forecasts.map(({precipitation, id}) => ({id, value: precipitation}))
  return <ForecastCommonColorRow StyledElement={PrecipitationTD} values={precipitations} title="осадки/3ч, мм"/>
}
