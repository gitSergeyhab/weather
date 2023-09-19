import styled from "styled-components";

export const BigCardHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px 20px 10px 20px;
  background-color: var(--color-white);
  transition: background-color ease-in-out 0.3s;
`;

export const BigCardCity  = styled.div`
  font-size: 28px;
  line-height: 28px;
  transition: background-color ease-in-out 0.3s;
`;

export const BigCardContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px 24px 24px 20px;
  background-color: var(--color-light-grey);
  transition: background-color ease-in-out 0.3s;
`;

export const BigCardWindInfo = styled.span`
  margin-left: 10px;
  color: var(--color-text-light-blue);
  opacity: 0.8;
  transition: color var(--transition-base);
`;

export const BigCardTemperature = styled.span`
  margin-left: auto;
  font-size: 40px;
  line-height: 40px;
  letter-spacing: -0.05em;
  opacity: 0.8;
  transition: color var(--transition-base);
`;

export const BigCard = styled.div.attrs({draggable: 'true'})`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  min-height: 172px;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  transition: filter var(--transition-base);

  &:active {
    filter: drop-shadow(0 8px 20px rgba(11, 23, 78, 0.5));
  }
  &:hover ${BigCardCity} {
    color: var(--color-text-white);
  }
  &:hover ${BigCardTemperature}, &:hover ${BigCardWindInfo} {
    color: var(--color-text-white);
  }
  &:hover ${BigCardHeader} {
   background-color: var(--color-blue-light);
  }
  &:hover ${BigCardContent} {
   background-color: var(--color-blue-main);
 }

transition: all ease-in-out .3s;
`;


export const BigCardConditions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: -2px;

  & span {
    margin-right: 10px;
    margin-bottom: 2px;

    &:last-child {margin-right: 0;}
  }
`;

export const BigCardWind = styled.span`
  display: flex;
  align-items: center;
  margin-top: 12px;
`;

export const BigCardEmpty = styled(BigCard)`
  pointer-events: none;
  min-height: 172px;
  background-color: var(--color-blue-lightest);
  border: 2px dashed var(--color-border);
`;
