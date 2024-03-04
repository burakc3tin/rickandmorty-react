import React from "react";
import { useCharacter } from "../../../hooks/useCharacter";
import { SEARCH_PLACEHOLDER } from "../../../constants/constants";
import {
  StyledMain,
  StyledInput,
  StyledSelectedCharacters,
  StyledListItem,
  StyledButton,
} from "./Search.styles";
const Search: React.FC = () => {
  const {
    searchTerm,
    setSearchTerm,
    selectedCharacters,
    removeFromSelectedCharacters,
  } = useCharacter();

  return (
    <StyledMain>
      <StyledInput
        type="text"
        placeholder={SEARCH_PLACEHOLDER}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <StyledSelectedCharacters>
        <ul>
          {selectedCharacters.map((character) => (
            <StyledListItem key={character.id}>
              <StyledButton
                onClick={() => removeFromSelectedCharacters(character.id)}>
                X
              </StyledButton>
              {character.name}
            </StyledListItem>
          ))}
        </ul>
      </StyledSelectedCharacters>
    </StyledMain>
  );
};

export default Search;
