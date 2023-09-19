import ScaleLoader from 'react-spinners/ScaleLoader';
import styled, { css } from 'styled-components';
import { BigCard } from '../common-styles/big-card';


const centerStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CardSpinnerWrapper = styled(BigCard)`${centerStyle}`;
const ForecastSpinnerWrapper = styled.div`
  ${centerStyle};
  height: 200px;
  row-gap: 1rem;
  font-size: large;

`

export function BigCardSpinner() {

  return (
    <CardSpinnerWrapper >
      <span>Loading ...</span>
      <ScaleLoader
        color="#122fbe"
        loading
        height={10}
        width={10}
        radius={3}
        margin={7}
      />
    </CardSpinnerWrapper>
  );
}

export function ForecastSpinner() {

  return (
    <ForecastSpinnerWrapper>
      <span>Loading ...</span>
      <ScaleLoader
        color="#122fbe"
        loading
        height={16}
        width={16}
        radius={6}
        margin={10}
      />
    </ForecastSpinnerWrapper>
  );
}
