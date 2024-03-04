import React from 'react';
import { StyledBackground, StyledBar } from './Home.styles';
import MultiSelectContainer from '../../components/MultiSelectContainer/MultiSelectContainer';
import { ToastContainer } from 'react-toastify';
import Header from '../../components/MultiSelectContainer/Header/Header';
import WelcomeMessage from '../../components/MultiSelectContainer/WelcomeMessage/WelcomeMessage';
import AuthorInfo from '../../components/AuthorInfo/AuthorInfo';

const Home: React.FC = () => {
  return (
    <>
      <StyledBar />
      <Header />
      <StyledBackground>
        <WelcomeMessage />
        <MultiSelectContainer />
        <ToastContainer />
      </StyledBackground>
      <AuthorInfo />
    </>
  );
}

export default Home;
