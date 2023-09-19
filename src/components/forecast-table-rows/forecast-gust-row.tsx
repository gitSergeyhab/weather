import { IForecast } from "../../types/weather-types"
import { ForecastCommonColorRow } from "./forecast-common-color-row"
import { GustTD } from "./forecast-table-rows-style"

export function ForecastGustRow ({forecasts}: {forecasts: IForecast[]})  {
  const gusts = forecasts.map(({gust, id}) => ({id, value: gust}))
  return <ForecastCommonColorRow StyledElement={GustTD} values={gusts} title="порывы, м/с"/>
}
