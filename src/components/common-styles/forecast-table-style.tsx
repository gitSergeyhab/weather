import styled, { css } from "styled-components";

const fix = css`
  position: sticky;
  background: white;
  &:first-child {
    left:0;
    width:180px;
  }
`

export const FixTH = styled.th`${fix}`;
export const FixTD = styled.td`${fix}`;
