import React from 'react';
import ListItem from './ListItem/ListItem';
import { useCharacter } from '../../../hooks/useCharacter';
import Spinner from '../../Common/Spinner';
import { MainContentContainer, StyledContentContainer } from './Content.styles';

interface ContentProps {}

const Content: React.FC<ContentProps> = () => {
  const { searchTerm, filteredCharacters, charactersLoading } = useCharacter();

  return (
    <MainContentContainer>
    <StyledContentContainer tabIndex={0}>
      {charactersLoading ? (
        <Spinner />
      ) : searchTerm !== '' ? (
        filteredCharacters.length > 0 ? (
          filteredCharacters.map((character) => (
            <ListItem key={character.id} character={character} />
          ))
        ) : (
          <Spinner/>
        )
      ) : null}
    </StyledContentContainer>
    </MainContentContainer>
  );
};

export default Content;
