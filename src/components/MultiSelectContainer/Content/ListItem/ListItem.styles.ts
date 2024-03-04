import styled, { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StyledListItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  text-align: center;
  width: 100%;
  margin-bottom: 20px;
  box-sizing: border-box;

  @media (min-width: 660px) {
    width: calc(50% - 10px);
  }
  @media (min-width: 1000px) {
    width: calc(25% - 10px);
  }

  @media (max-width: 601px) {
    width: 70%;
  }
  @media (max-width: 400px) {
    width: 80%;
  }

  animation: ${fadeIn} 0.5s ease-in-out; /* Giriş animasyonu */
  transition: transform 0.5s ease-in-out; /* Çıkış animasyonu için transition tanımlaması */

  &:hover {
    transform: translateY(-5px); /* Çıkış animasyonunu tetikleyen hover efekti */
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

export const StyledContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px;
  border-radius: 0 0 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledCheckbox = styled.input`
  margin-bottom: 5px;
`;

export const StyledName = styled.p`
  margin: 0;
`;

export const StyledEpisodeCount = styled.span`
  position: absolute;
  bottom: 3px;
`;
