import styled from "styled-components"
import { iconFilterTypes } from "../../const";

export const SvgImg = styled.span<{version: string}>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 24px;
  height: 24px;

  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export const ConditionImg = styled(SvgImg)`
  background-image: ${({version}) => iconFilterTypes.includes(version) ?
  `url('../../assets/img/icon/icon-${version}.svg')` : `url('../../assets/img/icon/icon-wind.svg')`} ;
`;

export const SortImg = styled(SvgImg)`
  background-image: url('../../assets/img/icon/icon-population.svg');
  ${({version}) => version === 'up' ? 'transform: scale(-1, 1)' : ''};
`;
