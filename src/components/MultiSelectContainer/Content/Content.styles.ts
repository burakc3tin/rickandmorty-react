import styled from "styled-components";

export const MainContentContainer = styled.div`
  position: fixed;
  top:310px;
  overflow: auto;
  height: 50%;
  
  @media (min-width: 1024px) {
    height:50%;
  }

  @media (min-width: 1024px) and (min-height: 600px){
    height:35%;
  }

  @media (max-width: 640px) {
    height:50%;
  }

  @media (max-width: 400px) {
    height:45%;
  }

  @media (max-width: 300px) {
    height:40%;
  }
`;

export const StyledContentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 10px;
  width: 800px;
   @media (max-width: 1000px) {
    width: 600px;
   }
  @media (max-width: 660px) {
    width: 450px;
   }
  @media (max-width: 450px) {
    width: 350px;
   }
  @media (max-width: 361px) {
    width: 300px;
   }
  @media (max-width: 281px) {
    width: 250px;
   }
`;
