import styled from "styled-components";
import { BLUE, GREEN, RED, getRGB } from "../../const";


const TD = styled.td`
font-weight: 700;
`

const getTemperatureColor = ({value} : {value: number}) => {
  const rgb = getRGB({min: -40, max: 50, current: value, blue: BLUE, green: GREEN, red: RED})
  return rgb;
}


export const TemperatureTD = styled(TD)<{value: number}>`
  box-shadow: inset 1px 1px 8px ${({value}) => getTemperatureColor({value})};
`

const getWindColor = ({value} : {value: number}) => {
  const rgb = getRGB({min: 0, max: 15, current: value,
    blue: [255, ...BLUE.slice(4)],
    green: [255, ...GREEN.slice(4)],
    red: [255, ...RED.slice(4)]})
  return rgb;
}

export const WindTD = styled(TD)<{value: number}>`
  box-shadow: inset 1px 1px 8px ${({value}) => getWindColor({value})};
`

const getGustColor = ({value} : {value: number}) => {
  const rgb = getRGB({min: 0, max: 25, current: value,
    blue: [255, ...BLUE.slice(4)],
    green: [255, ...GREEN.slice(4)],
    red: [255, ...RED.slice(4)]})
  return rgb;
}

export const GustTD = styled.td<{value: number}>`
  box-shadow: inset 1px 1px 8px ${({value}) => getGustColor({value})};
`;


const getPressuresColor = ({value} : {value: number}) => {
  const rgb = getRGB({min: 700, max: 800, current: value,
    blue: BLUE,
    green: GREEN,
    red: RED})
  return rgb;
}

export const PressureTD = styled.td<{value: number}>`
  box-shadow: inset 1px 1px 8px ${({value}) => getPressuresColor({value})};
`;


const getPrecipitationsColor = ({value} : {value: number}) => {
  const rgb = getRGB({min: 0, max: 20, current: value,
    blue: [255, ...BLUE.slice(5)],
    green: [255, ...GREEN.slice(5)],
    red: [255, ...RED.slice(5)]})
  return rgb;
}

export const PrecipitationTD = styled.td<{value: number}>`
  box-shadow: inset 1px 1px 8px ${({value}) => getPrecipitationsColor({value})};
`;

export const Table = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border-bottom: 2px solid var(--color-label-active);

  & td, & th {
    vertical-align: top;
    text-align: center;
    width:60px;
    padding: 2px;
    height: 26px;
  }

  & td {
    border-top: 2px solid var(--color-label-active);
    border-right: 2px solid var(--color-label-active);
    overflow: hidden;

  }
  & tr {
    border-right: 2px solid var(--color-label-active);
  }

  & td:first-child, & th:first-child {
    position: sticky;
    background: white;
    left: 0;
    width: 130px;
    text-align: center;
  }
`;

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

export const FirstTD = styled.td``;
