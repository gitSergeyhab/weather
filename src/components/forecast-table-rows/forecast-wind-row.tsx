import { IForecast } from "../../types/weather-types"
import { ForecastCommonColorRow } from "./forecast-common-color-row"
import { WindTD } from "./forecast-table-rows-style"

export function ForecastWindRow ({forecasts}: {forecasts: IForecast[]})  {
  const winds = forecasts.map(({speed, id}) => ({id, value: speed}))
  return <ForecastCommonColorRow StyledElement={WindTD} values={winds} title="ветер, м/с"/>
}
