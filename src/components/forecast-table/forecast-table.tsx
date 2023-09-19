import { useSelector } from "react-redux";
import { StyledComponent } from "styled-components";
import { ForecastHeaderRow } from "../forecast-header-row/forecast-header-row";
import { ReducerType } from "../../store/store";
import { ConditionImg } from "../icon-img/icon-img";
import { ConditionDiv, GustTD, PrecipitationTD, PressureTD, Table, TemperatureTD, WindTD } from "./forecast-table-style";



function ConditionSlot({conditions}: {conditions: string[]}) {
  const conditionsElements = conditions.map((item) => <ConditionImg key={item} version={item} small/> )
  return  <td><ConditionDiv>{conditionsElements}</ConditionDiv></td>
}

interface ITDColorRow {
  StyledElement: StyledComponent<"td", any, {value: number}, never>,
  values: {value: number, id: number}[] ,
  title: string
}

const TDColorRow = ({StyledElement, values, title}: ITDColorRow) => {
  const elements =  values.map(({id, value}) => <StyledElement key={id} value={value}>{value}</StyledElement> )
  return [<td key={`first-${title}`}>{title}</td>, ...elements]
}

export function ForecastTable () {

  const {weatherForecastList} = useSelector((state: ReducerType) => state.mapSlice)
  if (!weatherForecastList.length) return null;

  const temps = weatherForecastList.map(({id, temp}) => ({id, value: temp}))
  const tempRow = <TDColorRow StyledElement={TemperatureTD} values={temps} title="температура °C"/>

  const winds = weatherForecastList.map(({speed, id}) => ({id, value: speed}))
  const windRow = <TDColorRow StyledElement={WindTD} values={winds} title="ветер, м/с"/>

  const gusts = weatherForecastList.map(({gust, id}) => ({id, value: gust}))
  const gustRow = <TDColorRow StyledElement={GustTD} values={gusts} title="порывы, м/с"/>

  const tdDirections = [
    <td key="first-direction">направление</td>,
    ...weatherForecastList.map(({direction, id}) => <td key={id}>{direction}</td> )
  ]

  const pressures = weatherForecastList.map(({pressure, id}) => ({id, value: pressure}))
  const pressureRow = <TDColorRow StyledElement={PressureTD} values={pressures} title="давление, мм рт ст"/>

  // const tdPrecipitations = [<td key="first-precipitation">осадки/3ч, мм</td>, ...weatherForecastList.map(({precipitation, id}) => <td key={id}>{precipitation}</td> )]

  const precipitations = weatherForecastList.map(({precipitation, id}) => ({id, value: precipitation}))
  const precipitationRow = <TDColorRow StyledElement={PrecipitationTD} values={precipitations} title="осадки/3ч, мм"/>

  const tdConditions = [<td key="first-conditions">явления</td>, ...weatherForecastList.map(({conditions, id}) => <ConditionSlot key={id} conditions={conditions}/> )]

  return (
    <Table>
      <ForecastHeaderRow forecastList={weatherForecastList}/>

      <tbody>
        <tr>{tempRow}</tr>
        <tr>{windRow}</tr>
        <tr>{gustRow}</tr>
        <tr>{tdDirections}</tr>
        <tr>{pressureRow}</tr>
        <tr>{precipitationRow}</tr>
        <tr>{tdConditions}</tr>
      </tbody>
    </Table>
  )
}
