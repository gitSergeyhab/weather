import { ReactNode } from 'react';
import styled from 'styled-components';
import { VisuallyHidden } from '../common-styles/common';


const SortSection = styled.section`
  display: flex;
  & form {
    display: flex;
    min-width: 712px;
    padding: 12px 20px;
    background-color: var(--color-blue-main);
  }
`;

const HiddenHeader = styled.h2`
  ${VisuallyHidden}
`;

export function TopButtonSection ({children}: {children: ReactNode}) {
  console.log('TopButtonSection')
  return (
    <SortSection>
      <HiddenHeader>Форма сортировки</HiddenHeader>
      <form action="#" method="GET">
        {children}
      </form>
    </SortSection>
  )
}
