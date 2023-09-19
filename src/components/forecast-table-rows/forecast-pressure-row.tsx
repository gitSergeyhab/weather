import { IForecast } from "../../types/weather-types"
import { ForecastCommonColorRow } from "./forecast-common-color-row"
import { PressureTD } from "./forecast-table-rows-style"

export function ForecastPressureRow ({forecasts}: {forecasts: IForecast[]})  {
  const pressures = forecasts.map(({pressure, id}) => ({id, value: pressure}))
  return <ForecastCommonColorRow StyledElement={PressureTD} values={pressures} title="давление, мм рт ст"/>
}
