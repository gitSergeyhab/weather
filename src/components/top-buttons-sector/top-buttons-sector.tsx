import { ReactNode } from 'react';
import styled from 'styled-components';

export const ButtonSector = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  flex-shrink: 0;
  margin-right: 20px;
  margin-bottom: -2px;

  &:last-child {
    margin-right: 0;
  }
  & > div {
  margin-right: 2px;
  margin-bottom: 2px;
  }

  & > div:last-child {
    margin-right: 0;
  }

  & > div:last-child {
    margin-right: 0;
  }
`;


export function TopButtonSector ({children}: {children: ReactNode}) {
  return <ButtonSector>{children}</ButtonSector>
}
