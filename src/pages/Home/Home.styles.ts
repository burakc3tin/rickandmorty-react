import styled from 'styled-components';
import backgroundImage from '../../assets/images/background.jpg';

export const StyledBackground = styled.div`
  background-image: url('${backgroundImage}');
  background-size: cover;
  background-position: center;
  min-height: calc(100vh - 8.5em);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledBar = styled.div`
  min-height: 5px;
  background-color: #FFA500;
`;

