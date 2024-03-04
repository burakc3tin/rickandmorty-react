import styled, { keyframes } from 'styled-components';

export const shakeAnimation = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-3px); }
  100% { transform: translateX(3px); }
`;

export const StyledAuthorInfo = styled.div`
  min-height: 50px;
  background-color: brown;
  color: white;
  letter-spacing: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    color: inherit;
    display: inline-block;

    &:hover {
      animation: ${shakeAnimation} 0.3s ease-in-out;
    }
  }
`;
