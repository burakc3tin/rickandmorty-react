import React, { createContext, ReactNode, useState, useEffect } from "react";
import rickAndMortyApi, { Character } from "../services/rickAndMortyApi";
import Error from "../components/Common/Error";

interface CharacterContextProps {
  searchTerm: string;
  characters: Character[];
  filteredCharacters: Character[];
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setCharacters: React.Dispatch<React.SetStateAction<Character[]>>;
  setFilteredCharacters: React.Dispatch<React.SetStateAction<Character[]>>;
  selectedCharacters: Character[];
  addToSelectedCharacters: (character: Character, isSelected: boolean) => void;
  removeFromSelectedCharacters: (characterId: number) => void;
  charactersLoading: boolean;
}

const CharacterContext = createContext<CharacterContextProps | undefined>(
  undefined
);

interface CharacterProviderProps {
  children: ReactNode;
}

const CharacterProvider: React.FC<CharacterProviderProps> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [characters, setCharacters] = useState<Character[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);
  const [selectedCharacters, setSelectedCharacters] = useState<Character[]>([]);
  const [charactersLoading, setCharactersLoading] = useState<boolean>(true);

  const addToSelectedCharacters = (
    character: Character,
    isSelected: boolean
  ) => {
    if (isSelected) {
      setSelectedCharacters((prevSelected) => {
        if (prevSelected.some((c) => c.id === character.id)) {
          return prevSelected;
        }

        return [...prevSelected, character];
      });
    } else {
      setSelectedCharacters((prevSelected) =>
        prevSelected.filter(
          (selectedCharacter) => selectedCharacter.id !== character.id
        )
      );
    }
  };

  const removeFromSelectedCharacters = (characterId: number) => {
    setSelectedCharacters((prevSelected) =>
      prevSelected.filter(
        (selectedCharacter) => selectedCharacter.id !== characterId
      )
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setCharactersLoading(true);
        const fetchedCharacters = await rickAndMortyApi.getCharacters();
        setCharacters(fetchedCharacters);
      } catch (error) {
        Error("Error fetching data:");
      } finally {
        setCharactersLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = characters.filter((character) =>
      isNameMatchingSearchTerm(
        character.name.toLowerCase(),
        searchTerm.toLowerCase()
      )
    );

    setFilteredCharacters(filtered);
  }, [searchTerm, characters]);

  const isNameMatchingSearchTerm = (name: string, term: string) => {
    const termWords = term.split(" ");
    const nameWords = name.split(" ");

    for (let i = 0; i <= nameWords.length - termWords.length; i++) {
      const match = termWords.every((word, index) =>
        nameWords[i + index].includes(word)
      );
      if (match) {
        return true;
      }
    }

    return false;
  };

  return (
    <CharacterContext.Provider
      value={{
        searchTerm,
        characters,
        filteredCharacters,
        setSearchTerm,
        setCharacters,
        setFilteredCharacters,
        selectedCharacters,
        addToSelectedCharacters,
        removeFromSelectedCharacters,
        charactersLoading,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export { CharacterProvider, CharacterContext };
