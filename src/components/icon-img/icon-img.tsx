import styled, { css } from "styled-components"
import { iconFilterTypes } from "../../const/const";

const smallCss = css`
width: 16px;
height: 16px;`


export const IconImg = styled.span<{version?: string, small?: boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  ${({small}) => small ? smallCss : ''}

  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export const ConditionImg = styled(IconImg)`

  background-image: ${({version}) => version && iconFilterTypes.includes(version) ?
  `url('assets/img/icon/icon-${version}.svg')` : `url('assets/img/icon/icon-wind.svg')`} ;
`;

export const SortImg = styled(IconImg)`
  background-image: url('assets/img/icon/icon-population.svg');
  ${({version}) => version === 'up' ? 'transform: scale(-1, 1)' : ''};
`;

export const IconStripsBig = styled(IconImg)`
  width: 6px;
  height: 22px;
  margin-right: 16px;
  background-image: url('assets/img/icon/icon-strips-big.svg');
`;

export const IconStripsSmall = styled(IconImg)`
  width: 6px;
  height: 16px;
  background-image: url('assets/img/icon/icon-strips-small.svg');
`;

export const IconWind = styled(IconImg)`
  background-image: url('assets/img/icon/icon-wind.svg');
`;

