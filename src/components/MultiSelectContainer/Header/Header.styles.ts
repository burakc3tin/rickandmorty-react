import styled from 'styled-components';

export const StyledHeader = styled.div`
  background-color: black;
  height: 5em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  height: 4em;
  width: auto;

  @media (max-width: 1000px) {
    height: 3.5em;
  }

  @media (max-width: 660px) {
    height: 3em;
  }

  @media (max-width: 450px) {
    height: 2.8em;
  }

  @media (max-width: 400px) {
    height: 2.6em;
  }

  @media (max-width: 360px) {
    height: 2.4em;
  }

  @media (max-width: 281px) {
    height: 2.2em;
  }
`;