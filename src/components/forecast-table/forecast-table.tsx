import { useSelector } from "react-redux";
import { ReducerType } from "../../store/store";
import { Table } from "./forecast-table-style";
import { ForecastTempRow } from "../forecast-table-rows/forecast-temp-row";
import { ForecastWindRow } from "../forecast-table-rows/forecast-wind-row";
import { ForecastGustRow } from "../forecast-table-rows/forecast-gust-row";
import { ForecastPressureRow } from "../forecast-table-rows/forecast-pressure-row";
import { ForecastPrecipitationRow } from "../forecast-table-rows/forecast-precipitation-row";
import { ForecastDirectionRow } from "../forecast-table-rows/forecast-direction-row";
import { ForecastConditionsRow } from "../forecast-table-rows/forecast-conditions-row";
import { ForecastHeaderRow } from "../forecast-table-rows/forecast-header-row";


export function ForecastTable () {
  console.log('ForecastTable')
  const {weatherForecastList} = useSelector((state: ReducerType) => state.mapSlice)
  if (!weatherForecastList.length) return null;

  return (
    <Table>
      <ForecastHeaderRow forecastList={weatherForecastList}/>
      <tbody>
        <ForecastTempRow forecasts={weatherForecastList}/>
        <ForecastWindRow forecasts={weatherForecastList}/>
        <ForecastGustRow forecasts={weatherForecastList}/>
        <ForecastDirectionRow forecasts={weatherForecastList}/>
        <ForecastPressureRow forecasts={weatherForecastList}/>
        <ForecastPrecipitationRow forecasts={weatherForecastList}/>
        <ForecastConditionsRow forecasts={weatherForecastList}/>
      </tbody>
    </Table>
  )
}
