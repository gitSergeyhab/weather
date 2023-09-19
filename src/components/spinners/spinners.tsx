import ScaleLoader from 'react-spinners/ScaleLoader';
import styled from 'styled-components';
import { BigCard } from '../common-styles/big-card';

const SpinnerSection = styled.section`
  text-align: center;
  font-size: 1em;
  font-weight: 400;
  padding: 1rem;
  background-color: #0d0101;
  color: gold;
  width: 100%;
`;

const BigCardSpinner = styled.div`
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

`

export function Spinner() {

  return (
    <BigCard >
      <span>Loading ...</span>
      <ScaleLoader
        color="gold"
        loading
        height={10}
        width={10}
        radius={3}
        margin={7}
      />
    </BigCard>
  );
}

