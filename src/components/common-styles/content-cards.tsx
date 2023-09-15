import styled from "styled-components";

export const ContentCards  = styled.div`
  width: calc(50% - 2px);
  height: 100%;
  padding-bottom: 100px;
  overflow-y: auto;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  & > div {
    margin-bottom: 2px;

    &:last-child {
      margin-bottom: 80px;
    }
  }
`;

export const ContentBigCards = styled(ContentCards)`
  position: relative;
  z-index: 1;
`
