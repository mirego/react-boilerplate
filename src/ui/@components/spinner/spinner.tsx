import styled from '@emotion/styled/macro';
import {keyframes} from 'emotion/macro';
import React, {FunctionComponent} from 'react';

interface Props {
  size: number;
}

const rotate = keyframes`
  from { transform: rotate(0); }
  to { transform: rotate(360deg); }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px;
`;

const Spinning = styled.div`
  font-size: ${({size}: Props) => size}px;
  line-height: 1;
  animation: ${rotate} 1s linear infinite;
`;

const Spinner: FunctionComponent<Props> = ({size}) => {
  return (
    <Container>
      <Spinning size={size}>🌀</Spinning>
    </Container>
  );
};

export default Spinner;
