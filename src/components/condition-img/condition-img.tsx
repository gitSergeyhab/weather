import styled, { css } from "styled-components"
import { iconFilterTypes, iconSortTypes } from "../../const";


const arrowPart = css`
  width: 20px;
  height: 22px;
`
export const ConditionImg = styled.span<{version: string}>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 24px;
  height: 24px;

  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  background-image: ${({version}) => [...iconFilterTypes, ...iconSortTypes].includes(version) ?
  `url('../../assets/img/icon/icon-${version}.svg')` : `url('../../assets/img/icon/icon-wind.svg')`} ;
  ${({version}) => iconSortTypes.includes(version) ? arrowPart : ''};
`;

