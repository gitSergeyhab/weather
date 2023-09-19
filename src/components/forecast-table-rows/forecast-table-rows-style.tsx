import styled from "styled-components";
import { getGustColor, getPrecipitationsColor, getPressuresColor, getTemperatureColor, getWindColor,  } from "../../utils/color-utils";

const TD = styled.td`
  font-weight: 700;
`;

export const TemperatureTD = styled(TD)<{value: number}>`
  box-shadow: inset 1px 1px 8px ${({value}) => getTemperatureColor({value})};
`
export const WindTD = styled(TD)<{value: number}>`
  box-shadow: inset 1px 1px 8px ${({value}) => getWindColor({value})};
`
export const GustTD = styled.td<{value: number}>`
  box-shadow: inset 1px 1px 8px ${({value}) => getGustColor({value})};
`;

export const PressureTD = styled.td<{value: number}>`
  box-shadow: inset 1px 1px 8px ${({value}) => getPressuresColor({value})};
`;

export const PrecipitationTD = styled.td<{value: number}>`
  box-shadow: inset 1px 1px 8px ${({value}) => getPrecipitationsColor({value})};
`;
