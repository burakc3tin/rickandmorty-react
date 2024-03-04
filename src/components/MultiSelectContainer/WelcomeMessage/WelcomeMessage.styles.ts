import styled from "styled-components";

export const StyledWelcomeMessage = styled.div`
  marginBottom: 2rem;
  top: 120px;
  position: fixed;
  text-align: center;
`;

export const MiniImageStyled = styled.img`
width:35px;
height:35px;
padding:0;
marginLeft:-22px;
marginRight:-24px;

@media (max-width: 450px) {
    width:20px;
    height:20px;  
}
`;

export const WelcomeText = styled.span`
  color: white;
  font-size: 2.2rem;
  
  @media (max-width: 1000px) {
    font-size: 2rem;
  }

  @media (max-width: 660px) {
    font-size: 1.4rem;
  }

  @media (max-width: 450px) {
    font-size: 1.2rem;
  }

  @media (max-width: 361px) {
    font-size: 1rem;
  }

  @media (max-width: 281px) {
    font-size: 0.8rem;
  }
`;
