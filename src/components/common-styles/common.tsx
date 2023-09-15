import styled, { css } from "styled-components";

export const VisuallyHidden = css`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  clip: rect(0 0 0 0);
`;

export const HiddenH2 = styled.h2`${VisuallyHidden}`;

export const CardList = css`
  margin: 0;
  padding: 0;
`;

export const Card = css`
  list-style-type: none;
  margin-bottom: 3px;
  padding: 2px;
`;

export const CardDragged = css`
  &::after {
    display: none;
  }
`



// .card.active .big-card__city {
//   color: var(--color-text-white);
// }

// .card.active .big-card__temperature,
// .card.active .big-card__wind-info {
//   color: var(--color-text-white);
// }

// .card.active .big-card__header {
//   background-color: var(--color-blue-light);
// }

// .card.active .big-card__content {
//   background-color: var(--color-blue-main);
// }

// .hidden-block {
//   display: none;
// }
