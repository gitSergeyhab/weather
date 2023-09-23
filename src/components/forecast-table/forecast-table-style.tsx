import styled from "styled-components";


export const Table = styled.table`
  table-layout: fixed;
  width: 100%;

  & td, & th {
    vertical-align: top;
    text-align: center;
    width:60px;
    padding: 2px;
    height: 26px;
  }

  & td {
    border: 2px solid var(--color-label-active);
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

export const FirstTD = styled.td``;

export const ForecastWrapper = styled.div`
  overflow-x: scroll;
`;
