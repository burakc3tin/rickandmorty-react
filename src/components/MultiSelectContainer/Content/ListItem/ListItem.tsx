import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Character } from "../../../../services/rickAndMortyApi";
import { useCharacter } from "../../../../hooks/useCharacter";
import {
  StyledListItem,
  StyledImage,
  StyledContent,
  StyledCheckbox,
  StyledName,
  StyledEpisodeCount,
} from "./ListItem.styles";

interface ListItemProps {
  character: Character;
}

const ListItem: React.FC<ListItemProps> = ({ character }) => {
  const { addToSelectedCharacters, selectedCharacters, searchTerm } =
    useCharacter();
  const isChecked = selectedCharacters.includes(character);
  const [highlightedName, setHighlightedName] = useState(character.name);

  useEffect(() => {
    setHighlightedName(getHighlightedName(character.name, searchTerm));
  }, [character.name, searchTerm]);

  const handleCheckboxChange = () => {
    addToSelectedCharacters(character, !isChecked);
  };

  const getHighlightedName = (name: string, searchTerm: string) => {
    if (!name || !searchTerm) {
      return name;
    }

    const termWords = searchTerm.split(" ").filter((word) => word !== "");
    let highlightedName = name.toLowerCase();

    termWords.forEach((word) => {
      const regex = new RegExp(`(${word})`, "gi");
      highlightedName = highlightedName.replace(
        regex,
        (_, match) => `<span style="color:yellow">${match}</span>`
      );
    });

    return highlightedName;
  };

  return (
    <StyledListItem>
      <StyledImage src={character.image} alt={character.name} />
      <StyledContent>
        <StyledCheckbox
          tabIndex={0}
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <StyledName dangerouslySetInnerHTML={{ __html: highlightedName }} />
        <StyledEpisodeCount>
          {character.episode ? character.episode.length : 0} Episodes
        </StyledEpisodeCount>
      </StyledContent>
    </StyledListItem>
  );
};

ListItem.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    episode: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
};

export default ListItem;
