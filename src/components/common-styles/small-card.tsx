import styled from "styled-components";


export const SmallCardCity = styled.span`
  flex-grow: 1;
  margin-right: 20px;
  transition: color ease-in-out .3s;
`;

export const SmallCardTemperature = styled.span`
  margin-right: 20px;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -0.02em;
  transition: color ease-in-out .3s;
`;

export const SmallCard = styled.div.attrs({draggable: 'true'})`
 display: flex;
  align-items: center;
  width: 350px;
  padding: 16px 20px;
  background-color: var(--color-light-grey);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  transition: background-color ease-in-out 0.3s;
  &:hover {
    background-color: var(--color-blue-light);
  }
  &:active {
    filter: drop-shadow(0 8px 20px rgba(11, 23, 78, 0.5));
  }
  &:hover ${SmallCardCity} {color: var(--color-text-white);}
  &:hover ${SmallCardTemperature} {color: var(--color-text-white);}
`;

export const SmallCardEmpty = styled(SmallCard)`
  pointer-events: none;
  min-height: 56px;
  background-color: rgba(247, 248, 255, 0.3);
  border: 2px dashed var(--color-border);
`;
