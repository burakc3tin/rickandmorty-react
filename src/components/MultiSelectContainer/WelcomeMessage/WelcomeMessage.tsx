import React from "react";
import {
  StyledWelcomeMessage,
  MiniImageStyled,
  WelcomeText,
} from "./WelcomeMessage.styles";
import MiniImage from "../../../../public/favicon.ico";

interface WelcomeMessageProps {}

const WelcomeMessage: React.FC<WelcomeMessageProps> = () => {
  return (
    <StyledWelcomeMessage>
      <WelcomeText>
        welcome to rickandmorty w
        <MiniImageStyled src={MiniImage} alt="mini_image" />
        rld
      </WelcomeText>
    </StyledWelcomeMessage>
  );
};

export default WelcomeMessage;
