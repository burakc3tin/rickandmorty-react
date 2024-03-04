import React from 'react';
import Search from './Search/Search';
import Content from './Content/Content';
import { StyledIndexContainer } from './MultiSelectContainer.styles';

const Index: React.FC = () => {
  return (
    <StyledIndexContainer>
      <Search />
      <Content />
    </StyledIndexContainer>
  );
}

export default Index;
