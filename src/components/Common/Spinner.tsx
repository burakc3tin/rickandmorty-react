import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Error from './Error';
import { useCharacter } from '../../hooks/useCharacter';
const Spinner: React.FC = () => {
  const [showSpinner, setShowSpinner] = useState(true);
  const {
    setSearchTerm, 
  } = useCharacter();
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSpinner(false);
      Error('Oops! No answer for a long time.');
      setSearchTerm(''); 
    }, 5000);

    return () => clearTimeout(timeout);
  }, [setSearchTerm]);

  return showSpinner ? (
    <SpinnerContainer>
      <SpinnerElement />
    </SpinnerContainer>
  ) : null;
};

export default Spinner;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const SpinnerElement = styled.div`
  border: 8px solid orange;
  border-top: 8px solid #333;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 2s linear infinite;
`;
