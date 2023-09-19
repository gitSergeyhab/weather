import { IForecast } from "../../types/weather-types"
import { ForecastCommonColorRow } from "./forecast-common-color-row"
import { TemperatureTD } from "./forecast-table-rows-style"

export function ForecastTempRow ({forecasts}: {forecasts: IForecast[]})  {
  const temps = forecasts.map(({id, temp}) => ({id, value: temp}))
  return <ForecastCommonColorRow StyledElement={TemperatureTD} values={temps} title="температура °C"/>
}
