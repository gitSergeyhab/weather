import { StyledComponent } from "styled-components"

interface IForecastCommonColorRow {
  StyledElement: StyledComponent<"td", any, {value: number}, never>,
  values: {value: number, id: number}[] ,
  title: string
}

export function ForecastCommonColorRow ({StyledElement, values, title}: IForecastCommonColorRow)  {
  console.log('ForecastCommonColorRow', {values, title})
  const elements =  values.map(({id, value}) => <StyledElement key={id} value={value}>{value}</StyledElement> )
  return <tr>{[<td key={`first-${title}`}>{title}</td>, ...elements]}</tr>
}
